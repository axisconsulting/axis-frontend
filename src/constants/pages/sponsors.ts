// src/constants/clients.ts

// URLs for all home page image assets using R2 path
export const SPONSOR_URL = {
   work_with_us: "generic/operations-all.webp",
} as const;

// Sponsor companies (for logo marquee)
const SPONSORS_COMPANY_BUCKET = "sponsors-page/";

export const SPONSORS_COMPANY_LOGOS = [
   {
      key: "deloitte", // monetary sponsor
      name: "Deloitte",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}deloitte.webp`,
      website: "https://www.deloitte.com/",
   },
   {
      key: "ey", // monetary sponsor
      name: "EY",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}ey.webp`,
      website: "https://www.ey.com/",
   },
   {
      key: "black_bond_books",
      name: "Black Bond Books",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}Black-Bond-Books.webp`,
      website: "https://www.blackbondbooks.com/",
   },
   {
      key: "bon_macaron",
      name: "Bon Macaron",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}Bon-Macaron.webp`,
      website: "https://www.bonmacaronpatisserie.com/",
   },
   {
      key: "cinnzeo",
      name: "Cinnzeo",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}Cinnzeo.webp`,
      website: "https://www.cinnzeo.com/",
   },
   {
      key: "forbidden_vancouver",
      name: "Forbidden Vancouver",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}Forbidden-Vancouver.webp`,
      website: "https://forbiddenvancouver.ca/",
   },
   {
      key: "goodbowl",
      name: "Goodbowl",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}Goodbowl.webp`,
      website: "https://www.goodbowl.ca/",
   },
   {
      key: "kernels",
      name: "Kernels Popcorn",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}Kernels.webp`,
      website: "https://www.kernelspopcorn.com/",
   },
   {
      key: "old_spaghetti_factory",
      name: "Old Spaghetti Factory",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}Old-Spaghetti-Factory.webp`,
      website: "https://oldspaghettifactory.ca/",
   },
   {
      key: "sfu_bookstore",
      name: "SFU Bookstore",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}SFU-Bookstore.webp`,
      website: "https://shop.sfu.ca/",
   },
   {
      key: "vancouver_art_gallery",
      name: "Vancouver Art Gallery",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}Vancouver-Art-Gallery.webp`,
      website: "https://www.vanartgallery.bc.ca/",
   },
   {
      key: "viff",
      name: "Vancouver International Film Festival",
      logoSrc: `${SPONSORS_COMPANY_BUCKET}VIFF.webp`,
      website: "https://viff.org/",
   },
] as const;

export type SponsorsCompanyLogo = (typeof SPONSORS_COMPANY_LOGOS)[number];
export type SponsorsCompanyKey = SponsorsCompanyLogo["key"];

export const SPONSORS_COMPANY_LOGOS_BY_KEY: Record<SponsorsCompanyKey, SponsorsCompanyLogo> =
   SPONSORS_COMPANY_LOGOS.reduce(
      (acc, company) => {
         acc[company.key] = company;
         return acc;
      },
      {} as Record<SponsorsCompanyKey, SponsorsCompanyLogo>,
   );
