import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const PageWrapper = styled.main`
   width: 85%;
   max-height: 100%;
   margin: 5% auto 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 5rem;

   ${up("LARGE")} {
      width: 70%;
      gap: 10rem;
   }
`;
