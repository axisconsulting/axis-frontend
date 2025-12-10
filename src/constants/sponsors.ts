// src/constants/clients.ts
import { TEMP_URL } from "$constants/utils";

export const SPONSOR_LOGOS = [
   {
      key: "ey",
      name: "Ernst & Young (EY)",
      logoSrc: TEMP_URL,
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
