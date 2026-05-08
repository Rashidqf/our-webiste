import React, { useState } from "react";
import Link from "next/link";
import Teams from "../../api/team";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS3 = () => {
    const [activeIndex, setActiveIndex] = useState(null);


    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };


    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <section className="team-section-s3 section-padding">
            <div className="container">
                <div className="title">
                    <h3>Expert <span>members</span> <br />
                        Behind us</h3>
                    <Link onClick={ClickHandler} href="/contact" className="theme-btn"><span className="rolling-text">Contact us</span>
                        <i className="ti-arrow-top-right"></i></Link>
                </div>
                <div className="row">
                    <div className="col-12">
                        {Teams.slice(8, 12).map((team, index) => (
                            <div key={index} className={`team-card awward-item item ${activeIndex === index ? "active" : ""}`} onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}>
                                <div className="image">
                                    <Image src={team.timg} alt="" />
                                </div>
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                        {team.title} -
                                    </Link>
                                    </h2>
                                    <span>{team.subtitle}</span>
                                </div>
                                <div className="icon">
                                    <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>Team Details <i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSectionS3;