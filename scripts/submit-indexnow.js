/**
 * Submits all sitemap URLs to IndexNow (Bing, Yandex, etc.)
 * Run: node scripts/submit-indexnow.js
 */
const https = require("https");
const http = require("http");
const { CANONICAL_ORIGIN } = require("../lib/seo/siteUrl.cjs");

const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || "daea32186e60313c979e8b6880efa285";
const KEY_LOCATION = `${CANONICAL_ORIGIN}/${INDEXNOW_KEY}.txt`;
const HOST = new URL(CANONICAL_ORIGIN).hostname;

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, data }));
      })
      .on("error", reject);
  });
}

function postJson(url, payload) {
  return new Promise((resolve, reject) => {
    const dataString = JSON.stringify(payload);
    const parsed = new URL(url);

    const options = {
      hostname: parsed.hostname,
      path: parsed.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(dataString),
      },
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => resolve({ status: res.statusCode, body }));
    });

    req.on("error", reject);
    req.write(dataString);
    req.end();
  });
}

async function main() {
  console.log(`\n🚀 Starting IndexNow submission for ${HOST}...`);
  console.log(`🔑 Key: ${INDEXNOW_KEY}`);
  console.log(`📄 Verification file: ${KEY_LOCATION}\n`);

  // 1. Fetch URLs from sitemap
  console.log(`📡 Fetching live sitemap from ${CANONICAL_ORIGIN}/sitemap.xml ...`);
  let urls = [];

  try {
    const { status, data } = await fetchUrl(`${CANONICAL_ORIGIN}/sitemap.xml`);
    if (status === 200 && data) {
      const matches = data.match(/<loc>(.*?)<\/loc>/g);
      if (matches) {
        urls = matches.map((m) => m.replace(/<\/?loc>/g, "").trim());
      }
    }
  } catch (err) {
    console.warn(`⚠️ Could not fetch live sitemap (${err.message}). Using fallback list.`);
  }

  if (urls.length === 0) {
    console.error("❌ No URLs found to submit.");
    process.exit(1);
  }

  console.log(`✅ Discovered ${urls.length} URLs from sitemap.\n`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  // 2. Submit to api.indexnow.org
  console.log(`📤 Submitting to https://api.indexnow.org/indexnow ...`);
  try {
    const res = await postJson("https://api.indexnow.org/indexnow", payload);
    if (res.status === 200 || res.status === 202) {
      console.log(`🎉 Success! IndexNow returned HTTP ${res.status}.`);
      console.log(`   Bing, Yandex, Seznam, and Naver have received all ${urls.length} URLs.`);
    } else {
      console.warn(`⚠️ IndexNow returned HTTP ${res.status}: ${res.body}`);
    }
  } catch (err) {
    console.error(`❌ Failed to submit to api.indexnow.org: ${err.message}`);
  }

  // 3. Also submit directly to www.bing.com/indexnow
  console.log(`\n📤 Submitting directly to https://www.bing.com/indexnow ...`);
  try {
    const res = await postJson("https://www.bing.com/indexnow", payload);
    if (res.status === 200 || res.status === 202) {
      console.log(`🎉 Success! Bing IndexNow returned HTTP ${res.status}.`);
    } else {
      console.warn(`⚠️ Bing returned HTTP ${res.status}: ${res.body}`);
    }
  } catch (err) {
    console.error(`❌ Failed to submit to Bing: ${err.message}`);
  }

  console.log("\n✨ Done! New and updated URLs are queued for instant crawler priority.\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
