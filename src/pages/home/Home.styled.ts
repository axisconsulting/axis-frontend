// home.styled.ts
import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const Container = styled.div`
   width: 90%;
   margin: 0 auto;
   padding: 5% 0;
   display: flex;
   flex-direction: column;
   gap: 5rem;

   ${up("LARGE")} {
      width: 80%;
      gap: 10rem;
   }
`;

export const StatsGrid = styled.section`
   display: grid;
   grid-template-columns: 1fr;
   gap: 0.8rem;

   ${up("LARGE")} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   }
`;

export const StatColumn = styled.div`
   display: grid;
   grid-auto-rows: 1fr;
   gap: 0.8rem;
   min-width: fit-content;
`;

export const SpotlightSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;

   h3 {
      margin: 0;
      color: ${({ theme }) => theme.palette.AXIS_BLUE};
   }
`;

export const CenterStack = styled.section`
   width: 100%;
   margin: 0 auto;
   text-align: center;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   ${up("LARGE")} {
      gap: 3rem;
   }
`;

export const EngagementRow = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;

   ${up("LARGE")} {
      flex-direction: row;
   }
`;
