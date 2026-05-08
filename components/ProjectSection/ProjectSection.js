import React from "react";
import Link from "next/link";
import Projects from "../../api/projects";
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="title scroll-text-animation" data-animation="fade_from_bottom">
                            <h2>Selected
                                <span>Works..</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="project-btn">
                            <Link onClick={ClickHandler} href="/project" className="theme-btn"> <span className="rolling-text"> All
                                Project</span>
                                <i className="ti-arrow-top-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row gallery-container">
                        {Projects.map((project, item) => (
                            <div className="col col-lg-6 col-12 scroll-text-animation" data-animation="fade_from_bottom" key={project.slug || item}>
                            <div className="project-card">
                                    <Image
                                        src={project.pimg1}
                                        alt={project.title}
                                        width={1200}
                                        height={750}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                    <div className="text">
                                        <h2><Link onClick={ClickHandler} href={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                        {(project.tags || []).slice(0, 2).map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProjectSection;