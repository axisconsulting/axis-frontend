import { HIRING_CONFIG, EVENT_CONFIG } from "./config";

const BASE_URL = window.location.origin; // Get the base URL of the current site

// TODO: Placeholder link to be replaced with actual URLs when available
const REPLACE_WITH_VALID_LINK = `${BASE_URL}/notfound`;

export const SOCIAL_LINKS = {
   LINKEDIN: "https://www.linkedin.com/company/sfuaxisconsulting/",
   INSTAGRAM: "https://www.instagram.com/sfuaxisconsulting/",
   FACEBOOK: "https://www.facebook.com/SFUAxisConsulting/",
} as const;

export const AXIS_LINKS = {
   DOMAIN: "https://www.sfuaxisconsulting.com/",
   EMAIL: "axismd@sfu.ca",
   IMPACT_REPORT:
      "https://1sfu-my.sharepoint.com/:b:/g/personal/axismd_sfu_ca/IQC7US3vtb6zToQ_eT9aSqvuAW757xMmeZET4QIZfEv0BqE?e=66E96H",
   CONSULTING_101:
      "https://1sfu-my.sharepoint.com/:b:/g/personal/axismd_sfu_ca/IQDKyC4rC6qkQIhh0T28AvMhAeYTYwqXFWUqJMiADCzKNEk?e=xmTsld",
   MAILING_LIST: "https://forms.office.com/r/vQxSPj9Sxf",
} as const;

export const SNAPSHOT_LINKS = {
   OIL_AND_GAS_REPORT:
      "https://1sfu-my.sharepoint.com/:b:/g/personal/axismd_sfu_ca/IQC75jigPxCdS6ciAyhYxGGeAZqyLBJ4-j-O65ZvRlxGN-o?e=VjkrGv",
   BANKING_REPORT:
      "https://1sfu-my.sharepoint.com/:b:/g/personal/axismd_sfu_ca/IQC7YvUtIJv_SpfHqi127YCOAZkW77OMoVxD2Pb5p3deA64?e=E0CaY6",
   HEALTHCARE_REPORT:
      "https://1sfu-my.sharepoint.com/:b:/g/personal/axismd_sfu_ca/IQCh4_EIYTEqSaKKb_WL-_q7Abg7WKNrJHVuQ1o0VBcmHjo?e=WrRZLV",
} as const;

export const RECRUITMENT = {
   COORDINATOR_PACKAGE: HIRING_CONFIG.HIRING_ACTIVE ? "https://1sfu-my.sharepoint.com/:b:/g/personal/axismd_sfu_ca/IQAFfmGV-SnGR7WwJ8qsm3OkAUiSuaIVlTUxxMhymnHvuqM?e=14IZAn" : REPLACE_WITH_VALID_LINK,
   CONSULTANT_PACKAGE: HIRING_CONFIG.HIRING_ACTIVE ? "https://1sfu-my.sharepoint.com/:b:/g/personal/axismd_sfu_ca/IQD0CWvuxD7sQpnZbqWOLSxuAZ9buJ4vzDCcixeftlX6Peg?e=2loTo7" : REPLACE_WITH_VALID_LINK,
   APPLICATION_FORM: HIRING_CONFIG.HIRING_ACTIVE ? "https://linktr.ee/sfuaxisconsulting?utm_source=ig&utm_medium=social&utm_content=link_in_bio" : REPLACE_WITH_VALID_LINK ,
} as const;

export const EVENT_LINKS = {
   ODYSSEY: EVENT_CONFIG.ODYSSEY_REGISTRATION_TOGGLE ? REPLACE_WITH_VALID_LINK : "",
   REVOLVE: EVENT_CONFIG.REVOLVE_REGISTRATION_TOGGLE
      ? "https://www.bouncelife.com/events/6982a0f2cc5b63a647be6ab6"
      : "",
} as const;
