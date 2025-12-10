import type { FC } from "react";
import { Wrapper, Quote, AuthorBlock, AuthorName, AuthorMeta } from "./Testimonial.styled";

type TestimonialProps = {
   quote: string;
   author: string;
   role: string;
   className?: string;
};

const Testimonial: FC<TestimonialProps> = ({ quote, author, role, className }) => {
   return (
      <Wrapper className={className}>
         <Quote>“{quote}”</Quote>

         <AuthorBlock>
            <AuthorName>{author}</AuthorName>
            <AuthorMeta>{role}</AuthorMeta>
         </AuthorBlock>
      </Wrapper>
   );
};

export default Testimonial;
