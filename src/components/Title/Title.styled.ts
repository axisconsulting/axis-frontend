import styled, { css } from "styled-components";
import { BREAKPOINTS } from "$styles/constants/breakpoints";

const up = (key: keyof typeof BREAKPOINTS) => `@media (min-width: ${BREAKPOINTS[key]})`;

export const Wrapper = styled.div`
   display: grid;
   justify-content: center;
   text-align: center;
   width: 100%;
   margin: 20% auto 0;

   ${up("LARGE")} {
      width: 85%;
      margin-top: 5%;
   }
`;

export const Heading = styled.h1`
   margin: 0;
   ${({ theme }) => css`
      font-size: ${theme?.fontSizes?.h1};
      color: ${theme?.tokens?.fg};
   `}
`;

export const HeadingAccent = styled.h1`
   margin: 0;
   ${({ theme }) => css`
      font-size: ${theme?.fontSizes?.h1};
      color: ${theme?.palette?.AXIS_BLUE};
   `}
`;

export const BodyText = styled.p`
   width: 100%;
   margin: 5% auto 0;

   ${up("LARGE")} {
      width: 60%;
   }

   ${({ theme }) => css`
      font-size: ${theme?.fontSizes?.body};
      color: ${theme?.tokens?.fg};
   `}
`;
