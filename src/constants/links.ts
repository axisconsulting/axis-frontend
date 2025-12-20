// TODO: replace once links are finalized
const BASE_URL = window.location.origin; // Get the base URL of the current site
const AXIS_NOT_FOUND_LINK = `${BASE_URL}/notfound`;

export const SOCIAL_LINKS = {
   LINKEDIN: "https://www.linkedin.com/company/sfuaxisconsulting/",
   INSTAGRAM: "https://www.instagram.com/sfuaxisconsulting/",
   FACEBOOK: "https://www.facebook.com/SFUAxisConsulting/",
} as const;

export const AXIS_LINKS = {
   DOMAIN: "https://www.sfuaxisconsulting.com/",
   EMAIL: "axismd@sfu.ca",
   IMPACT_REPORT: "https://drive.google.com/file/d/1NurcvvOy8DUCYgc11QRXQB-QbTkSctZG/view",
   CONSULTING_101:
      "https://forms.office.com/Pages/ResponsePage.aspx?id=fmfoBInJuUeGGdg9Wl9sZ6JsHL5n-8JLl38GgQsZ96JUQUJaMUs0NkxUSTROQTVBN0YzUzBNUVBOSC4u",
   MAILING_LIST: "https://forms.office.com/r/vQxSPj9Sxf",
} as const;

export const RECRUITMENT = {
   COORDINATOR_PACKAGE:
      "https://1sfu-my.sharepoint.com/personal/axismd_sfu_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202024%2D2025%2FInternal%2FSpring%20Hiring%2FSpring%20Hiring%20Package%20%28Coordinators%29%2Epdf&parent=%2Fpersonal%2Faxismd%5Fsfu%5Fca%2FDocuments%2FAxis%20Consulting%202024%2D2025%2FInternal%2FSpring%20Hiring&ga=1",
   CONSULTANT_PACKAGE: AXIS_NOT_FOUND_LINK,
   APPLICATION_FORM: AXIS_NOT_FOUND_LINK,
} as const;

export const EVENT_LINKS = {
   ODYSSEY: AXIS_NOT_FOUND_LINK,
   REVOLVE: AXIS_NOT_FOUND_LINK,
} as const;
