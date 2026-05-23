import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
// import CommentForm from "./CommentsFrom";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSingle = ({ post, recentPosts = [] }) => {
  if (!post) {
    return (
      <section className="blog-single-section blog-single-left-sidebar-section section-padding">
        <div className="container">
          <p>Post not found.</p>
        </div>
      </section>
    );
  }

  const siteOrigin =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : "https://www.ryzonix.com";
  const postUrl = `${siteOrigin}/blog-single/${encodeURIComponent(post.slug)}`;
  const singleHref = `/blog-single/${encodeURIComponent(post.slug)}`;

  return (
    <section className="blog-single-section blog-single-left-sidebar-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 col-12 offset-lg-1">
            <div className="post format-standard-image">
              <div className="entry-media">
                <Image
                  src={post.blogSingleImg}
                  alt=""
                  width={1170}
                  height={600}
                  sizes="(max-width: 1200px) 100vw, 1170px"
                  priority
                />
              </div>
              <div className="entry-meta">
                <ul>
                  <li>
                    <i className="fi flaticon-calendar"></i>
                    <Link onClick={ClickHandler} href={singleHref}>
                      {post.create_at}
                    </Link>
                  </li>
                  <li>
                    <i className="fi flaticon-comments"></i>
                    <Link onClick={ClickHandler} href={singleHref}>
                      Comments ({post.comment ?? "0"})
                    </Link>
                  </li>
                  <li>
                    <i className="fi flaticon-clock"></i>
                    <Link onClick={ClickHandler} href={singleHref}>
                      {post.readMinutes ?? 3} min read
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="entry-details blog-markdown">
                <h1>{post.title}</h1>
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h2>{children}</h2>,
                  }}
                >
                  {post.content || ""}
                </ReactMarkdown>
              </div>
            </div>

            <div className="tag-share-wrap">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="tag-share clearfix">
                    <div className="tag">
                      <span>Tag: </span>
                      <ul>
                        {(post.tags && post.tags.length > 0
                          ? post.tags
                          : ["Ryzonix", "Web", "Product"]
                        ).map((tag) => (
                          <li key={tag}>
                            <Link onClick={ClickHandler} href="/blog">
                              {tag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="tag-share-s2 clearfix">
                    <div className="tag">
                      <span>Share: </span>
                      <ul>
                        <li>
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on LinkedIn"
                          >
                            <i className="ti-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                          >
                            <i className="ti-twitter-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {recentPosts.length > 0 && (
              <div className="mt-5">
                <h4 className="mb-3">More from the journal</h4>
                <ul className="list-unstyled">
                  {recentPosts.map((p) => (
                    <li key={p.slug} className="mb-2">
                      <Link href={`/blog-single/${encodeURIComponent(p.slug)}`}>
                        {p.title2 || p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* <div className="comments-area">
              <CommentForm />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
