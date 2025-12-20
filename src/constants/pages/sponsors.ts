// src/constants/clients.ts
const SPONSOR_BUCKET = "sponsors-page/";

// URLs for all home page image assets using R2 path
export const SPONSOR_URL = {
   work_with_us: "generic/operations-all.webp",
} as const;

export const SPONSOR_LOGOS = [
   {
      key: "deloitte",
      name: "Deloitte",
      logoSrc: `${SPONSOR_BUCKET}deloitte.webp`,
   },
   {
      key: "ey",
      name: "Ernst & Young (EY)",
      logoSrc: `${SPONSOR_BUCKET}ey.webp`,
   },
] as const;

export type SponsorLogo = (typeof SPONSOR_LOGOS)[number];
export type SponsorKey = SponsorLogo["key"];

export const SPONSOR_LOGOS_BY_KEY: Record<SponsorKey, SponsorLogo> = SPONSOR_LOGOS.reduce(
   (acc, sponsor) => {
      acc[sponsor.key] = sponsor;
      return acc;
   },
   {} as Record<SponsorKey, SponsorLogo>
);
