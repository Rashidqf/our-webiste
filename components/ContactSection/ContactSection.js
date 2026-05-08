
import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactSection = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        description: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            setForms({
                name: '',
                email: '',
                description: ''
            });
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };


    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="circle-bottom">
                                <div className="circle-content">
                                    <div>
                                        <svg viewBox="0 0 100 100">
                                            <defs>
                                                <path id="circle77" d="
                                            M 50, 50
                                            m -37, 0
                                            a 37,37 0 1,1 74,0
                                            a 37,37 0 1,1 -74,0" />
                                            </defs>
                                            <text>
                                                <textPath xlinkHref="#circle77">
                                                    - Digital World - Digital World
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                    <div className="arrows">
                                        <svg width="100%" height="100%" viewBox="0 0 250 249" fill="none">
                                            <path
                                                d="M135.31 0.0742188H115.153L114.917 98.9702L42.5792 26.3981L25.7406 42.9997L99.024 113.674H0.841553V133.596H97.1299L27.6419 202.848L45.1911 218.501L114.917 149.249V248.146H135.31V149.249L203.142 218.501L218.083 204.034L149.46 133.596H249.152V113.674H149.46L219.743 44.8968L204.802 29.0068L135.31 96.5986V0.0742188Z"
                                                fill="white" fillOpacity="0.35" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contact-from">
                                <h3>Send Message</h3>
                                <form onSubmit={submitHandler}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={forms.name}
                                        onChange={changeHandler}
                                        placeholder="Full Name here"
                                        onBlur={() => validator.showMessageFor('name')}
                                    />
                                    {validator.message('name', forms.name, 'required|alpha_space')}

                                    <input
                                        type="email"
                                        name="email"
                                        value={forms.email}
                                        onChange={changeHandler}
                                        placeholder="Email Address"
                                        onBlur={() => validator.showMessageFor('email')}
                                    />
                                    {validator.message('email', forms.email, 'required|email')}

                                    <textarea
                                        name="description"
                                        value={forms.description}
                                        onChange={changeHandler}
                                        placeholder="Write Description"
                                        onBlur={() => validator.showMessageFor('description')}
                                    />
                                    {validator.message('description', forms.description, 'required')}

                                    <button type="submit">SEND MESSAGE</button>

                                    <div className="message" id="message1">
                                        {validator.allValid() ? 'All fields are valid!' : ''}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;