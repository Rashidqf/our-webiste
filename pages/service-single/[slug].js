import React, { Fragment, useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SeoHead from '../../components/seo/SeoHead';
import { formatTitle } from '../../lib/seo/site';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import { serviceSchema } from '../../lib/seo/schemas';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import VideoModal from '../../components/ModalVideo/VideoModal';
import { useRouter } from 'next/router'
import Services from '../../api/Services';
import Video from '/public/images/service-single/video.jpg'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.png'
import Image from 'next/image';



gsap.registerPlugin(ScrollTrigger);


const ServiceSinglePage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)
    const isFeatured = serviceDetails && Number(serviceDetails.Id) <= 6;
    const pageTitle = serviceDetails
        ? formatTitle(serviceDetails.title)
        : formatTitle('Service');
    const pageDescription = serviceDetails
        ? `${serviceDetails.description.slice(0, 140)}… Contact Ryzonix for a quote.`
        : 'Ryzonix web development and IT consulting services.';
    const canonicalPath = serviceDetails
        ? `/service-single/${serviceDetails.slug}`
        : '/service';
    const jsonLd = serviceDetails && isFeatured
        ? [
            buildBreadcrumbJsonLd([
                { name: 'Services', path: '/service' },
                { name: serviceDetails.title, path: `/service-single/${serviceDetails.slug}` },
            ]),
            serviceSchema(serviceDetails),
        ]
        : [];

    useEffect(() => {

        const animatedElements = document.querySelectorAll(".new_img-animet");
        animatedElements.forEach((element) => {
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
            tl.from(image, { xPercent: 100, scale: 1.3, delay: -1.5, ease: "power2.out" });
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
        <Fragment>
            <SeoHead
                title={pageTitle}
                description={pageDescription}
                keywords={`${serviceDetails?.title || 'service'}, Ryzonix, web development, IT consulting`}
                canonicalPath={canonicalPath}
                jsonLd={jsonLd}
            />
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <section className="service-single-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 offset-lg-1">
                            <div className="service-single-wrap">
                                <div className="title-image">
                                    {serviceDetails?.sSImg ? (
                                        <Image
                                            src={serviceDetails.sSImg}
                                            alt={`${serviceDetails.title} service – Ryzonix`}
                                            width={1200}
                                            height={630}
                                            loading="lazy"
                                        />
                                    ) : null}
                                </div>
                                <h1 className='poort-text poort-in-right'>{serviceDetails?.title || 'Service'}</h1>
                                <p>{serviceDetails?.description}</p>
                                <h3 className="poort-text poort-in-right">How Ryzonix delivers</h3>
                                <p>At Ryzonix we combine clear discovery, pragmatic architecture, and iterative delivery.
                                    Whether you are a startup validating an MVP or an established team modernizing a platform,
                                    we focus on responsive UX, secure patterns, and code you can extend—backed by sensible
                                    deployment and maintenance options when you need ongoing support.</p>
                                <div className="video-wrap">
                                    <div className="video-img">
                                        <Image src={Video} alt="Ryzonix software delivery process video thumbnail" width={800} height={450} loading="lazy" />
                                        <div className="video-holder">
                                            <VideoModal />
                                        </div>
                                    </div>
                                    <div className="video-content">
                                        <h2>Why engineering quality matters</h2>
                                        <p>Great products are built on reliable foundations: performance, security, and maintainability compound over time.</p>
                                        <ul>
                                            <li>Scalable structure that grows with your user base</li>
                                            <li>Security-minded defaults and sensible data handling</li>
                                            <li>Documentation and handover so your team stays in control</li>
                                        </ul>

                                    </div>
                                </div>
                                <p>Founded in 2025, Ryzonix is a modern software house serving startups, small businesses, and enterprises.
                                    Explore our <a href="/service" title="All Ryzonix services">services</a> and{' '}
                                    <a href="/project" title="Ryzonix portfolio">portfolio</a>, or email{' '}
                                    <a href="mailto:hello@ryzonix.com" className="theme-link">hello@ryzonix.com</a>.</p>
                                <h3 className="quate">Your digital partner for responsive, secure, and scalable websites—from first release to long-term operations.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
         
        </Fragment>
    )
};
export default ServiceSinglePage;