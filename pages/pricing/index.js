import React, { Fragment } from "react";
import SeoHead from '../../components/seo/SeoHead';
import { PAGE_META } from '../../lib/seo/pageMeta';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import MarqueeSectionS2 from "../../components/MarqueeSectionS2/MarqueeSectionS2";
import ProjecTitle from "../../components/ProjecTitle/ProjecTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import PricingSection from "../../components/PricingSection/PricingSection";

import Logo from '/public/images/logo.png'



const PricingPage = (props) => {
    const meta = PAGE_META.pricing;

    return (
        <Fragment>
            <SeoHead
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                canonicalPath={meta.path}
                jsonLd={[buildBreadcrumbJsonLd([{ name: 'Pricing', path: '/pricing' }])]}
            />
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <PricingSection />
            <MarqueeSectionS2 />
            <ProjecTitle hclass={'project-title section-padding'} />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>

    )

}

export default PricingPage;