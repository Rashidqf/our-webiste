import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSection = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/blogs?limit=3");
        const data = await res.json();
        if (!cancelled && data.posts) {
          setBlogs(data.posts);
        }
      } catch {
        if (!cancelled) setBlogs([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="title">
          <h2
            className="scroll-text-animationt"
            data-animation="fade_from_right"
          >
            Latest Articles
          </h2>
          <div className="title-bottom">
            <h3
              className="scroll-text-animationt"
              data-animation="fade_from_right"
            >
              Ryzonix <span>journal</span>
            </h3>
            <Link onClick={ClickHandler} href="/blog">
              <span className="rolling-text">Read All Posts</span>
              <i className="ti-arrow-top-right"></i>
            </Link>
          </div>
        </div>
        {loading && <p className="text-center py-5">Loading posts…</p>}
        {!loading && blogs.length === 0 && (
          <p className="text-center py-5 text-muted small">
            Connect MongoDB and seed posts to show articles here.
          </p>
        )}
        {!loading && blogs.length > 0 && (
          <Slider {...settings}>
            {blogs.map((blog) => (
              <div className="blog-card" key={blog.id || blog.slug}>
                <div className="image">
                  <Image
                    src={blog.screens}
                    alt=""
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                  <p>{blog.title2}</p>
                  <Link
                    onClick={ClickHandler}
                    href={`/blog-single/${encodeURIComponent(blog.slug)}`}
                  >
                    <span>Read article</span>
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
