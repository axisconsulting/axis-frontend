import "styled-components";
import type { AppTheme } from "./theme";

// makes theme fully typed in styled-components
declare module "styled-components" {
   export type DefaultTheme = AppTheme;
}

// declare module "styled-components" {
//    export interface DefaultTheme extends AppTheme {}
// }
