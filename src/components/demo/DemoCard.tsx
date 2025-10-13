// /src/components/Card.tsx
import styled from "styled-components";
import React from "react";

export const Card = styled.div`
   background: var(--color-surface);
   border: 1px solid var(--color-border);
   border-radius: 12px;
   padding: 16px;

   &:hover,
   &:focus {
      background: var(--color-surface-hover);
   }
`;

// Button example
export const Button = styled.button`
   background: ${({ theme }) => theme.colors.accent};
   color: ${({ theme }) => theme.palette.WHITE};
   &:hover,
   &:focus {
      background: ${({ theme }) => theme.colors.accentHover};
   }
`;

// Navbar example
export const Navbar = styled.nav`
   background: var(--color-nav-bg);
   border-bottom: 1px solid var(--color-border);
`;

// Footer text
export const FooterAddress = styled.address`
   color: var(--color-footer-text);
`;
export const DemoCard: React.FC = () => (
   <Card>
      <h2>Demo Card</h2>
      <p>This is a demo card using styled-components.</p>
      <Button>Click Me</Button>
      <Navbar>
         <span>Demo Navbar</span>
      </Navbar>
      <FooterAddress>123 Demo Street, Demo City</FooterAddress>
   </Card>
);
