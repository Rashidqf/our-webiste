import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import About from '../../components/about/about';
import MarqueeSectionS2 from '../../components/MarqueeSectionS2/MarqueeSectionS2';
import FunFact from '../../components/FunFact/FunFact';
import AwardSection from '../../components/AwardSection/AwardSection';
import ProjecTitle from '../../components/ProjecTitle/ProjecTitle';
import ProjectSectionS3 from '../../components/ProjectSectionS3/ProjectSectionS3';
import TeamSectionS3 from '../../components/TeamSectionS3/TeamSectionS3';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'


const AboutPage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <About />
            <MarqueeSectionS2 />
            <FunFact />
            {/* <AwardSection /> */}
            <ProjecTitle hclass={'project-title section-padding pt-0'} />
            <ProjectSectionS3 hclass={'project-section-s3 section-padding '} />
            {/* <TeamSectionS3 /> */}
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
