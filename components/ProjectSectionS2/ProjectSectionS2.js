import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Projects from "../../api/projects";
import { gsap, Power2 } from 'gsap';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSectionS2 = (props) => {

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
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="title">
                    <h2 className="scroll-text-animation" data-animation="fade_from_bottom">5.work showcase</h2>
                    <div className="title-bottom">
                        <h3 className="scroll-text-animation" data-animation="fade_from_bottom">Selected Works</h3>
                        <Link onClick={ClickHandler} href="/project" className="scroll-text-animation" data-animation="fade_from_bottom"> <span className="rolling-text">All Projects</span>
                            <i className="ti-arrow-top-right"></i></Link>
                    </div>
                </div>
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row gallery-container scroll-text-animation" data-animation="fade_from_bottom">
                        {Projects.slice(0, 4).map((project, item) => (
                            <div className="col col-lg-6 col-md-6 col-12" key={project.slug || item}>
                                <div className="project-card">
                                    <Image src={project.pimg1} alt="" />
                                    <Link onClick={ClickHandler} href={`/project-single/${project.slug}`} className="slingle-page-link btn-wrapper btn-move">
                                        <i className="ti-arrow-top-right"></i>
                                    </Link>
                                    <div className="text">
                                        <span>{project.subtitle}</span>
                                        <h2><Link onClick={ClickHandler} href={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="side-text-slid">
                        <div className="marquee">
                            <h2>selected projects</h2>
                        </div>
                        <div className="marquee">
                            <h2>selected projects</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSectionS2;
