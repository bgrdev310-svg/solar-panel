import React from 'react';
import './Placeholders.css';

export const Pill = ({ width = '100px', height = '20px', dim, className = '', style = {} }) => (
    <div
        className={`placeholder ${dim ? 'placeholder-dim' : ''} ${className}`}
        style={{ width, height, borderRadius: 'var(--radius-pill)', ...style }}
    />
);

export const Circle = ({ size = '24px', dim, dark, className = '' }) => {
    let bgClass = 'placeholder';
    if (dim) bgClass = 'placeholder-dim';
    if (dark) bgClass = 'placeholder-dark';
    return (
        <div
            className={`${bgClass} ${className}`}
            style={{ width: size, height: size, borderRadius: '50%' }}
        />
    );
};

export const Block = ({ width = '100%', height = '100px', radius = 'var(--radius-md)', dim, className = '' }) => (
    <div
        className={`placeholder ${dim ? 'placeholder-dim' : ''} ${className}`}
        style={{ width, height, borderRadius: radius }}
    />
);

export const TextLine = ({ width = '100%', height = '16px', dim, className = '' }) => (
    <div
        className={`placeholder ${dim ? 'placeholder-dim' : ''} ${className}`}
        style={{ width, height, borderRadius: '4px' }}
    />
);

export const StarIcon = ({ size = 20, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{ color: 'var(--accent-sparkle)' }}
    >
        <path d="M12 2v20M17 5 7 19M5 5l10 14M2 12h20" />
    </svg>
);

export const ImageIcon = ({ size = 48, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="var(--element-darker)"
        className={className}
    >
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
);
