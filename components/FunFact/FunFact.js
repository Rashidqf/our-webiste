import React from 'react';
import Shape from '/public/images/funfact-bg-shape.svg'
import fanfact1 from '/public/images/fanfact-1.jpg'
import fanfact2 from '/public/images/fanfact-2.jpg'
import Image from 'next/image';

const FunFact = (props) => {


    

    return (
        <section className="fanfuct-section section-padding">
            <div className="container">
                <div className="top-content">
                    <div className="title">
                        <h3 className="splittext-line">company
                            <span>inside..</span></h3>
                    </div>
                    {/* <div className="left-image">
                        <Image src={fanfact1} alt="" />
                    </div> */}
                    {/* <div className="right-image">
                        <Image src={fanfact2} alt="" />
                    </div> */}
                </div>
                <div className="funfact-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-4 col-12">
                            <div className="item">
                                <h3>Company size</h3>
                                <h2>2–10</h2>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-12 ">
                            <div className="item">
                                <h3>Founded</h3>
                                <h2><span>2025</span></h2>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-12 ">
                            <div className="item">
                                <h3>Specialty areas</h3>
                                <h2><span>5</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape">
                <Image src={Shape} alt="" />
            </div>
        </section>
    )

}

export default FunFact;