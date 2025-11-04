// src/components/icons/ImageLoading.tsx
import React from "react";

export const ImageLoading: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      role="img"
      aria-label="Image loading"
      fill="none"
      stroke="currentColor"
      strokeWidth={10}
      strokeLinecap="round"
      {...props}>
      <circle cx="64" cy="64" r="44" opacity="0.2" />
      <path d="M108 64a44 44 0 0 0-44-44">
         <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 64 64"
            to="360 64 64"
            dur="1s"
            repeatCount="indefinite"
         />
      </path>
   </svg>
);
