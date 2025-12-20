// src/constants/clients.ts
const CLIENT_BUCKET = "clients-page/";

// URLs for all home page image assets using R2 path
export const CLIENT_URL = {
   work_with_us: "generic/consultants-all.webp",
} as const;

export const CLIENT_LOGOS = [
   {
      key: "ark",
      name: "Ark Renewable Energy",
      logoSrc: `${CLIENT_BUCKET}ark_renewable_energy.webp`,
      website: "https://www.arkrenewable.ca/",
   },
   {
      key: "bccenter",
      name: "BC Center for Ability",
      logoSrc: `${CLIENT_BUCKET}bc_center_for_ability.webp`,
      website: "https://www.bc-cfa.org/",
   },
   {
      key: "csro",
      name: "Canadian American Spinal Research Organization",
      logoSrc: `${CLIENT_BUCKET}csro.webp`,
      website: "https://www.csro.com/",
   },
   {
      key: "cil",
      name: "Civic Innovation Lab",
      logoSrc: `${CLIENT_BUCKET}civic-innovation-lab.webp`,
      website: "https://civicinnovationlab.ca/",
   },
   {
      key: "finningcat",
      name: "Finning CAT",
      logoSrc: `${CLIENT_BUCKET}finning_cat.webp`,
      website: "https://www.finning.com/",
   },
   {
      key: "inherent",
      name: "Inherent",
      logoSrc: `${CLIENT_BUCKET}inherent.webp`,
      website: "https://www.instagram.com/inherentdiamonds/",
   },
   {
      key: "koenig",
      name: "Koenig Childhood Cancer Foundation",
      logoSrc: `${CLIENT_BUCKET}koenig-childhood-cancer.webp`,
      website: "https://thekccf.org/",
   },
   {
      key: "rcbc",
      name: "Recycling Council of British Columbia",
      logoSrc: `${CLIENT_BUCKET}rcbc.webp`,
      website: "https://www.rcbc.ca/",
   },
   {
      key: "sasquatch",
      name: "Sasquatch Mountain Resort",
      logoSrc: `${CLIENT_BUCKET}sasquatch-mtn-resort.webp`,
      website: "https://sasquatchmountain.ca/",
   },
   {
      key: "science_alive",
      name: "Science Alive / SFU Applied Sciences",
      logoSrc: `${CLIENT_BUCKET}science-alive-sfu-applied-sciences.webp`,
      website: "https://sciencealive.ca/",
   },
   {
      key: "sfu_olc",
      name: "SFU Our Learning Community (OLC)",
      logoSrc: `${CLIENT_BUCKET}sfu-olc.webp`,
      website: "https://www.instagram.com/sfuolc",
   },
   {
      key: "share_reuse_repair",
      name: "Share Reuse Repair Initiative",
      logoSrc: `${CLIENT_BUCKET}share-reuse-repair.webp`,
      website: "https://www.sharereuserepair.org/",
   },
   {
      key: "soteria120",
      name: "SOTERIA120",
      logoSrc: `${CLIENT_BUCKET}soteria120.webp`,
      website: "https://soteria120.com/",
   },
   {
      key: "sunshine_foundation",
      name: "Sunshine Foundation",
      logoSrc: `${CLIENT_BUCKET}sunshine-foundation.webp`,
      website: "https://sunshinefoundation.org/",
   },
   {
      key: "teck",
      name: "Teck Resources",
      logoSrc: `${CLIENT_BUCKET}teck.webp`,
      website: "https://www.teck.com/",
   },
   {
      key: "vahs",
      name: "Vancouver Aboriginal Health Society",
      logoSrc: `${CLIENT_BUCKET}vancouver-aboiriginal-health.webp`,
      website: "https://www.vahs.life/",
   },
   {
      key: "visier",
      name: "Visier",
      logoSrc: `${CLIENT_BUCKET}visier.webp`,
      website: "https://www.visier.com/",
   },
   {
      key: "wck",
      name: "West Coast Kids Cancer Foundation (WCK)",
      logoSrc: `${CLIENT_BUCKET}wck.webp`,
      website: "https://wckfoundation.ca/",
   },
   {
      key: "wooyourboo",
      name: "WOOYOURBOO",
      logoSrc: `${CLIENT_BUCKET}wooyourboo.webp`,
      website: "https://www.wooyourboo.com/",
   },
] as const;

export type ClientLogo = (typeof CLIENT_LOGOS)[number];
export type ClientKey = ClientLogo["key"];

export const CLIENT_LOGOS_BY_KEY: Record<ClientKey, ClientLogo> = CLIENT_LOGOS.reduce(
   (acc, client) => {
      acc[client.key] = client;
      return acc;
   },
   {} as Record<ClientKey, ClientLogo>
);

// Featured clients within Clients page
export const FEATURED_CLIENT_KEYS: ClientKey[] = ["ark", "teck", "rcbc", "cil"];
