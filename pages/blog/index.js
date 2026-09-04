import React, { Fragment } from "react";
import SeoHead from "../../components/seo/SeoHead";
import { PAGE_META } from "../../lib/seo/pageMeta";
import { buildBreadcrumbJsonLd } from "../../lib/seo/breadcrumbs";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import PageH1 from "../../components/seo/PageH1";
import PageTitle from "../../components/pagetitle/PageTitle";
import BlogList from "../../components/BlogList/BlogList";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "/public/images/logo.png";
import { getBlogListPageProps } from "../../lib/getBlogListPageProps";

export async function getServerSideProps(context) {
  return getBlogListPageProps(context);
}

const BlogPage = ({ blogs, total, totalPages, page, dbError }) => {
  const meta = PAGE_META.blog;

  return (
    <Fragment>
      <SeoHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonicalPath="/blog"
        jsonLd={[buildBreadcrumbJsonLd([{ name: 'Blog', path: '/blog' }])]}
      />
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <PageH1 id="blog-page-h1">Blog | Ryzonix</PageH1>
      <PageTitle pagesub={"Blog"} />
      <BlogList
        Qclass={"blog-pg-section section-padding"}
        blogs={blogs}
        page={page}
        totalPages={totalPages}
        total={total}
        dbError={dbError}
        paginationBasePath="/blog"
      />
      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogPage;
