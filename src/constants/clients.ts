// src/constants/clients.ts
import { TEMP_URL } from "$constants/utils";

export const CLIENT_LOGOS = [
   {
      key: "ark",
      name: "Ark Renewable Energy",
      logoSrc: TEMP_URL,
   },
   {
      key: "teck",
      name: "Teck Resources",
      logoSrc: TEMP_URL,
   },
   {
      key: "rcbc",
      name: "Recycling Council of British Columbia",
      logoSrc: TEMP_URL,
   },
   {
      key: "cil",
      name: "Civic Innovation Lab",
      logoSrc: TEMP_URL,
   },
   {
      key: "sasquatch",
      name: "Sasquatch Mountain Resort",
      logoSrc: TEMP_URL,
   },
   {
      key: "sfu_olc",
      name: "SFU Our Learning Community (OLC)",
      logoSrc: TEMP_URL,
   },
   {
      key: "sunshine_dreams",
      name: "Sunshine (Dreams for Kids Since 1967)",
      logoSrc: TEMP_URL,
   },
   {
      key: "sfu_fas",
      name: "SFU Faculty of Applied Sciences",
      logoSrc: TEMP_URL,
   },
   {
      key: "science_alive",
      name: "Science Alive",
      logoSrc: TEMP_URL,
   },
   {
      key: "soteria120",
      name: "SOTERIA120",
      logoSrc: TEMP_URL,
   },
   {
      key: "share_reuse_repair",
      name: "Share Reuse Repair Initiative",
      logoSrc: TEMP_URL,
   },
   {
      key: "visier",
      name: "Visier",
      logoSrc: TEMP_URL,
   },
   {
      key: "wck",
      name: "West Coast Kids Cancer Foundation (WCK)",
      logoSrc: TEMP_URL,
   },
   {
      key: "vahs",
      name: "Vancouver Aboriginal Health Society",
      logoSrc: TEMP_URL,
   },
   {
      key: "wooyourboo",
      name: "WOOYOURBOO",
      logoSrc: TEMP_URL,
   },
   {
      key: "koenig",
      name: "Koenig Childhood Cancer Foundation",
      logoSrc: TEMP_URL,
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
