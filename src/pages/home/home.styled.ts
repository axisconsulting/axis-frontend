// home.styled.ts
import styled from "styled-components";
import { up } from "$constants/breakpoints";

export const Container = styled.div`
   /* Tailwind: lg:w-[70%] w-[88%] m-auto py-[5%] flex flex-col gap-[5rem] lg:gap-[10rem] */
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
   /* Tailwind: grid lg:grid-cols-2 gap-[0.8rem] */
   display: grid;
   grid-template-columns: 1fr;
   gap: 0.8rem;

   ${up("LARGE")} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   }
`;

export const StatColumn = styled.div`
   /* Tailwind: grid-rows-3 grid gap-[0.8rem] min-w-fit */
   display: grid;
   grid-auto-rows: 1fr;
   gap: 0.8rem;
   min-width: fit-content;
`;

export const CenterStack = styled.div`
   /* Tailwind: w-[100%] m-auto text-center flex flex-col gap-[1rem] lg:gap-[3rem] */
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
   /* Tailwind: flex flex-col lg:flex-row gap-[1rem] */
   display: flex;
   flex-direction: column;
   gap: 1rem;

   ${up("LARGE")} {
      flex-direction: row;
   }
`;
