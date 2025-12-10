import React from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   /** Visual style of the button */
   variant?: "primary" | "secondary" | "ghost";
   /** Size modifier */
   size?: "sm" | "md" | "lg";
   /** Disable elevation/shadow */
   flat?: boolean;
}

const Button: React.FC<ButtonProps> = ({
   children,
   variant = "primary",
   size = "md",
   flat = false,
   ...rest
}) => {
   return (
      <StyledButton variant={variant} size={size} flat={flat} {...rest}>
         {children}
      </StyledButton>
   );
};

export default Button;
