'use client';
import React, { useState, useEffect } from "react";
import Header from '../header/Header';

export default function Navbar(props) {
  const [scroll, setScroll] = useState();

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  return (
    <div className={className}>
        <Header hclass={props.hclass} Logo={props.Logo} />
    </div>
  ); 
}