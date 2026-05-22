import React from 'react';
import { BRAND_CSS } from '../../lib/brandColors';

/** Circular play / video control accent */
const BrandPlayIcon = ({ className = '', size = 46 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 46 46"
        fill="none"
        className={className}
        aria-hidden="true"
    >
        <circle cx="22.4286" cy="22.4286" r="21.9286" stroke={BRAND_CSS.primary} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3698 14.9552C17.85 14.6488 17.2 14.9991 17.2 15.599V29.2581C17.2 29.858 17.85 30.2083 18.3698 29.9019L29.5545 23.3224C30.0479 23.0313 30.0479 22.4258 29.5545 22.1347L18.3698 14.9552Z"
            fill={BRAND_CSS.primary}
        />
        <defs>
            <clipPath id="brandPlayClip">
                <rect width="44.8572" height="44.8571" fill="white" transform="translate(0.571411 0.571411)" />
            </clipPath>
        </defs>
    </svg>
);

export default BrandPlayIcon;
