import React from 'react';
import { BRAND_CSS } from '../../lib/brandColors';

const BrandBlobGlow = ({
    className = '',
    width = 1920,
    height = 1435,
    cx = 984.937,
    cy = 717.486,
    rx = 906.755,
    ry = 83.9948,
    rotate = 23.3308,
    opacity = 0.21,
    filterId = 'brandBlobFilter',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <g filter={`url(#${filterId})`}>
                <ellipse
                    cx={cx}
                    cy={cy}
                    rx={rx}
                    ry={ry}
                    transform={`rotate(${rotate} ${cx} ${cy})`}
                    fill={BRAND_CSS.primary}
                    fillOpacity={opacity}
                />
            </g>
            <defs>
                <filter
                    id={filterId}
                    x="-198.352"
                    y="0.110352"
                    width="2366.58"
                    height="1434.75"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur" />
                </filter>
            </defs>
        </svg>
    );
};

export default BrandBlobGlow;
