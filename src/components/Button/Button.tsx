import React from "react";
import { StyledButton } from "./Button.styled";
import { Link } from "react-router-dom";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   clickTo?: string;
   variant?: "primary" | "secondary" | "ghost";
   size?: "sm" | "md" | "lg";
   flat?: boolean;
}

const Button: React.FC<ButtonProps> = ({
   children,
   clickTo,
   variant = "primary",
   size = "md",
   flat = false,
   ...rest
}) => {
   // If clickTo exists, render Link styled as button
   if (clickTo) {
      return (
         <StyledButton as={Link} to={clickTo} variant={variant} size={size} flat={flat}>
            {children}
         </StyledButton>
      );
   }

   // Otherwise render normal button
   return (
      <StyledButton variant={variant} size={size} flat={flat} {...rest}>
         {children}
      </StyledButton>
   );
};

export default Button;
