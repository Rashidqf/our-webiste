import React, { useState } from 'react';
import Services from '../../api/Services';
import Link from 'next/link';
import Submitbtn from '/public/images/widget-search-btn.svg';
import Shape from '/public/images/f-shape.png';
import Image from 'next/image';

const FooterS3 = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        // Simple email validation regex pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear previous error message
        setError('');

        // Check if the email is valid
        if (!email) {
            setError('Email is required.');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        } else {
            setEmail('');
        }
    };
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="footer-section-s3 section-padding pb-0">
            <div className="footer-topbar">
                <div className="container">
                    <div className="wraper">
                        <h2 className="scroll-text-animation">
                            <span>Start a project</span> <br /> write us at <span className="color">
                                hello@ryzonix.com</span>
                        </h2>
                        <Link onClick={ClickHandler} href="/contact" className="topbar-btn scroll-text-animation btn-wrapper btn-move"
                            data-animation="fade_from_bottom">contact
                            <br />
                            me
                            <div className="shape">
                                <svg width="175" height="175" viewBox="0 0 175 175" fill="none">
                                    <path
                                        d="M170.958 94.709L163.805 99.1067C162.849 99.6835 162.018 100.455 161.364 101.371C160.709 102.288 160.244 103.333 159.997 104.44C159.75 105.547 159.726 106.694 159.927 107.811C160.128 108.928 160.55 109.992 161.166 110.936L165.736 118.061C166.534 119.271 167.009 120.674 167.112 122.13C167.216 123.586 166.944 125.044 166.325 126.36C165.706 127.675 164.761 128.801 163.584 129.626C162.406 130.45 161.038 130.945 159.616 131.06L151.334 131.825C150.228 131.92 149.151 132.245 148.172 132.78C147.192 133.316 146.329 134.05 145.636 134.939C144.944 135.828 144.436 136.851 144.143 137.948C143.852 139.044 143.781 140.19 143.937 141.316L145.038 149.764C145.246 151.207 145.08 152.682 144.557 154.04C144.034 155.398 143.173 156.593 142.058 157.503C140.943 158.415 139.615 159.011 138.205 159.232C136.795 159.454 135.353 159.294 134.022 158.767L126.203 155.79C125.167 155.385 124.061 155.202 122.954 155.25C121.845 155.299 120.759 155.577 119.76 156.07C118.761 156.562 117.87 157.258 117.142 158.113C116.415 158.97 115.865 159.969 115.528 161.05L112.93 169.149C112.504 170.541 111.729 171.793 110.682 172.783C109.635 173.773 108.353 174.464 106.964 174.79C105.575 175.115 104.127 175.062 102.764 174.636C101.401 174.211 100.17 173.427 99.195 172.364L93.4297 166.213C92.6666 165.387 91.747 164.73 90.7278 164.28C89.7086 163.831 88.61 163.599 87.5 163.599C86.39 163.599 85.2914 163.831 84.2722 164.28C83.253 164.73 82.3335 165.387 81.5703 166.213L75.8046 172.364C74.8294 173.427 73.5992 174.211 72.2362 174.636C70.8731 175.062 69.4251 175.115 68.0359 174.79C66.6467 174.464 65.3648 173.773 64.318 172.783C63.2713 171.793 62.4962 170.541 62.0697 169.149L59.472 161.05C59.1344 159.969 58.5851 158.97 57.8574 158.113C57.1299 157.258 56.2392 156.562 55.2402 156.07C54.2412 155.577 53.1545 155.299 52.0466 155.25C50.9388 155.202 49.8332 155.385 48.7969 155.79L40.9774 158.767C39.647 159.294 38.2049 159.454 36.795 159.232C35.3852 159.011 34.0566 158.415 32.9421 157.503C31.8276 156.593 30.9659 155.398 30.443 154.04C29.9201 152.682 29.7542 151.207 29.9619 149.764L31.0636 141.316C31.2192 140.19 31.1487 139.044 30.8564 137.948C30.564 136.851 30.0559 135.828 29.3633 134.939C28.6708 134.05 27.8081 133.316 26.8284 132.78C25.8487 132.245 24.7725 131.92 23.6657 131.825L15.3837 131.045C13.9615 130.931 12.5937 130.437 11.4165 129.612C10.2393 128.787 9.29396 127.661 8.67473 126.345C8.05556 125.03 7.78415 123.572 7.88757 122.116C7.99099 120.66 8.46554 119.257 9.26406 118.047L13.8335 110.936C14.45 109.992 14.8714 108.928 15.0726 107.811C15.2738 106.694 15.2502 105.547 15.0033 104.44C14.7562 103.333 14.2911 102.288 13.6363 101.371C12.9815 100.455 12.1508 99.6835 11.1951 99.1067L4.04189 94.709C2.81176 93.9726 1.79148 92.9201 1.08235 91.6554C0.373226 90.3907 0 88.9583 0 87.5C0 86.0416 0.373226 84.6093 1.08235 83.3446C1.79148 82.0798 2.81176 81.0274 4.04189 80.2912L11.1951 75.8934C12.1508 75.3161 12.9815 74.5455 13.6363 73.6285C14.2911 72.7114 14.7562 71.6674 15.0033 70.5601C15.2502 69.4528 15.2738 68.3059 15.0726 67.189C14.8714 66.0721 14.45 65.0086 13.8335 64.0642L9.26406 56.939C8.46554 55.7292 7.99099 54.3264 7.88757 52.8703C7.78415 51.4143 8.05556 49.9558 8.67473 48.6406C9.29396 47.3253 10.2393 46.1991 11.4165 45.3744C12.5937 44.5498 13.9615 44.0555 15.3837 43.9406L23.6657 43.1752C24.7725 43.0803 25.8487 42.7552 26.8284 42.2197C27.8081 41.6843 28.6708 40.9498 29.3633 40.0612C30.0559 39.1726 30.564 38.1489 30.8564 37.0523C31.1487 35.9557 31.2192 34.8097 31.0636 33.6843L29.9619 25.2367C29.7542 23.7925 29.9201 22.3178 30.443 20.9597C30.9659 19.6016 31.8276 18.4076 32.9421 17.4965C34.0566 16.5855 35.3852 15.9892 36.795 15.7675C38.2049 15.5457 39.647 15.7062 40.9774 16.2326L48.7969 19.2106C49.8332 19.6144 50.9388 19.798 52.0466 19.7499C53.1545 19.7017 54.2412 19.4226 55.2402 18.9304C56.2392 18.438 57.1299 17.7426 57.8574 16.8864C58.5851 16.0301 59.1344 15.031 59.472 13.9501L62.0697 5.85082C62.4962 4.45935 63.2713 3.20631 64.318 2.21671C65.3648 1.22711 66.6467 0.535215 68.0359 0.21007C69.4251 -0.115073 70.8731 -0.0619415 72.2362 0.363643C73.5992 0.789229 74.8294 1.57259 75.8046 2.63598L81.5703 8.78702C82.3335 9.61252 83.253 10.2702 84.2722 10.7196C85.2914 11.169 86.39 11.4008 87.5 11.4008C88.61 11.4008 89.7086 11.169 90.7278 10.7196C91.747 10.2702 92.6666 9.61252 93.4297 8.78702L99.195 2.63598C100.17 1.57259 101.401 0.789229 102.764 0.363643C104.127 -0.0619415 105.575 -0.115073 106.964 0.21007C108.353 0.535215 109.635 1.22711 110.682 2.21671C111.729 3.20631 112.504 4.45935 112.93 5.85082L115.528 13.9501C115.865 15.031 116.415 16.0301 117.142 16.8864C117.87 17.7426 118.761 18.438 119.76 18.9304C120.759 19.4226 121.845 19.7017 122.954 19.7499C124.061 19.798 125.167 19.6144 126.203 19.2106L134.022 16.2326C135.353 15.7062 136.795 15.5457 138.205 15.7675C139.615 15.9892 140.943 16.5855 142.058 17.4965C143.173 18.4076 144.034 19.6016 144.557 20.9597C145.08 22.3178 145.246 23.7925 145.038 25.2367L143.937 33.6843C143.781 34.8097 143.852 35.9557 144.143 37.0523C144.436 38.1489 144.944 39.1726 145.636 40.0612C146.329 40.9498 147.192 41.6843 148.172 42.2197C149.151 42.7552 150.228 43.0803 151.334 43.1752L159.616 43.9546C161.038 44.0694 162.406 44.5637 163.584 45.3884C164.761 46.213 165.706 47.3393 166.325 48.6545C166.944 49.9697 167.216 51.4282 167.112 52.8843C167.009 54.3403 166.534 55.7432 165.736 56.9529L161.166 64.0642C160.55 65.0086 160.128 66.0721 159.927 67.189C159.726 68.3059 159.75 69.4528 159.997 70.5601C160.244 71.6674 160.709 72.7114 161.364 73.6285C162.018 74.5455 162.849 75.3161 163.805 75.8934L170.958 80.2912C172.188 81.0274 173.209 82.0798 173.918 83.3446C174.627 84.6093 175 86.0416 175 87.5C175 88.9583 174.627 90.3907 173.918 91.6554C173.209 92.9201 172.188 93.9726 170.958 94.709Z"
                                        fill="#BAE900" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer">
                    <div className="item widget-newsletter fade_bottom">
                        <h2 className="title">NEWSLETTER</h2>
                        <div className="newsletter">
                            <form onSubmit={handleSubmit} className="form-fild">
                                <input
                                    className="fild"
                                    type="email"
                                    placeholder="Get News & Updates"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {error && <p className="error-message">{error}</p>} {/* Display error if present */}
                                <button type="submit">
                                    <Image src={Submitbtn} alt="Submit" />
                                </button>
                                <div className="terms">
                                    <input type="checkbox" id="checkbox" className="checkbox-input" />
                                    <label htmlFor="checkbox" className="checkbox-label">
                                        <span className="custom-checkbox"></span>I agree to all your terms
                                        and policies</label>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="item fade_bottom">
                        <h2 className="title">Quick Link</h2>
                        <ul>
                            {Services.slice(0, 5).map((service, Sitem) => (
                                <li key={Sitem}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="item fade_bottom">
                        <h2 className="title">Contact info</h2>
                        <ul>
                            <li>Ryzonix</li>
                            <li>Remote-first · Worldwide</li>
                            <li><a href="https://www.ryzonix.com">www.ryzonix.com</a></li>
                            <li><a href="mailto:contact@ryzonix.com">contact@ryzonix.com</a></li>
                            <li>IT Services &amp; IT Consulting</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="footer-lower">
                <div className="container">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-5 col-12">
                            <p className="copyright">Copyright &copy; <span>{new Date().getFullYear()}</span> Ryzonix. All rights reserved.</p>
                        </div>
                        <div className="col-lg-3 col-12 text-center">
                            <p>Saturday - Thursday</p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <ul className="widget-social">
                                <li><Link onClick={ClickHandler} href="#"><i className="ti-facebook"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><i className="ti-instagram"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><i className="ti-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="f-shape">
                <Image src={Shape} alt="" />
            </div>
        </footer>
    );
};

export default FooterS3;