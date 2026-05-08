import React, { Fragment } from "react";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import MarqueeSectionS2 from "../../components/MarqueeSectionS2/MarqueeSectionS2";
import ProjecTitle from "../../components/ProjecTitle/ProjecTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import PricingSection from "../../components/PricingSection/PricingSection";

import Logo from '/public/images/logo-2.svg'



const PricingPage = (props) => {
    return (
        <Fragment>
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