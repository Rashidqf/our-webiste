import React from "react";
import Link from "next/link";
import Teams from "../../api/team";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS2 = (props) => {
    const { circlebottom = true } = props

    return (
        <section className="team-section-s2 section-padding">
            <div className="container">
                <div className="title">
                    <h2 className="scroll-text-animation" data-animation="fade_from_bottom">6.team members</h2>
                    <div className="title-bottom">
                        <h3 className="scroll-text-animation" data-animation="fade_from_bottom">our members</h3>
                        <Link onClick={ClickHandler} href="/team" className="scroll-text-animation" data-animation="fade_from_bottom"> <span className="rolling-text">All Member</span>
                            <i className="ti-arrow-top-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {Teams.slice(4, 8).map((team, titem) => (
                        <div className="col-lg-3 col-md-6 col-12 fade_bottom" key={titem}>
                            <div className="team-card">
                                <div className="image">
                                    <Image src={team.timg} alt="" />
                                    <Image src={team.timg} alt="" />
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="#"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="#"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="#"><i className="ti-instagram"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="#"><i className="ti-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                        {team.title}
                                    </Link>
                                    </h2>
                                    <span>{team.subtitle}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {circlebottom && (
                    <div className="circle-bottom">
                        <div className="circle-content">
                            <div className="rotate-anm">
                                <svg viewBox="0 0 100 100">
                                    <defs>
                                        <path id="circle78" d="
                                            M 50, 50
                                            m -37, 0
                                            a 37,37 0 1,1 74,0
                                            a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <text>
                                        <textPath xlinkHref="#circle78">
                                            - Digital World - Digital World
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="arrows">
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                                    <g clipPath="url(#clip0_193_46977)">
                                        <path
                                            d="M24.9507 0.800781H21.3494L21.3073 18.47L8.38306 5.50394L5.37461 8.47006L18.4678 21.0971H0.926025V24.6564H18.1294L5.7143 37.0293L8.84972 39.8259L21.3073 27.453V45.1225H24.9507V27.453L37.0699 39.8259L39.7394 37.2411L27.4789 24.6564H45.2903V21.0971H27.4789L40.036 8.80899L37.3666 5.97002L24.9507 18.0463V0.800781Z"
                                            fill="var(--theme, #3B8F63)" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_193_46977">
                                            <rect width="44.8572" height="44.8571" fill="white"
                                                transform="translate(0.622803 0.623047)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>


    )
}
export default TeamSectionS2;

