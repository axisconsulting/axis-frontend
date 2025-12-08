import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const SponsorsListSection = styled.section`
   display: flex;
   flex-direction: column;
   gap: 5rem;

   ${up("LARGE")} {
      gap: 3rem;
   }
`;

// CTA Callout block wrapper
export const CalloutWrapper = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
`;
