import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const EXAMPLE = styled.section`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr;
   gap: 0.8rem;

   ${up("LARGE")} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   }
`;
