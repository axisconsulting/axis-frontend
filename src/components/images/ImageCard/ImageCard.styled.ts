// src/components/images/ImageCard/ImageCard.styled.ts
import styled, { css } from "styled-components";
import { up } from "$styles/constants/breakpoints";

/**
 * Outer wrapper.
 * Default is block-level.
 * For intrinsic team banner, we shrink-wrap in a horizontal track.
 */
export const CardOuter = styled.div<{ $shrink?: boolean }>`
   display: block;
   color: ${({ theme }) => theme.tokens.fg};

   ${({ $shrink }) =>
      $shrink &&
      css`
         display: inline-block;
         width: fit-content;
         flex: 0 0 auto;
      `}
`;

/**
 * Acts like Tailwind's `group`. We use this parent for hover selectors.
 */
export const CardInner = styled.div<{ $shrink?: boolean }>`
   position: relative;
   width: 100%;

   ${({ $shrink }) =>
      $shrink &&
      css`
         display: inline-block;
         width: fit-content;
      `}
`;

/**
 * Frame that controls dimensions and hover transform on the <img />.
 * Supports:
 *  - profile cards ("team" | "person")
 *  - feature cards ("feature")
 *
 * Special behavior:
 *  - team banner in intrinsic mode shrink-wraps to the image width at fixed height.
 */
export const ImgFrame = styled.div<{
   $mode: "profile" | "feature";
   $profileSize: "team" | "person";
   $fit?: "fill" | "intrinsic";
}>`
   position: relative;
   overflow: hidden;
   border-radius: 0.5rem;

   /* base for profile cards */
   ${({ $mode, $profileSize, $fit }) =>
      $mode === "profile" &&
      css`
         height: 60vh;

         /* default sizing for profile frames */
         ${$fit !== "intrinsic" &&
         css`
            width: ${$profileSize === "team"
               ? "clamp(18rem, 90vw, 70rem)"
               : "clamp(16rem, 80vw, 26rem)"};
            flex: 0 0 auto;
         `}

         /* intrinsic shrink-wrap sizing for team banners */
      ${$fit === "intrinsic" &&
         css`
            display: inline-block;
            width: auto;
            flex: 0 0 auto;
         `}
      `}

   /* base for feature cards */
  ${({ $mode }) =>
      $mode === "feature" &&
      css`
         width: 100%;
         height: 20rem;

         ${up("LARGE")} {
            min-height: 40rem;
            height: 40rem;
         }

         border-radius: 0.25rem;
      `}

  /* hover behavior: darken + slight zoom */
  ${CardInner}:hover & img {
      filter: brightness(0.15);
      transform: scale(1.03);
   }
`;

/**
 * Overlay base styles
 */
const overlayShared = css`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 10;
   display: flex;
   flex-direction: column;
   text-align: left;
   color: ${({ theme }) => theme.tokens.fg};
   opacity: 1;
   transition: all 0.5s ease-in-out;
   pointer-events: none;
`;

export const OverlayProfile = styled.div`
   ${overlayShared};
   padding: 1rem;
   padding-bottom: 1rem;

   ${up("LARGE")} {
      padding: 2rem;
      padding-bottom: 2rem;
   }

   /* On hover, bump bottom padding a little */
   ${CardInner}:hover & {
      padding-bottom: 1.5rem;

      ${up("LARGE")} {
         padding-bottom: 2.5rem;
      }
   }

   /* Make sure long text can wrap and won't overflow horizontally */
   h2,
   p {
      max-width: 100%;
      word-break: break-word;
      overflow-wrap: anywhere;
      hyphens: auto;
   }

   h2 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.h2};
      line-height: 1.15;
      margin: 0 0 0.25rem 0;
      color: ${({ theme }) => theme.tokens.fg};
   }

   p {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: ${({ theme }) => theme.fontSizes.body};
      line-height: 1.3;
      margin: 0;
      color: ${({ theme }) => theme.tokens.fg};
   }
`;

export const OverlayFeature = styled.div`
   ${overlayShared};
   gap: 1rem;
   padding: 2rem;
   padding-bottom: 3.5rem;

   ${CardInner}:hover & {
      padding-bottom: 4rem;
   }

   h2 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.h2};
      line-height: 1.15;
      margin: 0;
      color: ${({ theme }) => theme.tokens.fg};
   }

   p {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: ${({ theme }) => theme.fontSizes.body};
      margin: 0;
      color: ${({ theme }) => theme.tokens.fg};
      max-width: 60ch;
   }
`;

/**
 * CTA row that sits pinned to the bottom inside OverlayFeature.
 */
export const FeatureCTAWrapper = styled.div`
   position: absolute;
   bottom: 0;
   left: 2rem;
   right: 2rem;

   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 0.5rem;

   margin-bottom: 1rem;
   opacity: 1;
   transition: all 0.65s ease-in-out;
   cursor: pointer;
   color: ${({ theme }) => theme.tokens.link};

   ${up("LARGE")} {
      opacity: 0;
   }

   ${CardInner}:hover & {
      margin-bottom: 2rem;
      opacity: 1;
      color: ${({ theme }) => theme.tokens.linkHover};
   }

   span {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: ${({ theme }) => theme.fontSizes.body};
      line-height: 1.3;
   }

   svg {
      flex-shrink: 0;
      font-size: 1.1em;
   }
`;

/** Fade-in image */
export const BgImage = styled.img<{ $visible?: boolean; $fit?: "fill" | "intrinsic" }>`
   opacity: ${({ $visible }) => ($visible ? 1 : 0)};
   transition: opacity 300ms ease;

   @media (prefers-reduced-motion: reduce) {
      transition: opacity 200ms linear;
   }

   /* default: fill/crop frame */
   ${({ $fit }) =>
      $fit !== "intrinsic" &&
      css`
         position: absolute;
         inset: 0;
         width: 100%;
         height: 100%;
         object-fit: cover;
         filter: brightness(0.55);
         transition: all 0.5s ease-in-out;
         will-change: transform, filter;
      `}

   /* intrinsic: image determines width, no letterboxing space */
  ${({ $fit }) =>
      $fit === "intrinsic" &&
      css`
         position: relative;
         display: block;
         height: 100%;
         width: auto;
         object-fit: contain;
         filter: brightness(0.55);
         transition: all 0.5s ease-in-out;
         will-change: transform, filter;
      `}
`;

/** Layer to center loader/placeholder over the image area */
export const LoaderLayer = styled.div`
   position: absolute;
   inset: 0;
   z-index: 2;

   display: grid;
   place-items: center;
`;
