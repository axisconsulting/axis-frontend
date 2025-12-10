import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const Wrapper = styled.section`
   width: 100%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   text-align: center;

   ${up("LARGE")} {
      width: 50%;
   }
`;

export const Quote = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.body};
   line-height: 1.7;
   margin: 0;
   color: ${({ theme }) => theme.tokens.fg};
`;

export const AuthorBlock = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.25rem;
`;

export const AuthorName = styled.p`
   margin: 0;
   font-weight: 600;
   color: ${({ theme }) => theme.tokens.fg};
`;

export const AuthorMeta = styled.p`
   margin: 0;
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.tokens.fgMuted};
`;
