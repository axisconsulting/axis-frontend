// src/components/ClientLogoGrid/ClientLogoMarquee.styled.ts
import styled, { css, keyframes } from "styled-components";
import { up } from "$styles/constants/breakpoints";

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const scrollReverse = keyframes`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`;

export const MarqueeWrapper = styled.section`
   position: relative;
   width: 100%;
   overflow: hidden;
`;

export const Row = styled.div`
   width: 100%;
   overflow: hidden;
   padding: 0.75rem 0;

   ${up("LARGE")} {
      padding: 1rem 0;
   }
`;

/**
 * Track is duplicated content (2x) so moving -50% loops seamlessly.
 * Uses CSS variable --duration for speed.
 */
export const Track = styled.div<{ $duration: string }>`
   display: flex;
   width: max-content;
   gap: 1.25rem;
   align-items: center;

   animation: ${scroll} var(--duration, 28s) linear infinite;
   animation-duration: ${({ $duration }) => $duration};
   will-change: transform;

   &[data-reverse] {
      animation: ${scrollReverse} var(--duration, 34s) linear infinite;
   }

   @media (prefers-reduced-motion: reduce) {
      animation: none;
      transform: none;
   }
`;

export const LogoItem = styled.div`
   display: inline-flex;
   align-items: center;
   gap: 0.75rem;
   padding: 0.75rem 1rem;
   white-space: nowrap;
`;

export const LogoImg = styled.img`
   height: 48px;

   border-radius: 12px;
   width: auto;
   object-fit: contain;
   display: block;

   ${up("LARGE")} {
      height: 96px;
   }
`;

export const LogoLabel = styled.span`
   font-size: ${({ theme }) => theme.fontSizes.body};
   color: ${({ theme }) => theme.tokens.fgMuted};
`;

const fadeBase = css`
   pointer-events: none;
   position: absolute;
   top: 0;
   bottom: 0;
   width: 72px;
   z-index: 2;
`;

export const FadeEdge = styled.div<{ "data-right"?: true }>`
   ${fadeBase};

   left: 0;
   background: linear-gradient(90deg, ${({ theme }) => theme.tokens.bg} 0%, rgba(0, 0, 0, 0) 100%);

   &[data-right] {
      left: auto;
      right: 0;
      background: linear-gradient(
         270deg,
         ${({ theme }) => theme.tokens.bg} 0%,
         rgba(0, 0, 0, 0) 100%
      );
   }
`;
