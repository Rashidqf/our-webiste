import React, { Fragment } from 'react';
import Head from 'next/head';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import ContactSectionS2 from '../../components/ContactSectionS2/ContactSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'

const servicePageTitle = 'Services | Ryzonix — Web development, consulting & MVPs';
const servicePageDescription =
    'Ryzonix offers web development, tech consulting, startup MVPs, SaaS applications, mobile apps, and deployment & maintenance—responsive, secure, and scalable.';

const ServicePage = () => {
    return (
        <Fragment>
            <Head>
                <title>{servicePageTitle}</title>
                <meta name="description" content={servicePageDescription} />
            </Head>
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <ServiceSectionS3 sliceStart={0} sliceEnd={3} />
            <ServiceSectionS2 sliceStart={3} sliceEnd={6} />
            <ContactSectionS2 />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
