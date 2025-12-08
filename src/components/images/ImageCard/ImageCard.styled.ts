import styled, { css } from "styled-components";
import { up } from "$styles/constants/breakpoints";
import { withAlpha } from "$styles/colors";

/**
 * Outer wrapper. Always block-level so you can drop these in a flex row.
 */
export const CardOuter = styled.div`
   border: 1px solid ${({ theme }) => withAlpha(theme.palette.STARDUST_GRAY, 0.1)};
   border-radius: 8px;
   display: block;
   color: ${({ theme }) => theme.tokens.fg};
`;

/**
 * Acts like Tailwind's `group`. We use this parent for hover selectors.
 */
export const CardInner = styled.div`
   position: relative;
   width: 100%;
`;

/**
 * Frame that controls dimensions and hover transform on the <img />.
 * We support two layouts:
 *  - profile cards ("team" | "person"): fixed 60vh tall cards
 *  - feature cards ("feature"): full width, tall banner (~40rem desktop)
 */
export const ImgFrame = styled.div<{
   $mode: "profile" | "feature";
   $profileSize: "team" | "person";
}>`
   position: relative;
   overflow: hidden;
   border-radius: 0.5rem;

   /* base for profile cards */
   ${({ $mode, $profileSize }) =>
      $mode === "profile" &&
      css`
         width: 80vw;
         height: 60vh;

         ${up("LARGE")} {
            width: ${$profileSize === "team" ? "40vw" : "20vw"};
         }
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

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.55);
      transition: all 0.5s ease-in-out;
      will-change: transform, filter;
   }

   /* hover behavior: darken + slight zoom */
   ${CardInner}:hover & img {
      filter: brightness(0.15);
      transform: scale(1.03);
   }
`;

/**
 * Overlay base: absolutely positioned bottom content.
 * We split styling depending on variant.
 *
 * profile variant:
 *   bottom name + position
 *
 * feature variant:
 *   header/body/CTA block with animated CTA at the bottom edge
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
   pointer-events: none; /* text overlay isn't interactive except CTA wrapper */
`;

export const OverlayProfile = styled.div`
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
      word-break: break-word; /* break really long "words" if needed */
      overflow-wrap: anywhere; /* allow wrapping even in long tokens */
      hyphens: auto; /* let browser insert hyphen if it helps */
   }

   h2 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.h2};
      line-height: 1.15;
      margin: 0 0 0.25rem 0;
      color: ${({ theme }) => theme.tokens.fg};

      /* if you want slightly smaller text in narrow cards: */
      ${up("LARGE")} {
         font-size: ${({ theme }) => theme.fontSizes.h2};
      }
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
 * Original behavior:
 * - absolute bottom
 * - mb-[1rem] -> group-hover:mb-[2rem]
 * - opacity: hidden on lg unless hover
 *
 * We'll replicate:
 *  - mobile: visible always
 *  - large screens: fade in on hover
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

/**
 * Skeleton shimmer overlay for loading state
 */
export const SkeletonOverlay = styled.div`
   position: absolute;
   inset: 0;
   background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.16) 50%,
      rgba(255, 255, 255, 0.08) 100%
   );
   animation: image-sheen 1.2s linear infinite;
   pointer-events: none;

   @keyframes image-sheen {
      0% {
         transform: translateX(-100%);
      }
      100% {
         transform: translateX(100%);
      }
   }
`;

/** Fade-in image (mirrors ImageContent’s BgImage opacity transition) */
export const BgImage = styled.img<{ $visible?: boolean }>`
   position: absolute;
   inset: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;

   opacity: ${({ $visible }) => ($visible ? 1 : 0)};
   transition: opacity 300ms ease;

   @media (prefers-reduced-motion: reduce) {
      transition: opacity 200ms linear;
   }
`;

/** Layer to center loader/placeholder over the image area */
export const LoaderLayer = styled.div`
   position: absolute;
   inset: 0;
   z-index: 2;

   display: grid;
   place-items: center;
`;
