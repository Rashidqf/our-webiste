import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import About from '../components/about/about';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import MarqueeSection from '../components/MarqueeSection/MarqueeSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import MarqueeSectionS2 from '../components/MarqueeSectionS2/MarqueeSectionS2';
import FunFact from '../components/FunFact/FunFact';
import AwardSection from '../components/AwardSection/AwardSection';
import ProjecTitle from '../components/ProjecTitle/ProjecTitle';
import Testimonial from '../components/Testimonial/Testimonial';
import MarqueeSectionS3 from '../components/MarqueeSectionS3/MarqueeSectionS3';
import TeamSection from '../components/TeamSection/TeamSection';
import BlogSection from '../components/BlogSection/BlogSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <Hero />
            <PartnerSection />
            <About />
            <ServiceSection hclass={'service-section section-padding'} />
            <MarqueeSection />
            <ProjectSection hclass={'project-section section-padding'} limit={6} />
            <MarqueeSectionS2 />
            <FunFact />
            {/* <AwardSection /> */}
            <ProjecTitle hclass={'project-title section-padding pt-0'} />
            <Testimonial hclass={'testimonial-section'} />
            <MarqueeSectionS3 />
            {/* <TeamSection /> */}
            {/* <BlogSection hclass={'blog-section section-padding'} /> */}
            <Footer hclass={"footer-section section-padding pb-0"} />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;