import React from "react";
import { Container, Inner, IconWrapper, TextEl, ClickableWrapper } from "./IconContainer.styled";

export interface IconContainerProps {
   Icon: React.ElementType;
   Text: string;
   clickTo?: string;
}

const IconContainer: React.FC<IconContainerProps> = ({ Icon, Text, clickTo = "" }) => {
   const isClickable = clickTo.trim() !== "";

   const content = (
      <Inner clickable={isClickable}>
         <IconWrapper>
            <Icon size="70%" />
         </IconWrapper>
         <TextEl>{Text}</TextEl>
      </Inner>
   );

   return isClickable ? (
      <ClickableWrapper href={clickTo} target="_blank" rel="noopener noreferrer">
         {content}
      </ClickableWrapper>
   ) : (
      <Container>{content}</Container>
   );
};

export default IconContainer;
