import { colors, palette } from "./colors";
import { withAlpha } from "./colors";

export const theme = {
   palette,
   colors,
   fonts: {
      body: "var(--font-body)",
      heading: "var(--font-heading)",
   },
   fontSizes: {
      h1: "clamp(2rem, 3vw + 1rem, 3rem)",
      h2: "clamp(1.5rem, 2.2vw + .8rem, 2.25rem)",
      h3: "clamp(1.25rem, 1.6vw + .6rem, 1.75rem)",
      body: "1rem",
      small: ".9rem",
   },
   tokens: {
      bg: colors.background,
      fg: colors.text,
      fgMuted: colors.textMuted,
      link: colors.accent,
      linkHover: colors.accentHover,
      border: withAlpha(colors.text, 0.12),
      surface: withAlpha(colors.text, 0.05),
      surfaceHover: withAlpha(colors.text, 0.08),

      // optional app-specific tokens:
      navBg: "#1A1A1A", // your old "my-light-gray" (navbar background)
      footerText: "#939393", // your old "my-gray" for footer address
   },
} as const;

export type AppTheme = typeof theme;
