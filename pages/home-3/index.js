import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Hero3 from '../../components/hero3/hero3';
import About3 from '../../components/About3/About3';
import ImageSection from '../../components/ImageSection/ImageSection';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import ProjectSectionS3 from '../../components/ProjectSectionS3/ProjectSectionS3';
import PartnerSectionS3 from '../../components/PartnerSectionS3/PartnerSectionS3';
import AwardSectionS3 from '../../components/AwardSectionS3/AwardSectionS3';
import TeamSectionS3 from '../../components/TeamSectionS3/TeamSectionS3';
import WorkMarqueeText from '../../components/WorkMarqueeText/WorkMarqueeText';
import TestimonialS2 from '../../components/TestimonialS2/TestimonialS2';
import BlogSectionS3 from '../../components/BlogSectionS3/BlogSectionS3';
import ContactSectionS2 from '../../components/ContactSectionS2/ContactSectionS2';
import FooterS3 from '../../components/footerS3/FooterS3';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'

const HomePage3 = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <Hero3 />
            <About3 />
            <ImageSection />
            <ServiceSectionS3 />
            <ProjectSectionS3 hclass={'project-section-s3 section-padding pt-0'} />
            <PartnerSectionS3 />
            <AwardSectionS3 />
            <TeamSectionS3 />
            <WorkMarqueeText />
            <TestimonialS2 hclass={'testimonial-section-s2 section-padding'} />
            <BlogSectionS3 />
            <ContactSectionS2 />
            <FooterS3 />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;