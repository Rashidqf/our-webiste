import React, {Fragment} from 'react';
import SeoHead from '../../components/seo/SeoHead';
import ContactFaq from '../../components/seo/ContactFaq';
import { PAGE_META } from '../../lib/seo/pageMeta';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import { faqPageSchema, CONTACT_FAQS } from '../../lib/seo/schemas';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo.png'

const ContactPage =() => {
    const meta = PAGE_META.contact;

    return(
        <Fragment>
            <SeoHead
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                canonicalPath={meta.path}
                jsonLd={[
                    buildBreadcrumbJsonLd([{ name: 'Contact', path: '/contact' }]),
                    faqPageSchema(CONTACT_FAQS),
                ]}
            />
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <Contactpage/>
            <ContactFaq />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;