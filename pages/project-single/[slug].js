import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import Projects from "../../api/projects";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "/public/images/logo-2.svg";

const ProjectSingle = () => {
    const router = useRouter();
    const slug = router.query.slug;
    const project = Projects.find((item) => item.slug === slug);
    const idx = Projects.findIndex((item) => item.slug === slug);
    const prevProject = idx > 0 ? Projects[idx - 1] : null;
    const nextProject = idx >= 0 && idx < Projects.length - 1 ? Projects[idx + 1] : null;

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    if (!router.isReady) {
        return null;
    }

    if (!project) {
        return (
            <Fragment>
                <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
                <section className="project-single-page section-padding">
                    <div className="container">
                        <p>Project not found.</p>
                        <Link href="/project" className="theme-btn">
                            <span className="rolling-text">All projects</span>
                        </Link>
                    </div>
                </section>
                <Footer hclass={"footer-section section-padding pb-0"} />
                <Scrollbar />
            </Fragment>
        );
    }

    const websiteLink = project.website?.href ? (
        <Link onClick={ClickHandler} href={project.website.href}>
            {project.website.label}
        </Link>
    ) : (
        <span>{project.website?.label || "—"}</span>
    );

    return (
        <Fragment>
            <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
            <section className="project-single-page section-padding">
                <div className="container">
                    <div className="project-wrap">
                        <div className="project-top-info">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-12">
                                    <div className="section-title poort-text poort-in-right">
                                        <h2>{project.title}</h2>
                                        <h3>{project.tagline}</h3>
                                        {(project.detailIntro || []).map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                    <Link onClick={ClickHandler} href="/project" className="theme-btn">
                                        {" "}
                                        <span className="rolling-text">All Projects</span>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="project-info">
                                        <ul>
                                            <li>
                                                <h3>Clients</h3>
                                                <span>{project.client}</span>
                                            </li>
                                            <li>
                                                <h3>Project Type</h3>
                                                <span>{project.projectType}</span>
                                            </li>
                                            <li>
                                                <h3>Date</h3>
                                                <span>{project.date}</span>
                                            </li>
                                            <li>
                                                <h3>Website</h3>
                                                <span>{websiteLink}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="image-gallery">
                                <ul>
                                    <li>
                                        <Image
                                            src={project.pimg1}
                                            alt={project.title}
                                            width={1200}
                                            height={750}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={project.pimg1}
                                            alt={project.title}
                                            width={1200}
                                            height={750}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="info-content">
                                <div className="info-item">
                                    <div className="left">
                                        <h2 className="poort-text poort-in-right">{project.detailOverviewHeading}</h2>
                                    </div>
                                    <div className="right">
                                        {(project.detailOverviewBody || []).map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                        <div className="item">
                                            <ul>
                                                {(project.detailHighlightBullets || []).slice(0, 2).map((line) => (
                                                    <li key={line}>{line}</li>
                                                ))}
                                            </ul>
                                            <ul>
                                                {(project.detailHighlightBullets || []).slice(2, 4).map((line) => (
                                                    <li key={line}>{line}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="left">
                                        <h2 className="poort-text poort-in-right">{project.detailResultsHeading}</h2>
                                    </div>
                                    <div className="right s2">
                                        <p>{project.detailResultsLead}</p>
                                        <div className="item">
                                            <ul>
                                                {(project.detailOutcomePoints || []).map((pt) => (
                                                    <li key={pt.title}>
                                                        <h3>
                                                            <i className="ti-check"></i>
                                                            {pt.title}
                                                        </h3>
                                                        <span>{pt.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-img">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 ">
                                        <Image
                                            src={project.pimg1}
                                            alt={project.title}
                                            width={900}
                                            height={600}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 ">
                                        <Image
                                            src={project.pimg1}
                                            alt={project.title}
                                            width={900}
                                            height={600}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="page-chang">
                                <div className="previous-post post">
                                    {prevProject ? (
                                        <Link onClick={ClickHandler} href={`/project-single/${prevProject.slug}`}>
                                            {prevProject.title}
                                        </Link>
                                    ) : (
                                        <span>Previous</span>
                                    )}
                                </div>
                                <button type="button" className="post-btn" aria-label="Projects grid">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.68457 0.444336H7.0903V6.88878H0.68457V0.444336ZM0.68457 13.3333H7.0903V19.7777H0.68457V13.3333ZM7.0903 26.2221H0.68457V32.6665H7.0903V26.2221ZM13.4959 0.444336H19.9016V6.88878H13.4959V0.444336ZM19.9016 13.3333H13.4959V19.7777H19.9016V13.3333ZM13.4959 26.2221H19.9016V32.6665H13.4959V26.2221ZM32.7133 0.444336H26.3076V6.88878H32.7133V0.444336ZM26.3076 13.3333H32.7133V19.7777H26.3076V13.3333ZM32.7133 26.2221H26.3076V32.6665H32.7133V26.2221Z"
                                            fill="#FF7236"
                                        />
                                    </svg>
                                </button>
                                <div className="next-post post">
                                    {nextProject ? (
                                        <>
                                            <Link onClick={ClickHandler} href={`/project-single/${nextProject.slug}`} className="next">
                                                Next <i className="ti-angle-right"></i>
                                            </Link>
                                            <Link onClick={ClickHandler} href={`/project-single/${nextProject.slug}`}>
                                                {nextProject.title}
                                            </Link>
                                        </>
                                    ) : (
                                        <span>Next</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={"footer-section section-padding pb-0"} />
            <Scrollbar />
        </Fragment>
    );
};
export default ProjectSingle;
