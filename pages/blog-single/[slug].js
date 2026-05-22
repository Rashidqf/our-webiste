import React, { Fragment } from "react";
import SeoHead from "../../components/seo/SeoHead";
import { formatTitle } from "../../lib/seo/site";
import { buildBreadcrumbJsonLd } from "../../lib/seo/breadcrumbs";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import Scrollbar from "../../components/scrollbar/scrollbar";
import BlogSingle from "../../components/BlogDetails/BlogSingle";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/logo.png";
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
      <SeoHead
        title={formatTitle(post.title)}
        description={post.description || `${post.title} — insights from Ryzonix on web development and IT consulting.`}
        keywords={`${post.title}, Ryzonix blog, web development, IT consulting`}
        canonicalPath={`/blog-single/${post.slug}`}
        ogType="article"
        jsonLd={[
          buildBreadcrumbJsonLd([
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog-single/${post.slug}` },
          ]),
        ]}
      />
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <BlogSingle post={post} recentPosts={recentPosts} />
      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetails;
