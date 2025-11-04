import { withAlpha } from "$styles/colors";
import styled from "styled-components";

export const GlossyPlaceholder = styled.div`
   position: absolute;
   inset: 0;
   background: linear-gradient(
      45deg,
      ${({ theme }) => withAlpha(theme.palette.AXIS_DARK_BLUE, 0.08)} 0%,
      ${({ theme }) => withAlpha(theme.palette.WHITE, 0.15)} 50%,
      ${({ theme }) => withAlpha(theme.palette.AXIS_DARK_BLUE, 0.08)} 100%
   );
`;
