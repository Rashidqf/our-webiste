import React, { useState } from "react";


import Shape from '/public/images/contact-img.png'
import SimpleReactValidator from "simple-react-validator";
import Image from "next/image";

const Contactpage = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        textarea: '',
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
    }));
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
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                textarea: '',
            })
        } else {
            validator.showMessages();
        }
    }



    return (
        <div>
            <section className="contact-page section-padding">
                <div className="container">
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
                                            <a href="https://www.ryzonix.com" target="_blank" rel="noopener noreferrer">www.ryzonix.com</a>
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
                                        <p>contact@ryzonix.com <br /> hello@ryzonix.com</p>
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
                                    <Image className="image" src={Shape} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="contact-right">
                                    <div className="title">
                                        <h2>Fill Up The Form</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>

                                    <form id="form1" className="contact-form" onSubmit={submitHandler}>
                                        <div className="input-item">
                                            <input className="fild" value={forms.name}
                                                type="text"
                                                name="name"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)} placeholder="Your Name*" />
                                            <label><i className="flaticon-user"></i></label>
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                        <div className="input-item">
                                            <input className="fild" placeholder="Email Address*" value={forms.email}
                                                type="email"
                                                name="email"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)} />
                                            <label><i className="flaticon-email"></i></label>
                                            {validator.message('email', forms.email, 'required|email')}

                                        </div>
                                        <div className="input-item">
                                            <textarea
                                                className="fild textarea"
                                                placeholder="Enter Your Message here"
                                                value={forms.textarea}
                                                name="textarea"
                                                onBlur={() => validator.showMessageFor("textarea")}
                                                onChange={changeHandler}
                                            ></textarea>
                                            <label><i className="ti-new-window"></i></label>
                                            {validator.message("textarea", forms.textarea, "required|min:10|max:500")}
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

            <section className="map-section">
                <h2 className="hidden">Contact map</h2>
                <div className="wpo-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                        allowFullScreen></iframe>
                </div>
            </section>

        </div>
    )

}

export default Contactpage;


