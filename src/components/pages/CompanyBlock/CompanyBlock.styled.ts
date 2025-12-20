// src/components/CompanyBlock/CompanyBlock.styled.ts
import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const BlockWrapper = styled.section`
   width: 100%;
`;

export const BlockInner = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 1rem;

   ${up("LARGE")} {
      flex-direction: row;
      align-items: center;
      gap: 2rem;
   }
`;

export const ImageWrapper = styled.div`
   position: relative;
   width: 100%;

   /* Key: make the container shrink/grow smoothly */
   height: clamp(120px, 18vw, 180px);

   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;
   border-radius: 0.75rem;
   background: ${({ theme }) => theme.tokens.bg};
   margin-bottom: 1rem;

   ${up("LARGE")} {
      /* Don’t let image area take half the page on desktop */
      width: min(44%, 520px);
      margin-bottom: 0;
      height: clamp(140px, 10vw, 220px);
   }
`;

export const StyledImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;

   /* Smaller padding on small screens, larger on big screens */
   padding: 0 8px;

   ${up("LARGE")} {
      padding: 0 14px;
   }
`;

export const TextWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   text-align: center;

   ${up("LARGE")} {
      max-width: 52%;
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
