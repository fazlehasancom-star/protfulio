import React from 'react';
import { Language } from '../types';

interface BrandLogoProps {
  lang: Language;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  lang,
  size = 'md',
  showTagline = true,
  className = ''
}: BrandLogoProps) {
  const iconSizeClass = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 sm:w-11 sm:h-11 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl'
  }[size];

  const svgSizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5 sm:w-6 sm:h-6',
    lg: 'w-7 h-7'
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Minimal Aesthetic Vector Emblem */}
      <div
        className={`relative ${iconSizeClass} bg-gradient-to-b from-[#181a20] to-[#0c0e14] border border-white/10 group-hover:border-[#ff5e28]/50 shadow-sm flex items-center justify-center transition-all duration-300 shrink-0 overflow-hidden`}
      >
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute inset-0 bg-radial from-[#ff5e28]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Cinematic Minimal Monogram Emblem */}
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${svgSizeClass} transition-transform duration-300 group-hover:scale-105`}
        >
          {/* Subtle Viewfinder Frame Brackets */}
          <path
            d="M5 11V5H11"
            stroke="#ff5e28"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-75 group-hover:opacity-100 transition-opacity"
          />
          <path
            d="M25 31H31V25"
            stroke="#ff5e28"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-75 group-hover:opacity-100 transition-opacity"
          />

          {/* Minimalist Geometric 'F' */}
          <path
            d="M10 10H18V13H13V16.5H17V19.5H13V26H10V10Z"
            fill="#FFFFFF"
          />

          {/* Minimalist Geometric 'H' with warm orange accent */}
          <path
            d="M19.5 10H22.5V16.5H25.5V10H28.5V26H25.5V19.5H22.5V26H19.5V10Z"
            fill="#FF5E28"
          />

          {/* Micro Center Play / Cut Slash Accent */}
          <circle cx="18" cy="18" r="1" fill="#FF8A50" className="animate-pulse" />
        </svg>
      </div>

      {/* Refined Minimalist Typography */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-center gap-1.5">
          <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-slate-100 transition-colors leading-tight">
            {lang === 'bn' ? 'ফজলে হাসান' : 'FAZLE HASAN'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e28] animate-pulse shrink-0" />
        </div>

        {showTagline && (
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#ff7a45] uppercase mt-0.5 leading-none">
            {lang === 'bn' ? 'ভিডিও এডিটর' : 'VIDEO EDITOR'}
          </span>
        )}
      </div>
    </div>
  );
}
