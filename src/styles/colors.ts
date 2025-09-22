const AXIS_BLUE = "#0933FF";
const STARLIGHT_WHITE = "#E6E1DB";
const VOID_BLACK = "#010001";
const STARDUST_GRAY = "#59565C";

export const palette = {
   AXIS_BLUE,
   STARLIGHT_WHITE,
   VOID_BLACK,
   STARDUST_GRAY,
} as const;

// Semantic color roles for the app (single default theme for now)
export const colors = {
   primary: STARLIGHT_WHITE, // primary foreground (text on dark bg)
   secondary: STARDUST_GRAY, // muted text, captions
   accent: AXIS_BLUE, // links, buttons, highlights
   background: VOID_BLACK, // page background
} as const;

export type AppColors = typeof colors;

/** Add alpha to a hex like #RRGGBB → rgba(r,g,b,a) */
export function withAlpha(hex: string, alpha: number) {
   const h = hex.replace("#", "");
   const bigint = parseInt(
      h.length === 3
         ? h
              .split("")
              .map((c) => c + c)
              .join("")
         : h,
      16
   );
   const r = (bigint >> 16) & 255;
   const g = (bigint >> 8) & 255;
   const b = bigint & 255;
   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Colors from old site (not used)
// "my-blue": "#366CFF",
// "my-light-blue": "#366CFF",
// "my-gray": "#939393",
// "my-light-gray": "#1A1A1A",
