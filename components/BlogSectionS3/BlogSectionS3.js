import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePublishedBlogs } from "../../hooks/usePublishedBlogs";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSectionS3 = () => {
  const { blogs, loading } = usePublishedBlogs(3, 0);

  return (
    <section className="blog-section-s3 section-padding">
      <div className="container">
        <div className="title">
          <h3>
            See latest articles from <span>Ryzonix</span>
          </h3>
          <Link onClick={ClickHandler} href="/contact" className="theme-btn">
            <span className="rolling-text">Contact us</span>
            <i className="ti-arrow-top-right"></i>
          </Link>
        </div>
        <div
          className="row scroll-text-animation"
          data-animation="fade_from_bottom"
        >
          {loading && (
            <div className="col-12 py-4 text-center text-muted small">
              Loading…
            </div>
          )}
          {!loading &&
            blogs.map((blog) => (
              <div
                className="col-lg-4 col-md-6 col-12"
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
                    <Link
                      onClick={ClickHandler}
                      href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                    >
                      <i className="ti-arrow-top-right"></i>
                    </Link>
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
        </div>
      </div>
    </section>
  );
};

export default BlogSectionS3;
