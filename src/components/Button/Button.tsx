import React from "react";
import { StyledButton } from "./Button.styled";
import { Link } from "react-router-dom";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   clickTo?: string;
   variant?: "primary" | "secondary" | "ghost";
   size?: "sm" | "md" | "lg";
   flat?: boolean;
   openInNewTab?: boolean;
}

const Button: React.FC<ButtonProps> = ({
   children,
   clickTo,
   variant = "primary",
   size = "md",
   flat = false,
   disabled,
   openInNewTab = false,
   ...rest
}) => {
   if (clickTo && !disabled) {

      const isExternal = clickTo.startsWith("http") || clickTo.startsWith("mailto:");

      if (isExternal || openInNewTab) {

         const ExternalLinkButton = StyledButton as React.ElementType;

         return (
            <ExternalLinkButton as={"a"} href={clickTo} target={openInNewTab ? "_blank" : undefined} rel={openInNewTab ? "noopener noreferrer" : ""} variant={variant} size={size} flat={flat}>
               {children}
            </ExternalLinkButton>
         );
      }

      return (
         <StyledButton as={Link} to={clickTo} variant={variant} size={size} flat={flat}>
            {children}
         </StyledButton>
      );
   }

   return (
      <StyledButton variant={variant} size={size} flat={flat} disabled={disabled} {...rest}>
         {children}
      </StyledButton>
   );
};

export default Button;
