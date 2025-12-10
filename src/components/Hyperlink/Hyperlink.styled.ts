// hyperlink.styled.ts
import styled from "styled-components";

export const HyperlinkWrapper = styled.h6`
   display: flex;
   flex-direction: row;
   align-items: center;
   width: fit-content;
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover,
   &:focus ${"" /* nested hover below ensures arrow animates */} {
      a {
         color: ${({ theme }) => theme.tokens.linkHover};
      }

      div {
         width: 1rem;
         margin-top: 0;
         color: ${({ theme }) => theme.tokens.linkHover};
      }
   }
`;

export const StyledAnchor = styled.a`
   text-decoration: none;
   color: ${({ theme }) => theme.tokens.link};
   font-weight: 500;
   transition: color 0.3s ease;
`;

export const Arrow = styled.div`
   display: flex;
   align-items: center;
   margin-left: 0.25rem;
   width: 0rem;
   overflow: hidden;
   transition: all 0.65s ease;
   margin-top: 0.25rem;
   color: ${({ theme }) => theme.tokens.link};
   svg {
      width: 1rem;
      height: 1rem;
   }
`;
