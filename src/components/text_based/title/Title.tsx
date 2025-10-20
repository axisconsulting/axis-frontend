import React from "react";
import { Wrapper, Heading, HeadingAccent, BodyText } from "./title.styled";

export interface TitleProps {
   Header: string;
   Header2?: string;
   Body: string;
   className?: string;
}

const Title: React.FC<TitleProps> = ({ Header, Header2, Body, className }) => {
   return (
      <Wrapper
         // data-aos="fade-up"
         className={className}>
         <Heading>{Header}</Heading>
         {Header2 && <HeadingAccent>{Header2}</HeadingAccent>}
         <BodyText>{Body}</BodyText>
      </Wrapper>
   );
};

export default Title;
