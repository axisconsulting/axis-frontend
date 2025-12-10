// src/styles/constants/LoaderLayer.styled.tsx
import styled from "styled-components";

// so Sheen + Placeholder stack correctly
export const LoaderLayer = styled.div`
   position: absolute;
   inset: 0;
   z-index: 2;
   display: flex;
   align-items: center;
   justify-content: center;
`;
