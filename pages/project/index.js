import React, { Fragment } from 'react';
import SeoHead from '../../components/seo/SeoHead';
import ProjectSeoIntro from '../../components/seo/ProjectSeoIntro';
import { PAGE_META } from '../../lib/seo/pageMeta';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ContactSectionS2 from '../../components/ContactSectionS2/ContactSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.png'



const ProjectPage = () => {
    const meta = PAGE_META.project;

    return (
        <Fragment>
            <SeoHead
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                canonicalPath={meta.path}
                jsonLd={[buildBreadcrumbJsonLd([{ name: 'Portfolio', path: '/project' }])]}
            />
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            {/* <ProjectSeoIntro /> */}
            <ProjectSection hclass={'project-section section-padding pb-0'} />
            <ContactSectionS2 />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectPage;
