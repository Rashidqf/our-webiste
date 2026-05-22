import React from 'react';

const BrandStarIcon = ({ className = '', size = 64, gradientId = 'brandStarGradient' }) => {
    const height = Math.round(size * (68 / 64));

    return (
        <svg
            width={size}
            height={height}
            viewBox="0 0 64 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <defs>
                <linearGradient
                    id={gradientId}
                    x1="32"
                    y1="0"
                    x2="32"
                    y2="68"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="var(--brand-green-dark, #3B8F63)" />
                    <stop offset="1" stopColor="var(--brand-green-light, #66E0A3)" />
                </linearGradient>
            </defs>
            <path
                d="M27.4763 67.4054V41.5014L4.5494 54.5037L0.0256958 46.7428L22.9526 33.7405L0.0256958 20.839L4.5494 13.0779L27.4763 26.0802V0.0756836H36.5237V26.0802L59.4506 13.0779L63.9742 20.839L41.0475 33.7405L63.9742 46.7428L59.4506 54.5037L36.5237 41.5014V67.4054H27.4763Z"
                fill={`url(#${gradientId})`}
            />
        </svg>
    );
};

export default BrandStarIcon;
