import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const SectionWrapper = styled.section`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   width: 100%;
`;

export const SectionHeading = styled.h2`
   margin: 0 0 2rem;
   text-align: center;
   font-family: ${({ theme }) => theme.fonts.heading};
   font-size: ${({ theme }) => theme.fontSizes.h2};
`;

export const FAQList = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.75rem;

   ${up("LARGE")} {
      gap: 1rem;
   }
`;

export const FAQItemWrapper = styled.article`
   border-radius: 0.5rem;
   border: 1px solid ${({ theme }) => theme.tokens.border};
   background: ${({ theme }) => theme.tokens.navBg};
   overflow: hidden;
`;

export const FAQToggleButton = styled.button`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;

   padding: 1rem 1.25rem;
   background: transparent;
   border: none;
   cursor: pointer;

   color: ${({ theme }) => theme.tokens.fg};
   font-family: ${({ theme }) => theme.fonts.body};

   ${up("MEDIUM")} {
      padding: 1.1rem 1.5rem;
   }

   &:hover {
      background: ${({ theme }) => theme.tokens.surfaceHover};
   }
`;

export const FAQQuestion = styled.span`
   font-weight: 600;
   font-family: ${({ theme }) => theme.fonts.heading};
   font-size: ${({ theme }) => theme.fontSizes.body};
   text-align: left;
`;

export const FAQIcon = styled.span<{ $open: boolean }>`
   flex-shrink: 0;
   width: 1.5rem;
   height: 1.5rem;
   border-radius: 999px;
   border: 1px solid ${({ theme }) => theme.tokens.border};
   display: inline-flex;
   align-items: center;
   justify-content: center;
   font-size: 1.1rem;
   line-height: 1;
   transition: background 0.2s ease, transform 0.2s ease;

   ${({ $open, theme }) =>
      $open &&
      `
      background: ${theme.tokens.surfaceHover};
      transform: rotate(90deg);
   `}
`;

export const FAQAnswerWrapper = styled.div<{ $open: boolean }>`
   max-height: ${({ $open }) => ($open ? "500px" : "0")};
   overflow: hidden;
   transition: max-height 0.25s ease-out;
   border-top: 1px solid ${({ theme }) => theme.tokens.border};
`;

export const FAQAnswerText = styled.p`
   margin: 0;
   padding: 0.75rem 1.25rem 1.1rem;
   font-size: ${({ theme }) => theme.fontSizes.body};
   color: ${({ theme }) => theme.tokens.fgMuted};
   line-height: 1.6;

   ${up("MEDIUM")} {
      padding: 0.9rem 1.5rem 1.25rem;
   }
`;
