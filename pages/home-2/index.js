import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Hero2 from '../../components/hero2/Hero2';
import MarqueeSectionS4 from '../../components/MarqueeSectionS4/MarqueeSectionS4';
import About2 from '../../components/about2/about2';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import AwardSectionS2 from '../../components/AwardSectionS2/AwardSectionS2';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import MarqueeSectionS5 from '../../components/MarqueeSectionS5/MarqueeSectionS5';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import ContactSection from '../../components/ContactSection/ContactSection';
import FooterS2 from '../../components/footerS2/FooterS2.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const HomePage2 = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <Hero2 />
            <MarqueeSectionS4 />
            <About2 />
            <ServiceSectionS2 />
            <AwardSectionS2 />
            <FunFactS2 />
            <ProjectSectionS2 hclass={'project-section-s2 section-padding'} />
            <TeamSectionS2 />
            <MarqueeSectionS5 />
            <BlogSectionS2 />
            <ContactSection />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;
