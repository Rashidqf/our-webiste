import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import SeoHead from '../../components/seo/SeoHead';
import { formatTitle } from '../../lib/seo/site';
import { buildBreadcrumbJsonLd } from '../../lib/seo/breadcrumbs';
import Teams from '../../api/team';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.png';
import Image from 'next/image';


const TeamSinglePage = (props) => {

    const router = useRouter()

    const TeamSingles = Teams.find(item => item.slug === router.query.slug)
    const memberName = TeamSingles?.title || 'Team member';

    return (
        <Fragment>
            <SeoHead
                title={formatTitle(memberName)}
                description={`${memberName} at Ryzonix—IT services and web development team.`}
                keywords={`${memberName}, Ryzonix team, web development`}
                canonicalPath={TeamSingles ? `/team-single/${TeamSingles.slug}` : '/team'}
                jsonLd={TeamSingles ? [buildBreadcrumbJsonLd([
                    { name: 'Team', path: '/team' },
                    { name: memberName, path: `/team-single/${TeamSingles.slug}` },
                ])] : []}
            />
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />

            <div className="team-pg-area section-padding pt-0">
                <div className="team-inner section-padding">
                    <div className="container">
                        <div className="team-info-wrap">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="team-info-img">
                                        <Image src={TeamSingles?.Sime} alt={`${memberName} – Ryzonix team`} width={600} height={600} loading="lazy" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="team-info-text">
                                        <h2>{TeamSingles?.title}</h2>
                                        <span>{TeamSingles?.subtitle}</span>

                                        <p>Lorem Ipsum is simply dumm text of the printing has been the
                                            industy standard dummy text ever since unknown printer took
                                            the printing has been the industry.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                                            industry's standard dummy text ever since the 1500 when unknown printer took
                                            galley
                                            of type and scrambled it to make a type specimen book. It has survived not
                                            only
                                            five
                                            centuries, but also the leap into electronic typesetting.</p>
                                        <div className="wpo-skill-section">
                                            <div className="wpo-skill-progress">
                                                <div className="wpo-progress-single">
                                                    <h5 className="progress-title">Financial Investment</h5>
                                                    <div className="progress">
                                                        <div className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "75%" }}
                                                            aria-valuenow="75"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span className="progress-number">75%</span>
                                                </div>
                                                <div className="wpo-progress-single">
                                                    <h5 className="progress-title">Business Analysis</h5>
                                                    <div className="progress">
                                                        <div className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "80%" }}
                                                            aria-valuenow="80"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span className="progress-number">80%</span>
                                                </div>
                                                <div className="wpo-progress-single">
                                                    <h5 className="progress-title">Tax Management</h5>
                                                    <div className="progress">
                                                        <div className="progress-bar"
                                                            role="progressbar"
                                                            style={{ width: "85%" }}
                                                            aria-valuenow="85"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <span className="progress-number">85%</span>
                                                </div>

                                               
                                            </div>
                                        </div>

                                        <ul>
                                            <li>Connect With:</li>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-twitter-alt"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ti-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2>Personal Experience</h2>
                                    <p>The purpose of lorem ipsum is to create a natural looking block oftext (sentence,
                                        paragraph, page, etc.) that doesn't distract from thelayout. A practice not
                                        without
                                        controversy, laying out pages withmeaningless filler text can be very useful
                                        when
                                        the focus is meantto be on design, not content.There are many variations of
                                        passages
                                        of Lorem Ipsum available.</p>
                                    <p>But the majority have suffered alteration in some form, by injected humour, or
                                        randomised words which don’t look even slightly believable. If you are going to
                                        use
                                        a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing
                                        hidden in the middle of text generators on the Internet tend to repeat.</p>
                                </div>
                                <div className="education-area ex-wiget">
                                    <h2>Education</h2>
                                    <ul>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the
                                            majority
                                            have suffered alteration in some form, by injected humour.</li>
                                        <li>If you are going to use a passage of Lorem Ipsum.</li>
                                        <li>Very popular during the Renaissance. </li>
                                        <li>Many desktop publishing packages and web page editors now.</li>
                                    </ul>
                                </div>
                                <div className="language-area ex-wiget">
                                    <h2>Language</h2>
                                    <ul>
                                        <li>French(fluent), English (fluent), Greek , chinese.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />

        </Fragment>
    )
};
export default TeamSinglePage;