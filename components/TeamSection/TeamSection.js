import React from "react";
import Link from "next/link";
import Teams from "../../api/team";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {

    return (
        <section className="team-section section-padding">
            <div className="container">
                <div className="title">
                    <h2 className="scroll-text-animationt" data-animation="fade_from_right">professional people</h2>
                    <div className="title-bottom scroll-text-animation" data-animation="fade_from_right">
                        <h3>Creative team <span>members</span></h3>
                        <Link onClick={ClickHandler} href="/team"> <span className="rolling-text">More Team Members</span>
                            <i className="ti-arrow-top-right"></i></Link>
                    </div>
                </div>
                <div className="row">
                    {Teams.slice(0, 4).map((team, titem) => (
                        <div className="col-lg-3 col-md-6 col-12 scroll-text-animation" data-animation="fade_from_right" key={titem}>
                            <div className="team-card">
                                <div className="image">
                                    <Image src={team.timg} alt="" />
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="#"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="#"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="#"><i className="ti-instagram"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="#"><i className="ti-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="text">
                                    <h2>
                                        <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                            {team.title}
                                        </Link>
                                    </h2>
                                    <span>{team.subtitle}</span>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div className="team-btn scroll-text-animation" data-animation="fade_from_right">
                    <Link onClick={ClickHandler} href="/contact" className="theme-btn"> <span className="rolling-text">Contact us</span><i
                        className="ti-arrow-top-right"></i></Link>
                </div>
            </div>
        </section>
    )
}
export default TeamSection;


{
    Teams.slice(0, 4).map((team, titem) => (
        <div className="col-lg-3 col-md-6 col-12" key={titem}>
            <div className="team-single">
                <div className="team-single-img">
                    <Image src={team.timg} alt="" />
                </div>
                <div className="team-single-text">
                    <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                        <h2>{team.title}</h2>
                    </Link>
                    <span>{team.subtitle}</span>
                </div>
            </div>
        </div>
    ))
}