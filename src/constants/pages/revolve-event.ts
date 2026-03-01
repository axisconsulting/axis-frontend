// Disable registration button after March 4th, 2026 at midnight PST (UTC-8)
const PST_MIDNIGHT_MARCH_4 = new Date("2026-02-05T08:00:00Z");
export const isRevolveRegistrationClosed = new Date() > PST_MIDNIGHT_MARCH_4;

// R2-relative URLs + speaker constants for Revolve Consulting Conference
export const REVOLVE_SPEAKER_URLS = {
   Colette_Cheung_IBM: "generic/events/revolve/speakers/Colette-Cheung-IBM.webp",
   Harsh_Otwani_EY: "generic/events/revolve/speakers/Harsh-Otwani-EY.webp",
   Intern_Emir_Nurlanov_Deloitte:
      "generic/events/revolve/speakers/Intern-Emir-Nurlanov-Deloitte.webp",
   Intern_Kip_Guthrie_EY: "generic/events/revolve/speakers/Intern-Kip-Guthrie-EY.webp",
   Intern_Ripan_Dhaliwal_PWC: "generic/events/revolve/speakers/Intern-Ripan-Dhaliwal-PWC.webp",
   Intern_Sandra_Chen_KPMG: "generic/events/revolve/speakers/Intern-Sandra-Chen-KPMG.webp",
   Intern_Tan_Vu_IBM: "generic/events/revolve/speakers/Intern-Tan-Vu-IBM.webp",
   Kevin_Doody_IBM: "generic/events/revolve/speakers/Kevin-Doody-IBM.webp",
   Liz_Gilder_Deloitte: "generic/events/revolve/speakers/Liz-Gilder-Deloitte.webp",
   Shubhleen_Dhaka_EY: "generic/events/revolve/speakers/Shubhleen-Dhaka-EY.webp",
   Yubin_Chae_KPMG: "generic/events/revolve/speakers/Yubin-Chae-KPMG.webp",
} as const;

export type RevolveEventSpeaker = {
   name: string;
   position: string;
   img: string;
   linkedin?: string;
};

export const KEYNOTE_SPEAKERS: RevolveEventSpeaker[] = [
   {
      name: "Colette Cheung",
      position: "Associate Partner @ IBM",
      img: REVOLVE_SPEAKER_URLS.Colette_Cheung_IBM,
      linkedin: "https://www.linkedin.com/in/colettecheung/",
   },
];

export const WORKSHOP_ACTIVITY_HOSTS: RevolveEventSpeaker[] = [
   {
      name: "Kevin Doody",
      position: "Senior Manager @ IBM",
      img: REVOLVE_SPEAKER_URLS.Kevin_Doody_IBM,
      linkedin: "https://www.linkedin.com/in/kevindoody/",
   },
];

export const FIRM_LED_WORKSHOP_HOSTS: RevolveEventSpeaker[] = [
   {
      name: "Yubin Chae",
      position: "Consultant, Technology Strategy & Digital Transformation @ KPMG",
      img: REVOLVE_SPEAKER_URLS.Yubin_Chae_KPMG,
      linkedin: "https://www.linkedin.com/in/yubinchae/",
   },
   {
      name: "Liz Gilder",
      position: "Business Analyst - Workforce Strategy & Intelligence @ Deloitte",
      img: REVOLVE_SPEAKER_URLS.Liz_Gilder_Deloitte,
      linkedin: "https://www.linkedin.com/in/liz-gilder/",
   },
   {
      name: "Harsh Otwani",
      position: "Manager - AI & Data @ EY",
      img: REVOLVE_SPEAKER_URLS.Harsh_Otwani_EY,
      linkedin: "https://www.linkedin.com/in/harsh-otwani/",
   },
   {
      name: "Shubhleen Dhaka",
      position: "Technology Consultant - AI & Data @ EY",
      img: REVOLVE_SPEAKER_URLS.Shubhleen_Dhaka_EY,
      linkedin: "https://www.linkedin.com/in/sdhaka/",
   },
];

export const INTERN_PANELISTS: RevolveEventSpeaker[] = [
   {
      name: "Emir Nurlanov",
      position: "Deal Transformation and Post Merger Integration Intern @ Deloitte",
      img: REVOLVE_SPEAKER_URLS.Intern_Emir_Nurlanov_Deloitte,
      linkedin: "https://www.linkedin.com/in/emirlann/",
   },
   {
      name: "Kip Guthrie",
      position: "Business Transformations Consultant, former intern @ EY",
      img: REVOLVE_SPEAKER_URLS.Intern_Kip_Guthrie_EY,
      linkedin: "https://www.linkedin.com/in/kipguthrie/",
   },
   {
      name: "Ripan Dhaliwal",
      position: "Incoming Associate, former intern - Technology, Strategy & Transformation @ PwC",
      img: REVOLVE_SPEAKER_URLS.Intern_Ripan_Dhaliwal_PWC,
      linkedin: "https://www.linkedin.com/in/ripanpreet-kaur-40b5041b5/",
   },
   {
      name: "Sandra Chen",
      position:
         "Management Consultant Intern, Technology Strategy and Digital Transformation @ KPMG",
      img: REVOLVE_SPEAKER_URLS.Intern_Sandra_Chen_KPMG,
      linkedin: "https://www.linkedin.com/in/sandrayjchen/",
   },
   {
      name: "Tan Vu",
      position: "Consulting Intern @ IBM",
      img: REVOLVE_SPEAKER_URLS.Intern_Tan_Vu_IBM,
      linkedin: "https://www.linkedin.com/in/tan-vu/",
   },
];

// Attending companies (for logo marquee)
const REVOLVE_COMPANY_BUCKET = "generic/events/revolve/companies/";

export const REVOLVE_COMPANY_LOGOS = [
   {
      key: "doane_grant_thornton",
      name: "Doane Grant Thornton",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}Doane-Grant-Thornton.webp`,
      website: "https://www.doanegrantthornton.ca/",
   },
   {
      key: "ey",
      name: "EY",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}EY.webp`,
      website: "https://www.ey.com/",
   },
   {
      key: "ibm",
      name: "IBM",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}IBM.webp`,
      website: "https://www.ibm.com/",
   },
   {
      key: "kpmg",
      name: "KPMG",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}KPMG.webp`,
      website: "https://kpmg.com/",
   },
   {
      key: "pwc",
      name: "PwC",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}PWC.webp`,
      website: "https://www.pwc.com/",
   },
   {
      key: "passion_fruit",
      name: "Passion Fruit",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}Passion-Fruit-Partners.webp`,
      website: "https://www.passionfruitpartners.com/",
   },
   {
      key: "slalom",
      name: "Slalom",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}Slalom.webp`,
      website: "https://www.slalom.com/",
   },
   {
      key: "accenture",
      name: "Accenture",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}accenture.webp`,
      website: "https://www.accenture.com/",
   },
   {
      key: "deloitte",
      name: "Deloitte",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}deloitte.webp`,
      website: "https://www.deloitte.com/",
   },
   {
      key: "mastercard",
      name: "Mastercard",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}mastercard.webp`,
      website: "https://www.mastercard.com/",
   },
] as const;

export type RevolveCompanyLogo = (typeof REVOLVE_COMPANY_LOGOS)[number];
export type RevolveCompanyKey = RevolveCompanyLogo["key"];

export const REVOLVE_COMPANY_LOGOS_BY_KEY: Record<RevolveCompanyKey, RevolveCompanyLogo> =
   REVOLVE_COMPANY_LOGOS.reduce(
      (acc, company) => {
         acc[company.key] = company;
         return acc;
      },
      {} as Record<RevolveCompanyKey, RevolveCompanyLogo>,
   );
