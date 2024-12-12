import React from 'react';

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#818cf8' }} />
          <stop offset="100%" style={{ stopColor: '#c084fc' }} />
        </linearGradient>
      </defs>
      <path
        d="M50 10C27.909 10 10 27.909 10 50s17.909 40 40 40 40-17.909 40-40S72.091 10 50 10zm0 70c-22.091 0-30-17.909-30-30s7.909-30 30-30 30 7.909 30 30-7.909 30-30 30z"
        fill="url(#logoGradient)"
      />
    </svg>
  );
}