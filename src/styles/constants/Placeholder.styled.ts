// $styles/constants/Placeholder.styled.tsx
import { withAlpha } from "$styles/colors";
import styled from "styled-components";

export const GlossyPlaceholder = styled.div<{
   showNotFound?: boolean;
   label?: string; // custom text (altText / company name)
}>`
   position: absolute;
   inset: 0;
   background: linear-gradient(
      45deg,
      ${({ theme }) => withAlpha(theme.palette.AXIS_DARK_BLUE, 0.08)} 0%,
      ${({ theme }) => withAlpha(theme.palette.WHITE, 0.15)} 50%,
      ${({ theme }) => withAlpha(theme.palette.AXIS_DARK_BLUE, 0.08)} 100%
   );
   display: flex;
   align-items: center;
   justify-content: center;
   pointer-events: none;
   text-align: center;
   padding: 1rem;

   &::after {
      content: ${({ showNotFound, label }) =>
         showNotFound ? `"${label ?? "Image not found"}"` : '""'};
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.small};
      color: ${({ theme }) => withAlpha(theme.colors.text, 0.65)};
      letter-spacing: 0.04em;
      line-height: 1.3;
   }
`;
