import React, { Fragment } from 'react';
import Link from 'next/link';
import SeoHead from '../../components/seo/SeoHead';
import ServicePageSeoContent, { getServicePageSchemas } from '../../components/seo/ServicePageSeoContent';
import { PAGE_META } from '../../lib/seo/pageMeta';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import ContactSectionS2 from '../../components/ContactSectionS2/ContactSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BrandBlobGlow from '../../components/icons/BrandBlobGlow';
import Logo from '/public/images/logo.png'

const ClickHandler = () => window.scrollTo(10, 0);

const ServicePage = () => {
    const meta = PAGE_META.service;
    const jsonLd = [
        buildBreadcrumbJsonLd([{ name: 'Services', path: '/service' }]),
        ...getServicePageSchemas(),
    ];

    return (
        <Fragment>
            <SeoHead
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                canonicalPath={meta.path}
                jsonLd={jsonLd}
            />
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            
            {/* Themed Hero Banner */}
            <section className="seo-hero-banner" aria-labelledby="services-page-h1">
                <div className="container">
                    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
                        <ol>
                            <li><Link href="/" onClick={ClickHandler}>Home</Link></li>
                            <li className="active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                    <div className="section-eyebrow">
                        <span className="eyebrow-badge">
                            <span className="eyebrow-dot"></span> Engineering &amp; Consulting
                        </span>
                    </div>
                    <h1 id="services-page-h1" className="hero-h1">
                        Web Development &amp; <span>IT Consulting</span>
                    </h1>
                    <p className="hero-lead">
                        Remote product engineering for startups, fast-growing ventures, and established enterprises in Karachi and worldwide.
                    </p>
                    <div className="hero-actions">
                        <Link href="/contact" onClick={ClickHandler} className="theme-btn" title="Start a project with Ryzonix">
                            <span>Start a Project</span>
                            <i className="ti-arrow-top-right"></i>
                        </Link>
                        <Link href="/project" onClick={ClickHandler} className="theme-link" title="Explore Ryzonix portfolio">
                            <span>View Case Studies</span>
                            <i className="ti-arrow-top-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="bg-shape">
                    <BrandBlobGlow filterId="serviceHeroBlobFilter" opacity={0.25} />
                </div>
            </section>

            <ServiceSectionS3 sliceStart={0} sliceEnd={3} />
            <ServiceSectionS2 sliceStart={3} sliceEnd={6} />
            <ServicePageSeoContent />
            <ContactSectionS2 />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
