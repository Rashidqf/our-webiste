import { generateSitemapXml } from "../lib/seo/generateSitemap";

export async function getServerSideProps({ res }) {
  const sitemap = await generateSitemapXml();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() {
  return null;
}
