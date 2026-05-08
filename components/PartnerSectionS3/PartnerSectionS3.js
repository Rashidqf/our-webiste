import React from 'react';



// image
import pimg1 from '/public/images/partners/img-1.png';
import pimg2 from '/public/images/partners/img-2.png';
import pimg3 from '/public/images/partners/img-3.png';
import pimg4 from '/public/images/partners/img-4.png';
import pimg5 from '/public/images/partners/img-5.png';
import pimg6 from '/public/images/partners/img-6.png';
import pimg7 from '/public/images/partners/img-7.png';
import pimg8 from '/public/images/partners/img-8.png';
import pimg9 from '/public/images/partners/img-9.png';
import pimg10 from '/public/images/partners/img-10.png';
import pimg11 from '/public/images/partners/img-11.png';
import pimg12 from '/public/images/partners/img-12.png';
import Image from 'next/image';

const partners = [
    {
        id: "01",
        pimg: pimg1,
    },
    {
        id: "02",
        pimg: pimg2,
    },
    {
        id: "03",
        pimg: pimg3,
    },
    {
        id: "04",
        pimg: pimg4,
    },
    {
        id: "05",
        pimg: pimg5,
    },
    {
        id: "06",
        pimg: pimg6,
    },
    {
        id: "07",
        pimg: pimg7,
    },
    {
        id: "08",
        pimg: pimg8,
    },
    {
        id: "09",
        pimg: pimg9,
    },
    {
        id: "10",
        pimg: pimg10,
    },
    {
        id: "11",
        pimg: pimg11,
    },
    {
        id: "12",
        pimg: pimg12,
    },

]



const PartnerSectionS3 = () => {
    return (
        <section className="partners-section-s2 ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="title scroll-text-animation" data-animation="fade_from_bottom">
                            <h2>Trusted by <span>25k+</span> businesses</h2>
                        </div>
                    </div>
                </div>
                <div className="row scroll-text-animation" data-animation="fade_from_bottom">
                    <div className="col col-xs-12">
                        <div className="partner-grids clearfix">
                            {partners.map((partner, pitem) => (
                                <div className="grid" key={pitem}>
                                    <Image src={partner.pimg} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSectionS3;