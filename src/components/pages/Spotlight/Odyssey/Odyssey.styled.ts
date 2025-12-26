import { up } from "$styles/constants/breakpoints";
import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1.5rem;
   margin-top: -2rem;

   h1 {
      font-size: ${({ theme }) => theme.fontSizes.h2};
      margin-bottom: 1rem;
   }
`;

export const SmallCardRow = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: 1rem;

   ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
   }

   ${up("MEDIUM")} {
      flex-direction: row;
   }
`;

export const CalloutWrapper = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
`;
