(async function exportCleanMarkdown() {
    const url = location.href;
    const title = document.title || "Website Export";
    const root = document.querySelector("main") ||
        document.querySelector('[role="main"]') ||
        document.body;

    const clone = root.cloneNode(true);

    // Remove scripts and elements that usually add noise
    clone.querySelectorAll(
        "script, style, noscript, iframe, svg, canvas, video, audio, " +
        "template, [hidden], [aria-hidden='true']"
    ).forEach(el => el.remove());

    const clean = text =>
        (text || "").replace(/\u00a0/g, " ")
            .replace(/[ \t]+/g, " ")
            .replace(/\n\s*\n\s*\n+/g, "\n\n")
            .trim();

    const absoluteURL = value => {
        if (!value || value.startsWith("data:")) return "";
        try {
            return new URL(value, location.href).href;
        } catch {
            return value;
        }
    };

    const meta = selector =>
        document.querySelector(selector)?.content?.trim() || "";

    const lines = [
        `# ${title} `,
        "",
        `Source: ${url} `,
        `Extracted: ${new Date().toISOString()} `,
        "",
        "## SEO metadata",
        "",
        `- Description: ${meta('meta[name="description"]') || "Not provided"} `,
        `- Canonical: ${absoluteURL(document.querySelector('link[rel="canonical"]')?.href) || url} `,
        `- Language: ${document.documentElement.lang || "Not specified"} `,
        `- Robots: ${meta('meta[name="robots"]') || "Not specified"} `,
        ""
    ];

    const seen = new Set();

    function convert(node, depth = 0) {
        if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent.replace(/\s+/g, " ");
        }

        if (node.nodeType !== Node.ELEMENT_NODE) return "";

        const tag = node.tagName.toLowerCase();

        if ([
            "script", "style", "noscript", "svg", "canvas",
            "iframe", "video", "audio", "template"
        ].includes(tag)) return "";

        if (node.hidden || node.getAttribute("aria-hidden") === "true") {
            return "";
        }

        if (tag === "img") {
            const src = absoluteURL(
                node.currentSrc ||
                node.getAttribute("src") ||
                node.getAttribute("data-src") ||
                node.getAttribute("data-lazy-src")
            );

            const alt = clean(node.alt || node.getAttribute("title") || "Image");

            return src ? `![${alt}](${src})` : "";
        }

        if (tag === "br") return "\n";
        if (tag === "hr") return "\n\n---\n\n";

        if (tag === "a") {
            const text = clean(
                [...node.childNodes].map(child => convert(child, depth)).join("")
            );

            const href = absoluteURL(
                node.getAttribute("href") ||
                node.getAttribute("data-href")
            );

            if (!text && !href) return "";
            if (!href) return text;

            return `[${text || href}](${href})`;
        }

        const children = () =>
            [...node.childNodes].map(child => convert(child, depth + 1)).join("");

        let text = clean(children());
        if (!text) return "";

        // Avoid duplicate text blocks without removing repeated words
        if (["p", "h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
            const key = `${tag}:${text} `;
            if (seen.has(key)) return "";
            seen.add(key);
        }

        if (/^h[1-6]$/.test(tag)) {
            return `\n\n${"#".repeat(Number(tag[1]))} ${text} \n\n`;
        }

        if (tag === "p") return `\n\n${text} \n\n`;

        if (tag === "strong" || tag === "b") return `** ${text}** `;
        if (tag === "em" || tag === "i") return `* ${text}* `;
        if (tag === "del" || tag === "s") return `~~${text} ~~`;

        if (tag === "code") return `\`${text}\``;

        if (tag === "pre") {
            return `\n\n\`\`\`\n${node.innerText.trim()}\n\`\`\`\n\n`;
        }

        if (tag === "blockquote") {
            return `\n\n> ${text.replace(/\n/g, "\n> ")}\n\n`;
        }

        if (tag === "li") {
            const ordered = node.parentElement?.tagName === "OL";
            const siblings = [...(node.parentElement?.children || [])];
            const index = siblings.indexOf(node) + 1;
            const prefix = ordered ? `${index}.` : "-";
            return `\n${prefix} ${text}`;
        }

        if (tag === "ul" || tag === "ol") {
            return `\n${children()}\n`;
        }

        if (tag === "table") {
            const rows = [...node.querySelectorAll("tr")].map(tr =>
                [...tr.children].map(cell =>
                    clean(cell.innerText).replace(/\|/g, "\\|").replace(/\n/g, " ")
                )
            ).filter(row => row.length);

            if (!rows.length) return "";

            const width = Math.max(...rows.map(row => row.length));
            const format = row =>
                "| " + Array.from({ length: width }, (_, i) => row[i] || "").join(" | ") + " |";

            return "\n\n" + format(rows[0]) +
                "\n" + format(Array(width).fill("---")) +
                "\n" + rows.slice(1).map(format).join("\n") + "\n\n";
        }

        if (["section", "article", "div", "main", "header"].includes(tag)) {
            return `\n${children()}\n`;
        }

        return children();
    }

    const body = convert(clone)
        .replace(/[ \t]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

    lines.push("## Page content", "", body, "");

    // Capture useful page-level links separately
    const links = [...root.querySelectorAll("a[href]")]
        .map(a => ({
            text: clean(a.innerText || a.getAttribute("aria-label") || ""),
            href: absoluteURL(a.getAttribute("href"))
        }))
        .filter(a => a.text && a.href);

    const uniqueLinks = [...new Map(
        links.map(link => [`${link.text}|${link.href}`, link])
    ).values()];

    lines.push("## Page links", "");

    uniqueLinks.forEach(link => {
        lines.push(`- [${link.text.replace(/\]/g, "\\]")}](${link.href})`);
    });

    lines.push("");

    const markdown = lines.join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim() + "\n";

    const filename = (location.hostname + "-" +
        (location.pathname.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home"))
        .replace(/[^a-z0-9._-]/gi, "-") + ".md";

    const blob = new Blob([markdown], {
        type: "text/markdown;charset=utf-8"
    });

    const objectURL = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = objectURL;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => URL.revokeObjectURL(objectURL), 1500);

    console.log("Markdown export complete:", {
        filename,
        characters: markdown.length,
        headings: (markdown.match(/^#{1,6} /gm) || []).length,
        links: uniqueLinks.length,
        images: (markdown.match(/!\[/g) || []).length
    });

    return markdown;
})();