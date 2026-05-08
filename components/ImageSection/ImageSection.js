import React from 'react';
import SectiobImg from '/public/images/image-section.jpg'
import Image from 'next/image';

const ImageSection = () => {
    return (
        <div className="section-image scroll-text-animation" data-animation="fade_from_bottom">
            <Image src={SectiobImg} alt=""  />
        </div>
    );
};

export default ImageSection;