import React from "react";
import Link from "next/link";
import { useState } from 'react';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const PricingSection = () => {
    const [plan] = useState([
        {
            id: '01',
            name: 'Basic',
            price: 70,
            priceRegular: 20,
            descriptionL: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            features: ['Social media advertising', 'Report analytics', 'Keyword research', 'Content strategy', 'Customizable registration']
        },
        {
            id: '02',
            name: 'Premium',
            price: 90,
            priceRegular: 20,
            descriptionL: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            features: ['Social media advertising', 'Report analytics', 'Keyword research', 'Content strategy', 'Customizable registration']
        },
        {
            id: '03',
            name: 'Business',
            price: 100,
            priceRegular: 20,
            descriptionL: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            features: ['Social media advertising', 'Report analytics', 'Keyword research', 'Content strategy', 'Customizable registration']
        }
    ])

    return (

        <div className="pricing-page section-padding">
            <div className="container">
                <div className="row">
                    {plan.map((palns, pritem) => (
                        <div className="col-xl-4 col-md-6 col-12" key={pritem}>
                            <div className="pricing-card">
                                <div className="title">
                                    <h2>{palns.name}</h2>
                                    <p>{palns.descriptionL}</p>
                                </div>
                                <div className="pricing-top">
                                    <h2>${palns.price}<sub> / month</sub></h2>
                                    <h3>+ ${palns.priceRegular}<sub> / person par month</sub></h3>
                                </div>
                                <Link onClick={ClickHandler} href="#" className="theme-btn">
                                    <span className="rolling-text">Buy Package</span>
                                </Link>
                                <ul>
                                    {palns.features.map((feature, featureitem) => (
                                        <li key={featureitem}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default PricingSection;


<div className="col-xl-4 col-md-6">
    <div className="pricing-card">

        <ul>
            <li>
                Social media advertising
            </li>
            <li>
                Report analytics
            </li>
            <li>
                Keyword research
            </li>
            <li>
                Content strategy
            </li>
            <li>
                Customizable registration
            </li>
        </ul>
    </div>
</div>