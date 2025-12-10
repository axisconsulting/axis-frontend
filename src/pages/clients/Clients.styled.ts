// src/pages/Clients/Clients.styled.tsx
import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const ClientsListSection = styled.section`
   display: flex;
   flex-direction: column;
   gap: 5rem;

   ${up("LARGE")} {
      gap: 3rem;
   }
`;

export const ClientsLogosSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   width: 100%;
   gap: 2rem;

   h3 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.h3};
      margin: 0;
   }
`;

// CTA Callout block wrapper
export const CalloutWrapper = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
`;
