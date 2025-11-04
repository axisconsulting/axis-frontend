// src/components/icons/ImageNotFound.tsx
import React from "react";

export const ImageNotFound: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      role="img"
      aria-label="Image not found"
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <rect x="14" y="20" width="100" height="88" rx="10" />
      <circle cx="80" cy="55" r="6" />
      <path d="M26 92l22-28 14 18 10-12 30 22" />
      <path d="M50 120l75 -75" />
   </svg>
);
