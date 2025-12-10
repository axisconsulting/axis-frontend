// src/components/ClientLogoGrid/ClientLogoGrid.styled.tsx
import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const GridWrapper = styled.div`
   width: 100%;
`;

export const LogosGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   gap: 0.75rem;
   width: 100%;

   ${up("MEDIUM")} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
   }

   ${up("LARGE")} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
   }
`;

export const LogoItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.5rem;
`;

export const LogoItemImageWrapper = styled.div`
   position: relative;
   width: 100%;
   aspect-ratio: 3 / 1;
   border-radius: 0.75rem;
   overflow: hidden;
   background: ${({ theme }) => theme.tokens.surface};
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const LogoItemImage = styled.img`
   position: relative;
   z-index: 1;
   max-width: 70%;
   max-height: 70%;
   object-fit: contain;
`;

export const LogoItemLabel = styled.span`
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.tokens.fgMuted};
   text-align: center;
`;
