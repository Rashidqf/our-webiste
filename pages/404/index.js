import React, { Fragment } from 'react';
import SeoHead from '../../components/seo/SeoHead';
import { PAGE_META } from '../../lib/seo/pageMeta';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Error from '../../components/404/404'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo.png'

const ErrorPage = () => {
    const meta = PAGE_META.notFound;

    return (
        <Fragment>
            <SeoHead
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                canonicalPath={meta.path}
                noindex
            />
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <Error />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ErrorPage;



