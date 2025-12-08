// src/components/ClientBlock/ClientBlock.styled.tsx
import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const BlockWrapper = styled.section`
   width: 100%;
`;

export const BlockInner = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   ${up("LARGE")} {
      flex-direction: row;
   }
`;

export const ImageWrapper = styled.div`
   position: relative; /* Required for GlossyPlaceholder overlay */
   width: 100%;
   max-height: 20vh;
   min-height: 180px;
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;
   border-radius: 0.75rem;
   background: ${({ theme }) => theme.tokens.surface};
   margin-bottom: 1rem;

   ${up("LARGE")} {
      max-width: 50%;
      margin-bottom: 0rem;
   }
`;

export const StyledImage = styled.img`
   width: fit-content;
   object-fit: contain;
`;

export const TextWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   text-align: center;

   ${up("LARGE")} {
      max-width: 40%;
      text-align: left;
   }
`;

export const Title = styled.h3`
   font-family: ${({ theme }) => theme.fonts.heading};
   font-size: ${({ theme }) => theme.fontSizes.h3};
   margin: 0;
`;

export const Body = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.body};
   color: ${({ theme }) => theme.tokens.fgMuted};
   margin: 0;
   line-height: 1.6;
`;
