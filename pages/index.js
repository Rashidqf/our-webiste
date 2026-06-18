import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import SeoHead from '../components/seo/SeoHead';
import { PAGE_META } from '../lib/seo/pageMeta';
import Navbar from '../components/Navbar/Navbar'
import PageH1 from '../components/seo/PageH1';
import Hero from '../components/hero/hero';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import About from '../components/about/about';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.png'

const MarqueeSection = dynamic(() => import('../components/MarqueeSection/MarqueeSection'));
const ProjectSection = dynamic(() => import('../components/ProjectSection/ProjectSection'));
const MarqueeSectionS2 = dynamic(() => import('../components/MarqueeSectionS2/MarqueeSectionS2'));
const FunFact = dynamic(() => import('../components/FunFact/FunFact'));
const ProjecTitle = dynamic(() => import('../components/ProjecTitle/ProjecTitle'));
const Testimonial = dynamic(() => import('../components/Testimonial/Testimonial'));
const MarqueeSectionS3 = dynamic(() => import('../components/MarqueeSectionS3/MarqueeSectionS3'));

const HomePage = () => {
    const meta = PAGE_META.home;

    return (
        <Fragment>
            <SeoHead
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                canonicalPath={meta.path}
            />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageH1 id="home-page-h1">Custom Web Development for Startups &amp; Growing Businesses</PageH1>
            <Hero />
            <PartnerSection />
            <About />
            <ServiceSection hclass={'service-section section-padding'} />
            <MarqueeSection />
            <ProjectSection hclass={'project-section section-padding'} limit={6} />
            <MarqueeSectionS2 />
            <FunFact />
            <ProjecTitle hclass={'project-title section-padding pt-0'} />
            <Testimonial hclass={'testimonial-section'} />
            <MarqueeSectionS3 />
            <Footer hclass={"footer-section section-padding pb-0"} />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;
