import React, { Fragment } from 'react';
import SeoHead from '../../components/seo/SeoHead';
import { PAGE_META } from '../../lib/seo/pageMeta';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.png'


const ProjectPage = () => {
    const meta = PAGE_META.team;

    return (
        <Fragment>
            <SeoHead
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                canonicalPath={meta.path}
                jsonLd={[buildBreadcrumbJsonLd([{ name: 'Team', path: '/team' }])]}
            />
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <TeamSectionS2 circlebottom={false} />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectPage;
