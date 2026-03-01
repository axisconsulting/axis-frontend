import styled, { css } from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const PageWrapper = styled.div`
   width: 90%;
   max-height: 100%;
   display: flex;
   flex-direction: column;
   gap: 5rem;

   & > div {
      width: 100%;
   }

   ${up("LARGE")} {
      width: 80%;
      gap: 5rem;
   }
`;

export const RevolveInfoSection = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   padding: 0 5rem;

   h1 {
      margin: 0;
      color: ${({ theme }) => theme.palette.AXIS_BLUE};
   }
`;

export const TeamSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3rem;
`;

export const TeamSectionHeaderRow = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;

   h2 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.h2};
      color: ${({ theme }) => theme.tokens.fg};
      margin: 0;
   }
`;

export const TeamRowOuter = styled.div`
   width: 100%;
   display: flex;
`;

export const ScrollContainer = styled.div<{ $center?: boolean }>`
   width: 100%;

   ${({ $center }) =>
      $center
         ? css`
              overflow-x: visible;
           `
         : css`
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
           `}

   overscroll-behavior-x: contain;
   scrollbar-width: thin;
   scrollbar-color: ${({ theme }) => theme.tokens.border} transparent;

   &::-webkit-scrollbar {
      height: 6px;
   }

   &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.tokens.border};
      border-radius: 3px;
   }
`;

export const CardsTrack = styled.div<{ $center?: boolean }>`
   display: flex;
   flex-direction: row;
   gap: 1rem;
   padding-bottom: 1rem;

   ${({ $center }) =>
      $center
         ? css`
              width: 100%;
              justify-content: center;
              flex-wrap: wrap;
           `
         : css`
              width: max-content;
              justify-content: flex-start;
              flex-wrap: nowrap;
           `}
`;

export const AttendeesLogosSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   width: 100%;
   gap: 2rem;

   h2 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.h2};
      margin: 0;
   }
`;
