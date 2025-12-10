import { withAlpha } from "$styles/colors";
import styled from "styled-components";

/* Subtle shimmer for loading state */
export const SheenLoader = styled.div`
   border-radius: 8px;
   position: absolute;
   inset: 0;
   background: linear-gradient(
      45deg,
      ${({ theme }) => withAlpha(theme.palette.AXIS_DARK_BLUE, 0.08)} 0%,
      ${({ theme }) => withAlpha(theme.palette.WHITE, 0.15)} 50%,
      ${({ theme }) => withAlpha(theme.palette.AXIS_DARK_BLUE, 0.08)} 100%
   );
   transform: translateX(-100%);
   animation: sheen-move 1.5s ease-in-out infinite;

   @keyframes sheen-move {
      to {
         transform: translateX(100%);
      }
   }
`;
