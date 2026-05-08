import React, { Fragment } from "react";
import Head from "next/head";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import PageTitle from "../../components/pagetitle/PageTitle";
import BlogList from "../../components/BlogList/BlogList";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/logo-2.svg";
import { getBlogListPageProps } from "../../lib/getBlogListPageProps";

export async function getServerSideProps(context) {
  return getBlogListPageProps(context);
}

const BlogPageLeft = ({ blogs, total, totalPages, page, dbError }) => {
  return (
    <Fragment>
      <Head>
        <title>Blog | Ryzonix</title>
      </Head>
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <PageTitle pagesub={"Blog"} />
      <BlogList
        Qclass={"blog-pg-section blog-pg-left-sidebar section-padding"}
        blLeft={"order-lg-1"}
        blRight={"order-lg-2"}
        blogs={blogs}
        page={page}
        totalPages={totalPages}
        total={total}
        dbError={dbError}
        paginationBasePath="/blog-left-sidebar"
      />
      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogPageLeft;
