import React, { useEffect } from "react";
import Image from "next/image";

import Slide1 from "/public/images/slider/imoje.png";
import Slide2 from "/public/images/slider/text-o.png";
import Slide3 from "/public/images/slider/bg-img.jpg";
import Slide4 from "/public/images/slider/start.svg";
import Slide5 from "/public/images/slider/bg-shap.svg";
import Slide6 from "/public/images/slider/round-shape.png";

const Hero = () => {
  useEffect(() => {
    let cancelled = false;

    async function initAnimations() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap/dist/gsap"),
        import("gsap/dist/ScrollTrigger"),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      document.querySelectorAll(".new_img-animet").forEach((element) => {
        const image = element.querySelector("img");
        if (!image) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        });

        tl.set(element, { autoAlpha: 1 });
        tl.from(element, { xPercent: -100, duration: 1.5, ease: "power2.out" });
        tl.from(image, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: "power2.out",
        });
      });
    }

    initAnimations();

    return () => {
      cancelled = true;
      import("gsap/dist/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      });
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrap">
          <div className="title">
            <div className="splittext-line">
              <div
                className="p-style scroll-text-animation"
                data-animation="fade_from_left"
              >
                <p>IT Services &amp; IT Consulting · Founded 2025</p>
                <i className="ti-arrow-top-right" aria-hidden="true"></i>
              </div>
              <h2
                className="italic scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                Scalable
              </h2>
              <h2 className="normal scroll-text-animation">
                web apps{" "}
                <Image
                  src={Slide1}
                  alt="Web development icon – Ryzonix"
                  width={50}
                  height={50}
                />
              </h2>
              <h2 className="text-stroke scroll-text-animation">
                d
                <Image
                  src={Slide2}
                  alt="Digital product design accent – Ryzonix"
                  width={50}
                  height={50}
                />
                igital.
              </h2>
            </div>
            <div className="content_middle">
              <Image
                src={Slide3}
                alt="Custom web development hero background – Ryzonix"
                width={800}
                height={600}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="start new_img-animet">
            <Image
              src={Slide4}
              alt="Decorative star accent – Ryzonix"
              width={100}
              height={100}
              loading="lazy"
              fetchPriority="low"
            />
          </div>
        </div>
      </div>
      <div className="bg-shape">
        <Image
          src={Slide5}
          alt=""
          width={800}
          height={600}
          loading="lazy"
          fetchPriority="low"
          aria-hidden="true"
        />
      </div>
      <div className="round-shape">
        <Image
          src={Slide6}
          alt=""
          width={100}
          height={100}
          loading="lazy"
          fetchPriority="low"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
