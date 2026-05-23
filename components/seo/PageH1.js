/**
 * Single page-level H1 for SEO. Defaults to screen-reader only so layout stays unchanged.
 */
export default function PageH1({ children, visible = false, id, className = "" }) {
  const classes = visible
    ? className
    : ["visually-hidden", className].filter(Boolean).join(" ");

  return (
    <h1 id={id} className={classes || undefined}>
      {children}
    </h1>
  );
}
