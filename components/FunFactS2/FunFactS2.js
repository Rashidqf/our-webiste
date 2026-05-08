import React, { useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import CountUp from 'react-countup';

const FunFactS2 = () => {



    useEffect(() => {
        const allBtns = gsap.utils.toArray(".btn-wrapper");
        const allBtnCircles = gsap.utils.toArray(".btn-move");

        if (allBtns.length > 0) {
            allBtns.forEach((btn, i) => {
                const btnElement = btn;
                const btnCircle = allBtnCircles[i];

                const callParallax = (e) => parallaxIt(e, btnCircle, 80);

                const parallaxIt = (e, target, movement) => {
                    const rect = btnElement.getBoundingClientRect();
                    const relX = e.clientX - rect.left;
                    const relY = e.clientY - rect.top;

                    gsap.to(target, 0.5, {
                        x: ((relX - rect.width / 2) / rect.width) * movement,
                        y: ((relY - rect.height / 2) / rect.height) * movement,
                        ease: Power2.easeOut,
                    });
                };

                btnElement.addEventListener('mousemove', callParallax);
                btnElement.addEventListener('mouseleave', () => {
                    gsap.to(btnCircle, 0.5, {
                        x: 0,
                        y: 0,
                        ease: Power2.easeOut,
                    });
                });

                return () => {
                    btnElement.removeEventListener('mousemove', callParallax);
                };
            });
        }
    }, []);

    return (
        <section className="fanfuct-section-s2">
            <div className="container">
                <div className="title scroll-text-animation" data-animation="fade_from_bottom">
                    <div className="shape rotate-anm">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path
                                d="M46.8425 22.7975L40.0275 20.85C36.9585 19.9848 34.1629 18.3464 31.9082 16.0917C29.6535 13.837 28.0152 11.0415 27.15 7.97249L25.2025 1.15748C25.1045 0.919049 24.9379 0.715114 24.7238 0.571592C24.5097 0.42807 24.2577 0.35144 24 0.35144C23.7422 0.35144 23.4903 0.42807 23.2761 0.571592C23.062 0.715114 22.8954 0.919049 22.7975 1.15748L20.85 7.97249C19.9847 11.0415 18.3464 13.837 16.0917 16.0917C13.837 18.3464 11.0414 19.9848 7.97247 20.85L1.15747 22.7975C0.895794 22.8718 0.665489 23.0294 0.501498 23.2464C0.337506 23.4634 0.248779 23.728 0.248779 24C0.248779 24.272 0.337506 24.5366 0.501498 24.7536C0.665489 24.9706 0.895794 25.1282 1.15747 25.2025L7.97247 27.15C11.0414 28.0152 13.837 29.6536 16.0917 31.9083C18.3464 34.1629 19.9847 36.9585 20.85 40.0275L22.7975 46.8425C22.8717 47.1042 23.0293 47.3345 23.2464 47.4985C23.4634 47.6625 23.728 47.7512 24 47.7512C24.272 47.7512 24.5366 47.6625 24.7536 47.4985C24.9706 47.3345 25.1282 47.1042 25.2025 46.8425L27.15 40.0275C28.0152 36.9585 29.6535 34.1629 31.9082 31.9083C34.1629 29.6536 36.9585 28.0152 40.0275 27.15L46.8425 25.2025C47.1041 25.1282 47.3344 24.9706 47.4984 24.7536C47.6624 24.5366 47.7512 24.272 47.7512 24C47.7512 23.728 47.6624 23.4634 47.4984 23.2464C47.3344 23.0294 47.1041 22.8718 46.8425 22.7975Z" />
                        </svg>
                    </div>
                    <p>we,ve listed some fascinating <span>insights <br/>
                        from our data</span> analytics</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item btn-wrapper btn-move">
                            <h2><span><CountUp end={15} enableScrollSpy /></span>+</h2>
                            <h3>Years of experience</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item btn-wrapper btn-move active">
                            <h2><span><CountUp end={22} enableScrollSpy /></span>+</h2>
                            <h3>Team Members</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item btn-wrapper btn-move">
                            <h2><span><CountUp end={25} enableScrollSpy /></span>k</h2>
                            <h3>Happy Customers</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item btn-wrapper btn-move">
                            <h2><span><CountUp end={402} enableScrollSpy /></span>+</h2>
                            <h3>worldwide clients</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFactS2;