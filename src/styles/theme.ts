import { colors, palette, withAlpha } from "./colors";

export const theme = {
   palette,
   colors,
   tokens: {
      bg: colors.background, // page background
      fg: colors.primary, // default text color
      fgMuted: colors.secondary, // subdued text
      border: withAlpha(colors.primary, 0.12),
      surface: withAlpha(colors.primary, 0.04), // cards, panels
      surfaceHover: withAlpha(colors.primary, 0.08),
      link: colors.accent,
      focusRing: withAlpha(colors.accent, 0.55), // outline for a11y
   },
   // you can put radius/spacing/typography here later too
} as const;

export type AppTheme = typeof theme;
