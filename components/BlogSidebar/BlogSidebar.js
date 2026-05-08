import React from "react";
import Link from "next/link";
import Image from "next/image";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSidebar = (props) => {
  const { recentPosts = [] } = props;

  return (
    <div className="col col-lg-4">
      <div className="blog-sidebar">
        <div className="widget search-widget">
          <h3>search here</h3>
          <form onSubmit={SubmitHandler}>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Post.."
              />
              <button type="submit">
                <i className="ti-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="widget category-widget">
          <h3>Categories</h3>
          <ul>
            <li>
              <Link onClick={ClickHandler} href="/blog">
                Web development<span>—</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/blog" className="active">
                Tech consulting<span>—</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/blog">
                SaaS &amp; MVP<span>—</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/blog">
                Security<span>—</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="widget recent-post-widget">
          <h3>Related Posts</h3>
          <div className="posts">
            {recentPosts.length === 0 && (
              <p className="small text-muted">No posts to show yet.</p>
            )}
            {recentPosts.map((blog) => (
              <div className="post" key={blog.id || blog.slug}>
                <div className="img-holder">
                  <Image
                    src={blog.screens}
                    alt=""
                    width={80}
                    height={80}
                    sizes="80px"
                  />
                </div>
                <div className="details">
                  <h4>
                    <Link
                      onClick={ClickHandler}
                      href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                    >
                      {blog.title2 || blog.title}
                    </Link>
                  </h4>
                  <span className="date">{blog.create_at}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="widget tag-widget">
          <h3>Popular Tags</h3>
          <ul>
            <li>
              <Link onClick={ClickHandler} href="/blog">
                Web
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/blog">
                SaaS
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/blog">
                Security
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/blog">
                MVP
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/blog">
                Consulting
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
