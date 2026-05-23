import React, { Fragment } from 'react';
import SeoHead from '../../components/seo/SeoHead';
import ServicePageSeoContent, { getServicePageSchemas } from '../../components/seo/ServicePageSeoContent';
import { PAGE_META } from '../../lib/seo/pageMeta';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageH1 from '../../components/seo/PageH1';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import ContactSectionS2 from '../../components/ContactSectionS2/ContactSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.png'

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
            <PageH1 id="services-page-h1">Web Development &amp; IT Consulting Services | Ryzonix</PageH1>
            <ServiceSectionS3 sliceStart={0} sliceEnd={3} />
            <ServiceSectionS2 sliceStart={3} sliceEnd={6} />
            {/* <ServicePageSeoContent /> */}
            <ContactSectionS2 />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
