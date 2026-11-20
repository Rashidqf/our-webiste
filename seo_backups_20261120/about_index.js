import React, { Fragment } from 'react';
import SeoHead from '../../components/seo/SeoHead';
import AboutSeoIntro from '../../components/seo/AboutSeoIntro';
import { PAGE_META } from '../../lib/seo/pageMeta';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageH1 from '../../components/seo/PageH1';
import About from '../../components/about/about';
import MarqueeSectionS2 from '../../components/MarqueeSectionS2/MarqueeSectionS2';
import FunFact from '../../components/FunFact/FunFact';
import AwardSection from '../../components/AwardSection/AwardSection';
import ProjecTitle from '../../components/ProjecTitle/ProjecTitle';
import ProjectSectionS3 from '../../components/ProjectSectionS3/ProjectSectionS3';
import TeamSectionS3 from '../../components/TeamSectionS3/TeamSectionS3';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.png'


const AboutPage = () => {
    const meta = PAGE_META.about;

    return (
        <Fragment>
            <SeoHead
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                canonicalPath={meta.path}
                jsonLd={[buildBreadcrumbJsonLd([{ name: 'About', path: '/about' }])]}
            />
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <PageH1 id="about-page-h1">About Ryzonix | Web Development &amp; IT Consulting</PageH1>
            {/* <AboutSeoIntro /> */}
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
