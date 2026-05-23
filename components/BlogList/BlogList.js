import React from "react";
import Link from "next/link";
import BlogSidebar from "../BlogSidebar/BlogSidebar";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogList = (props) => {
  const {
    Qclass,
    blRight,
    blLeft,
    blogs = [],
    page = 1,
    totalPages = 1,
    dbError,
    paginationBasePath = "/blog",
  } = props;

  const sidebarPosts = blogs.slice(0, 3);

  return (
    <section className={"" + Qclass}>
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-md-12 col-12 ${blRight || ""}`}>
            <div className="blog-content">
              {dbError && (
                <p className="mb-4 text-danger">
                  Blog database is not available. Set <code>MONGODB_URI</code>{" "}
                  and run <code>npm run seed:blogs</code> to load sample posts.
                </p>
              )}

              {!dbError && blogs.length === 0 && (
                <p className="mb-4">
                  No published posts yet. Seed the database or publish from the
                  API.
                </p>
              )}

              {blogs.map((blog) => (
                <Link
                href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                key={blog.id || blog.slug}
                className="text-decoration-none cursor-pointer"
              >
                <div
                  className={`post format-standard-image ${blog.blClass || ""}`}
                  key={blog.id || blog.slug}
                >
                  <div className="entry-media">
                    <Image
                      src={blog.bloggrid}
                      alt=""
                      width={850}
                      height={560}
                      sizes="(max-width: 768px) 100vw, 850px"
                    />
                    <span>
                      {blog.day || "--"}
                      <br />
                      {blog.month || ""}
                    </span>
                  </div>
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                        >
                          {blog.authorTitle || blog.author}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                        >
                          Comments ({blog.comment ?? "0"})
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                        >
                          {blog.readMinutes ?? 3} min read
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-details">
                    <h3 className="poort-text poort-in-right">
                      <Link
                        onClick={ClickHandler}
                        href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                      >
                        {blog.title2 || blog.title}
                      </Link>
                    </h3>
                    <p>{blog.description}</p>
                    <Link
                      onClick={ClickHandler}
                      href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                      className="read-more"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                </Link>
              ))}

              {totalPages > 1 && (
                <div className="pagination-wrapper pagination-wrapper">
                  <ul className="pg-pagination">
                    <li className={page <= 1 ? "disabled" : ""}>
                      <Link
                        href={
                          page <= 1
                            ? "#"
                            : `${paginationBasePath}?page=${page - 1}`
                        }
                        aria-label="Previous"
                        className={page <= 1 ? "pe-none opacity-50" : ""}
                      >
                        <i className="fi ti-arrow-left left"></i>
                      </Link>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (p) => (
                        <li key={p} className={p === page ? "active" : ""}>
                          <Link href={`${paginationBasePath}?page=${p}`}>
                            {p}
                          </Link>
                        </li>
                      ),
                    )}
                    <li className={page >= totalPages ? "disabled" : ""}>
                      <Link
                        href={
                          page >= totalPages
                            ? "#"
                            : `${paginationBasePath}?page=${page + 1}`
                        }
                        aria-label="Next"
                        className={
                          page >= totalPages ? "pe-none opacity-50" : ""
                        }
                      >
                        <i className="fi ti-arrow-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <BlogSidebar blLeft={blLeft} recentPosts={sidebarPosts} />
        </div>
      </div>
    </section>
  );
};

export default BlogList;
