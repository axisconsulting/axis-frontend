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
      "https://1sfu-my.sharepoint.com/personal/axismd_sfu_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website%2FAxis%20Consulting%20Impact%20Report%2Epdf&parent=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website&ga=1",
   CONSULTING_101:
      "https://1sfu-my.sharepoint.com/personal/axismd_sfu_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website%2FConsulting%20101%20Guide%2Epdf&parent=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website&ga=1",
   MAILING_LIST: "https://forms.office.com/r/vQxSPj9Sxf",
} as const;

export const SNAPSHOT_LINKS = {
   OIL_AND_GAS_REPORT:
      "https://1sfu-my.sharepoint.com/personal/axismd_sfu_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website%2FOil%20%26%20Gas%20Snapshot%2Epdf&parent=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website&ga=1",
   BANKING_REPORT:
      "https://1sfu-my.sharepoint.com/personal/axismd_sfu_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website%2FBanking%20Snapshot%2Epdf&parent=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website&ga=1",
   HEALTHCARE_REPORT:
      "https://1sfu-my.sharepoint.com/personal/axismd_sfu_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website%2FHealthcare%20Snapshot%2Epdf&parent=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202025%2D2026%2F04%2E%20Directors%2F04%2E%20Strategy%2FReports%20for%20Website&ga=1",
} as const;

export const RECRUITMENT = {
   COORDINATOR_PACKAGE: HIRING_CONFIG.HIRING_ACTIVE ? REPLACE_WITH_VALID_LINK : "",
   CONSULTANT_PACKAGE: HIRING_CONFIG.HIRING_ACTIVE ? REPLACE_WITH_VALID_LINK : "",
   APPLICATION_FORM: HIRING_CONFIG.HIRING_ACTIVE ? REPLACE_WITH_VALID_LINK : "",
} as const;

export const EVENT_LINKS = {
   ODYSSEY: EVENT_CONFIG.ODYSSEY_REGISTRATION_TOGGLE ? REPLACE_WITH_VALID_LINK : "",
   REVOLVE: EVENT_CONFIG.REVOLVE_REGISTRATION_TOGGLE ? REPLACE_WITH_VALID_LINK : "",
} as const;
