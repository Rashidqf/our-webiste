import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePublishedBlogs } from "../../hooks/usePublishedBlogs";

const BlogSectionS2 = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { blogs, loading } = usePublishedBlogs(3, 0);

  return (
    <section className="blog-section-s2 section-padding">
      <div className="container">
        <div className="title">
          <h2
            className="scroll-text-animation"
            data-animation="fade_from_bottom"
          >
            News &amp; blog
          </h2>
          <div className="title-bottom">
            <h3
              className="scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              Latest from Ryzonix
            </h3>
            <Link
              onClick={ClickHandler}
              href="/blog"
              className="scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              <span className="rolling-text">All posts</span>
              <i className="ti-arrow-top-right"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          {loading && (
            <div className="col-12 py-4 text-center text-muted small">
              Loading…
            </div>
          )}
          {!loading &&
            blogs.map((blog) => (
              <div
                className="col-lg-4 col-md-6 col-12 fade_bottom"
                key={blog.id || blog.slug}
              >
                <div className="blog-card">
                  <div className="image">
                    <Image
                      src={blog.screens}
                      alt=""
                      width={600}
                      height={400}
                      sizes="(max-width: 992px) 100vw, 33vw"
                    />
                  </div>
                  <div className="content">
                    <span>{blog.create_at}</span>
                    <h3>
                      <Link
                        onClick={ClickHandler}
                        href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                      >
                        {blog.title}
                      </Link>
                    </h3>
                    <Link
                      onClick={ClickHandler}
                      href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                    >
                      <span className="rolling-text">read more</span>
                      <i className="ti-arrow-top-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          <div className="blog-btn fade_bottom">
            <Link onClick={ClickHandler} href="/blog" className="theme-btn">
              <span className="rolling-text">more blog</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSectionS2;
