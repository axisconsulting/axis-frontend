import styled from "styled-components";

export const H1 = styled.h1`
   font-family: ${({ theme }) => theme.fonts.heading};
   font-size: ${({ theme }) => theme.fontSizes.h1};
`;

export const Text = styled.p`
   font-family: ${({ theme }) => theme.fonts.body};
   font-size: ${({ theme }) => theme.fontSizes.body};
`;

export const FontDemo: React.FC = () => (
   <div>
      <H1>Heading Example</H1>
      <Text>
         This is a sample paragraph using the Text styled component. It demonstrates the body font
         style.
      </Text>
   </div>
);
