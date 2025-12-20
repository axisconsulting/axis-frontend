import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const Container = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   gap: 1.6rem;

   ${up("LARGE")} {
      flex-direction: row;
   }
`;

export const StatsGrid = styled.section`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr;
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
