import styled, { keyframes } from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const CarouselWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.5rem;

   /* IMPORTANT: needs a height to have a "bottom" */
   height: 100%;

   ${up("LARGE")} {
      gap: 2rem;
   }
`;

export const CarouselInner = styled.div`
   /*  Push content to the bottom of container */
   margin-top: auto;
   width: 100%;
   display: flex;
   justify-content: center;
`;

/* Slide animations */
const slideInFromRight = keyframes`
   from {
      opacity: 0;
      transform: translateX(24px);
   }
   to {
      opacity: 1;
      transform: translateX(0);
   }
`;

const slideInFromLeft = keyframes`
   from {
      opacity: 0;
      transform: translateX(-24px);
   }
   to {
      opacity: 1;
      transform: translateX(0);
   }
`;

export const SlideContainer = styled.div<{ $direction: "left" | "right" }>`
   width: 100%;
   display: flex;
   justify-content: center;
   animation: ${({ $direction }) => ($direction === "right" ? slideInFromRight : slideInFromLeft)}
      1s ease-out;
`;

export const Controls = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
`;

export const ControlsRow = styled.div`
   display: flex;
   gap: 1.5rem;
   align-items: center;
`;

export const NavButton = styled.button`
   border: 1px solid ${({ theme }) => theme.tokens.border};
   background: ${({ theme }) => theme.tokens.surface};
   color: ${({ theme }) => theme.tokens.fg};
   border-radius: 999px;
   width: 2.25rem;
   height: 2.25rem;
   font-size: 1.5rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: background 0.15s ease, transform 0.15s ease;

   &:hover {
      background: ${({ theme }) => theme.tokens.surfaceHover};
      transform: translateY(-1px);
   }

   &:active {
      transform: translateY(0);
   }
`;

export const DotsRow = styled.div`
   display: flex;
   gap: 0.5rem;
   align-items: center;
   justify-content: center;
`;

export const Dot = styled.button<{ $active: boolean }>`
   width: 8px;
   height: 8px;
   border-radius: 999px;
   border: none;
   padding: 0;
   cursor: pointer;
   background: ${({ theme, $active }) => ($active ? theme.tokens.fg : theme.tokens.surface)};
   opacity: ${({ $active }) => ($active ? 1 : 0.6)};
   transition: background 0.15s ease, opacity 0.15s ease;

   &:hover {
      opacity: 1;
   }
`;
