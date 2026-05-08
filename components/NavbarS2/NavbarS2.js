import React, { useState, useEffect } from "react";
import HeaderS2 from '../headerS2/HeaderS2';

export default function NavbarS2(props) {
    const [scroll, setScroll] = useState();

    const handleScroll = () => setScroll(document.documentElement.scrollTop);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

    return (
        <div className={className}>
            <HeaderS2 hclass={props.hclass} Logo={props.Logo} />
        </div>
    );
}