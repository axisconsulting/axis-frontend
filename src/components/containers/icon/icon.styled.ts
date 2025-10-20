import styled, { css } from "styled-components";

export const Container = styled.div`
   display: flex;
   width: 100%;
`;

export const ClickableWrapper = styled.a`
   display: flex;
   width: 100%;
   text-decoration: none;
`;

export const Inner = styled.div<{ clickable?: boolean }>`
   display: flex;
   width: 100%;
   align-items: center;
   gap: 8%;
   padding: 3% 5%;
   border-radius: 0.375rem;
   background: ${({ theme }) => theme.tokens.surface};
   cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
   transition: background 0.15s ease;

   ${({ clickable, theme }) =>
      clickable &&
      css`
         &:hover {
            background: ${theme.tokens.surfaceHover};
         }
      `}
`;

export const IconWrapper = styled.div`
   width: 5vh;
   display: flex;
   align-items: center;
   justify-content: center;

   svg {
      color: ${({ theme }) => theme.tokens.link};
   }
`;

export const TextEl = styled.h3`
   color: ${({ theme }) => theme.tokens.fg};
   font-weight: 600;
   margin: 0;
`;
