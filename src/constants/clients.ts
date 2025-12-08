// src/constants/clients.ts
import { TEMP_URL } from "$constants/utils";

export const CLIENT_LOGOS = [
   {
      key: "ark",
      name: "Ark Renewable Energy",
      logoSrc: TEMP_URL,
      website: "https://www.arkrenewable.ca/",
   },
   {
      key: "teck",
      name: "Teck Resources",
      logoSrc: TEMP_URL,
      website: "https://www.teck.com/",
   },
   {
      key: "rcbc",
      name: "Recycling Council of British Columbia",
      logoSrc: TEMP_URL,
      website: "https://www.rcbc.ca/",
   },
   {
      key: "cil",
      name: "Civic Innovation Lab",
      logoSrc: TEMP_URL,
      website: "https://civicinnovationlab.ca/",
   },
   {
      key: "sasquatch",
      name: "Sasquatch Mountain Resort",
      logoSrc: TEMP_URL,
      website: "https://sasquatchmountain.ca/",
   },
   {
      key: "sfu_olc",
      name: "SFU Our Learning Community (OLC)",
      logoSrc: TEMP_URL,
      website: "https://www.instagram.com/sfuolc",
   },
   {
      key: "sunshine_foundation",
      name: "Sunshine Foundation",
      logoSrc: TEMP_URL,
      website: "https://sunshinefoundation.org/",
   },
   {
      key: "sfu_fas",
      name: "SFU Faculty of Applied Sciences",
      logoSrc: TEMP_URL,
      website: "https://www.sfu.ca/fas.html",
   },
   {
      key: "science_alive",
      name: "Science Alive",
      logoSrc: TEMP_URL,
      website: "https://sciencealive.ca/",
   },
   {
      key: "soteria120",
      name: "SOTERIA120",
      logoSrc: TEMP_URL,
      website: "https://soteria120.com/",
   },
   {
      key: "share_reuse_repair",
      name: "Share Reuse Repair Initiative",
      logoSrc: TEMP_URL,
      website: "https://www.sharereuserepair.org/",
   },
   {
      key: "visier",
      name: "Visier",
      logoSrc: TEMP_URL,
      website: "https://www.visier.com/",
   },
   {
      key: "wck",
      name: "West Coast Kids Cancer Foundation (WCK)",
      logoSrc: TEMP_URL,
      website: "https://wckfoundation.ca/",
   },
   {
      key: "vahs",
      name: "Vancouver Aboriginal Health Society",
      logoSrc: TEMP_URL,
      website: "https://www.vahs.life/",
   },
   {
      key: "wooyourboo",
      name: "WOOYOURBOO",
      logoSrc: TEMP_URL,
      website: "https://www.wooyourboo.com/",
   },
   {
      key: "koenig",
      name: "Koenig Childhood Cancer Foundation",
      logoSrc: TEMP_URL,
      website: "https://thekccf.org/",
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
