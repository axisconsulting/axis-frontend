import styled from "styled-components";

/**
 * Styled wrapper for icons that ensures consistent sizing and coloring.
 *
 * @param size - Optional CSS size string (e.g. "1.5rem", "48px"). Defaults to "1.5rem".
 * @param color - Optional CSS color string. Defaults to "currentColor".
 *
 * @example
 *    <IconWrapper size="48px" color="#888">
 *       <ImageLoading />
 *    </IconWrapper>
 *
 *    <IconWrapper size="128px" color="#fff">
 *       <ImageNotFound />
 *    </IconWrapper>
 */
export const IconWrapper = styled.div<{ size?: string; color?: string }>`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   width: ${({ size }) => size || "1.5rem"};
   height: ${({ size }) => size || "1.5rem"};
   color: ${({ color }) => color || "currentColor"};

   & > svg {
      width: 100%;
      height: 100%;
   }
`;
