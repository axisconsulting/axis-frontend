import "styled-components";
import type { AppTheme } from "./theme";

// makes theme fully typed in styled-components
declare module "styled-components" {
   // eslint-disable-next-line @typescript-eslint/no-empty-object-type
   export interface DefaultTheme extends AppTheme {}
}
