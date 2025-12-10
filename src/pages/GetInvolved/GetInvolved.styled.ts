import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const TestimonialWrapper = styled.div`
   width: 100%;
   height: 375px;
   overflow: hidden;
`;

export const GridSection = styled.section`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr;
   gap: 1.5rem;

   /* Mobile: stacked */
   grid-auto-rows: auto;

   ${up("LARGE")} {
      grid-template-columns: 0.9fr 1.1fr; /* Join our Team a bit skinnier */
      grid-auto-rows: minmax(12rem, auto); /* rows size to content */
      gap: 2rem;
   }
`;

export const JoinTeamItem = styled.div`
   ${up("LARGE")} {
      grid-column: 1 / 2;
      grid-row: 1 / 3; /* spans both rows */
   }
`;

export const OdysseyItem = styled.div`
   ${up("LARGE")} {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
   }
`;

export const FiresideItem = styled.div`
   ${up("LARGE")} {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
   }
`;

// CTA Callout block wrapper
export const CalloutWrapper = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
`;
