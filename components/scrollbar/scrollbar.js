import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Scrollbar = () => {
    return (
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li>
                        <AnchorLink href="#__next" className="scroll-top-btn" aria-label="Scroll to top">
                            <i className="ti-arrow-up" aria-hidden="true"></i>
                        </AnchorLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Scrollbar;
