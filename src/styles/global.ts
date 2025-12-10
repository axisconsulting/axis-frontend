import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-heading: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    --font-body: "Manrope", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    --color-bg:            ${({ theme }) => theme.tokens.bg};
    --color-fg:            ${({ theme }) => theme.tokens.fg};
    --color-fg-muted:      ${({ theme }) => theme.tokens.fgMuted};
    --color-link:          ${({ theme }) => theme.tokens.link};
    --color-link-hover:    ${({ theme }) => theme.tokens.linkHover};
    --color-border:        ${({ theme }) => theme.tokens.border};
    --color-surface:       ${({ theme }) => theme.tokens.surface};
    --color-surface-hover: ${({ theme }) => theme.tokens.surfaceHover};
    --color-nav-bg:        ${({ theme }) => theme.tokens.navBg};
    --color-footer-text:   ${({ theme }) => theme.tokens.footerText};
  }

  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }

  body {
    margin: 0;
    background: var(--color-bg);
    color: var(--color-fg);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2 {
    font-family: var(--font-heading);
    line-height: 1.15;
    margin: 0 0 .5em;
  }

  a { color: var(--color-link); }
  a:hover { color: var(--color-link-hover); }
`;
