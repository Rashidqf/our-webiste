import React, { Fragment } from "react";
import Head from "next/head";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import Scrollbar from "../../components/scrollbar/scrollbar";
import BlogSingle from "../../components/BlogDetails/BlogSingle";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/logo-2.svg";
import {
  getPublishedPostBySlug,
  listPublishedBlogs,
} from "../../lib/blogQueries";

export async function getServerSideProps({ params }) {
  const slug = params?.slug;
  if (!slug) return { notFound: true };

  try {
    const post = await getPublishedPostBySlug(slug);
    if (!post) return { notFound: true };

    const recent = await listPublishedBlogs({ page: 1, limit: 6 });
    const recentPosts = recent.posts.filter((p) => p.slug !== slug).slice(0, 3);

    return { props: { post, recentPosts } };
  } catch (e) {
    console.error("[blog-single]", e);
    return { notFound: true };
  }
}

const BlogDetails = ({ post, recentPosts }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title} | Ryzonix Blog</title>
        <meta name="description" content={post.description} />
      </Head>
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <BlogSingle post={post} recentPosts={recentPosts} />
      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetails;
