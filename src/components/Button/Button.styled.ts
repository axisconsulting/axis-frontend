import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
   variant: "primary" | "secondary" | "ghost";
   size: "sm" | "md" | "lg";
   flat: boolean;
}>`
   border: none;
   border-radius: 50px;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.2s ease;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   white-space: nowrap;

   ${({ size }) => {
      switch (size) {
         case "sm":
            return css`
               font-size: 0.875rem;
               padding: 0.5rem 1rem;
            `;
         case "lg":
            return css`
               font-size: 1.1rem;
               padding: 0.9rem 1.7rem;
            `;
         default:
            return css`
               font-size: 1rem;
               padding: 0.9rem 1.5rem;
            `;
      }
   }}

   ${({ theme, variant }) => {
      const { tokens } = theme;
      switch (variant) {
         case "secondary":
            return css`
               background: ${tokens.surface};
               color: ${tokens.fg};
               border: 1px solid ${tokens.border};
               &:hover {
                  background: ${tokens.surfaceHover};
               }
            `;
         case "ghost":
            return css`
               background: transparent;
               color: ${tokens.link};
               border: 1px solid transparent;
               &:hover {
                  color: ${tokens.linkHover};
                  background: rgba(255, 255, 255, 0.05);
               }
            `;
         default:
            // primary
            return css`
               background: ${tokens.link};
               color: ${tokens.fg};
               &:hover {
                  background: ${tokens.linkHover};
               }
            `;
      }
   }}

  ${({ flat }) =>
      flat &&
      css`
         box-shadow: none;
      `}
`;
