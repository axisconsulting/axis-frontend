export const palette = {
   AXIS_DARK_BLUE: "#0933FF",
   AXIS_BLUE: "#366CFF",
   STARLIGHT_WHITE: "#E6E1DB",
   WHITE: "#FFFFFF",
   STARDUST_GRAY: "#59565C",
   BACKGROUND_DARK: "#151515",
} as const;

// Semantic roles (single default theme for now)
export const colors = {
   background: palette.BACKGROUND_DARK,
   text: palette.WHITE, // or STARLIGHT_WHITE if you want warmer text
   textMuted: palette.STARLIGHT_WHITE,
   accent: palette.AXIS_BLUE, // main action/link color
   accentHover: palette.AXIS_DARK_BLUE, // hover/active state
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
