import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const TestimonialWrapper = styled.div`
   width: 100%;
   height: 375px;
`;

export const GridSection = styled.section`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr;
   gap: 0.8rem;

   ${up("LARGE")} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   }
`;

export const LinksGrid = styled.section`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr;
   margin-top: 1rem;
   gap: 0.8rem;

   ${up("LARGE")} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   }
`;

// CTA Callout block wrapper
export const CalloutWrapper = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
`;
