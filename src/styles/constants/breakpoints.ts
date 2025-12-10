export const BREAKPOINTS = {
   EXTRA_SMALL: "360px",
   SMALL: "640px",
   MEDIUM: "768px",
   LARGE: "1024px",
   EXTRA_LARGE: "1280px",
} as const;

export type BpKey = keyof typeof BREAKPOINTS;

/** Usage: ${up("LARGE")} { ... } */
export const up = (key: BpKey) => `@media (min-width: ${BREAKPOINTS[key]})`;

/** Usage: ${down("SMALL")} { ... } */
export const down = (key: BpKey) => `@media (max-width: ${BREAKPOINTS[key]})`;
