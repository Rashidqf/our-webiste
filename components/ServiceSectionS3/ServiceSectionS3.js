import React from "react";
import Link from "next/link";
import Services from "../../api/Services";
import Imgage from "/public/images/service/icon-1.svg";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ServiceSectionS3 = ({ sliceStart = 0, sliceEnd = 3 }) => {
  return (
    <section className="service-section-s3 section-padding">
      <div className="container">
        <div
          className="title scroll-text-animation"
          data-animation="fade_from_buttom"
        >
          <h2>
            Custom web &amp; product work for{" "}
            <span>startups to enterprises —</span>
          </h2>
          <Link onClick={ClickHandler} href="/contact" className="theme-btn" title="Contact Ryzonix">
            <span className="rolling-text">Contact us</span>
            <i className="ti-arrow-top-right"></i>
          </Link>
        </div>
        <div
          className="row scroll-text-animation"
          data-animation="fade_from_buttom"
        >
          {Services.slice(sliceStart, sliceEnd).map((serve, item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item}>
              <div className="service-card-s3">
                <span className="num">{serve.Id}.</span>
                {/* <div className="icon">
                                    <Image src={Imgage} alt="" />
                                </div> */}
                <h2>
                  <Link
                    onClick={ClickHandler}
                    href={"/service-single/[slug]"}
                    as={`/service-single/${serve.slug}`}
                    title={`${serve.title} – Ryzonix`}
                  >
                    {serve.title}
                  </Link>
                </h2>
                <p>{serve.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionS3;
