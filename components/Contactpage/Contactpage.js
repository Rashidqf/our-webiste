import React, { useState } from "react";

import Shape from '/public/images/contact-img.png'
import SimpleReactValidator from "simple-react-validator";
import Image from "next/image";
import {
  WEBMCP_TOOLS,
  respondToAgentFormSubmit,
  useWebMcpFormSync,
} from "../../lib/agentic/webmcp";

const CONTACT_FORM_ID = 'contact-form';

const Contactpage = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        textarea: '',
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
    }));

    useWebMcpFormSync(WEBMCP_TOOLS.contact, CONTACT_FORM_ID, setForms);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };
    const submitHandler = e => {
        e.preventDefault();
        const isValid = validator.allValid();

        if (isValid) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                textarea: '',
            });
            respondToAgentFormSubmit(
                e,
                true,
                'Thank you. Your message was received. Ryzonix typically replies within one business day at sales@ryzonix.pro.',
                ''
            );
        } else {
            validator.showMessages();
            respondToAgentFormSubmit(
                e,
                false,
                '',
                'Validation failed. Provide your name, a valid email, and a message (10–500 characters).'
            );
        }
    }



    return (
        <div>
            <section className="contact-page section-padding">
                <div className="container">
                    <h1 className="visually-hidden">Contact Ryzonix | Web Development &amp; IT Consulting</h1>
                    <div className="office-info">
                        <div className="row">
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-placeholder"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Website</h2>
                                        <p>
                                            <a className="theme-link" href="https://www.ryzonix.pro" target="_blank" rel="noopener noreferrer" title="Ryzonix website">www.ryzonix.pro</a>
                                            <br />Remote-first · IT Services &amp; Consulting</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item active">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-phone-call"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Connect</h2>
                                        <p>Message us via the form or on LinkedIn
                                            <br />We typically reply within one business day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-email"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Email</h2>
                                        <p><a href="mailto:sales@ryzonix.pro">sales@ryzonix.pro</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="contact-left">
                                    <h2>Get in touch</h2>
                                    <p>Ryzonix is your software partner for custom web development, tech consulting, MVPs, SaaS, and mobile apps. Tell us about your goals and we will help you plan the right build.</p>
                                    <Image className="image" src={Shape} alt="Contact Ryzonix" width={560} height={420} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="contact-right">
                                    <div className="title">
                                        <h2>Fill Up The Form</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>

                                    <form
                                        id={CONTACT_FORM_ID}
                                        className="contact-form"
                                        toolname={WEBMCP_TOOLS.contact}
                                        tooldescription="Send a message to Ryzonix to request web development, IT consulting, MVP, SaaS, or mobile app services."
                                        onSubmit={submitHandler}
                                    >
                                        <div className="input-item">
                                            <label htmlFor="contact-name" className="visually-hidden">Your name</label>
                                            <input
                                                id="contact-name"
                                                className="fild"
                                                value={forms.name}
                                                type="text"
                                                name="name"
                                                autoComplete="name"
                                                required
                                                toolparamdescription="Full name of the person contacting Ryzonix."
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Your Name*"
                                                aria-describedby="contact-name-error"
                                            />
                                            <span className="input-icon" aria-hidden="true"><i className="flaticon-user"></i></span>
                                            <span id="contact-name-error">{validator.message('name', forms.name, 'required|alpha_space')}</span>
                                        </div>
                                        <div className="input-item">
                                            <label htmlFor="contact-email" className="visually-hidden">Email address</label>
                                            <input
                                                id="contact-email"
                                                className="fild"
                                                placeholder="Email Address*"
                                                value={forms.email}
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                required
                                                toolparamdescription="Email address where Ryzonix should reply."
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                aria-describedby="contact-email-error"
                                            />
                                            <span className="input-icon" aria-hidden="true"><i className="flaticon-email"></i></span>
                                            <span id="contact-email-error">{validator.message('email', forms.email, 'required|email')}</span>
                                        </div>
                                        <div className="input-item">
                                            <label htmlFor="contact-message" className="visually-hidden">Your message</label>
                                            <textarea
                                                id="contact-message"
                                                className="fild textarea"
                                                placeholder="Enter Your Message here"
                                                value={forms.textarea}
                                                name="textarea"
                                                required
                                                toolparamdescription="Project goals, timeline, budget range, or questions for the Ryzonix team."
                                                onBlur={() => validator.showMessageFor("textarea")}
                                                onChange={changeHandler}
                                                aria-describedby="contact-message-error"
                                            ></textarea>
                                            <span className="input-icon" aria-hidden="true"><i className="ti-new-window"></i></span>
                                            <span id="contact-message-error">{validator.message("textarea", forms.textarea, "required|min:10|max:500")}</span>
                                        </div>
                                        <div className="input-item submitbtn">
                                            <button className="fild" type="submit">Get In Touch</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section" aria-label="Office location map">
                <h2 className="visually-hidden">Office location map</h2>
                <div className="wpo-map">
                    <iframe
                        title="Ryzonix remote office — worldwide service area map"
                        width="100%"
                        height="450"
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                        allowFullScreen></iframe>
                </div>
            </section>

        </div>
    )

}

export default Contactpage;

