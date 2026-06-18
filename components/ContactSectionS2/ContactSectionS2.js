import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

import ContentRout from '/public/images/contact-round-shape.svg'
import contactImg from '/public/images/contact-img.png'
import Image from 'next/image';
import {
  WEBMCP_TOOLS,
  respondToAgentFormSubmit,
  useWebMcpFormSync,
} from '../../lib/agentic/webmcp';

const SERVICE_FORM_ID = 'service-inquiry-form';

const ContactSectionS2 = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        select: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    useWebMcpFormSync(WEBMCP_TOOLS.serviceInquiry, SERVICE_FORM_ID, setForms);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const submitHandler = e => {
        e.preventDefault();
        const isValid = validator.allValid();

        if (isValid) {
            setForms({
                name: '',
                email: '',
                select: ''
            });
            validator.hideMessages();
            respondToAgentFormSubmit(
                e,
                true,
                'Thank you. Your service inquiry was received. Ryzonix will follow up within one business day.',
                ''
            );
        } else {
            validator.showMessages();
            respondToAgentFormSubmit(
                e,
                false,
                '',
                'Validation failed. Provide your name, email, and select a service type.'
            );
        }
    };


    return (
        <section className="contact-section-s2 section-padding">
            <div className="container">
                <div className="contact-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="contact-from">
                                <h3>let’s <span>Work Together</span> </h3>
                                <p>Ryzonix builds responsive, secure, and scalable web products—tell us what you are launching next.</p>
                                <form
                                    id={SERVICE_FORM_ID}
                                    toolname={WEBMCP_TOOLS.serviceInquiry}
                                    tooldescription="Submit a service inquiry to Ryzonix for web development, consulting, MVP, SaaS, or mobile app projects."
                                    onSubmit={submitHandler}
                                >
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <label htmlFor="service-inquiry-name">First name</label>
                                            <input
                                                id="service-inquiry-name"
                                                type="text"
                                                name="name"
                                                value={forms.name}
                                                onChange={changeHandler}
                                                placeholder="Name"
                                                autoComplete="given-name"
                                                required
                                                toolparamdescription="First name of the person submitting the inquiry."
                                                onBlur={() => validator.showMessageFor('name')}
                                            />
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <label htmlFor="service-inquiry-email">Email address</label>
                                            <input
                                                id="service-inquiry-email"
                                                type="email"
                                                name="email"
                                                value={forms.email}
                                                onChange={changeHandler}
                                                placeholder="example@example.com"
                                                autoComplete="email"
                                                required
                                                toolparamdescription="Email address for Ryzonix to reply to this inquiry."
                                                onBlur={() => validator.showMessageFor('email')}
                                            />
                                            {validator.message('email', forms.email, 'required|email')}
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="serviceType">Service Type</label>
                                            <select
                                                id="serviceType"
                                                name="select"
                                                value={forms.select}
                                                onChange={changeHandler}
                                                required
                                                toolparamdescription="Which Ryzonix service the inquiry is about."
                                                onBlur={() => validator.showMessageFor('select')}>
                                                <option value="">Select a Service</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Tech Consulting">Tech Consulting</option>
                                                <option value="Startup MVP">Startup MVP</option>
                                                <option value="SaaS Application">SaaS Application</option>
                                                <option value="Mobile App">Mobile App</option>
                                            </select>
                                            {validator.message('select', forms.select, 'required')}
                                        </div>
                                        <div className="col-12">
                                            <button type="submit">SEND MESSAGE</button>
                                            <div className="message" id="message1">
                                                {validator.allValid() ? 'All fields are valid!' : ''}
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact-image">
                        <div className="shape">
                            <svg width="1067" height="1136" viewBox="0 0 1067 1136" fill="none" aria-hidden="true">
                                <g opacity="0.45" filter="url(#filter0_f_373_1379)">
                                    <rect width="610.839" height="610.216"
                                        transform="matrix(0.972706 0.23204 0.23204 -0.972706 200.078 793.561)"
                                        fill="var(--brand-green-light, #66E0A3)" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_373_1379" x="0.078125" y="0" width="1135.76" height="1135.3"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_373_1379" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                        <div className="round-shape">
                            <Image src={ContentRout} alt="" aria-hidden="true" />
                        </div>
                        <div className="image">
                            <Image src={contactImg} alt="Contact Ryzonix team" width={480} height={520} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSectionS2;
