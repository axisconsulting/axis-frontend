// R2-relative URLs + speaker constants for Revolve Consulting Conference
export const REVOLVE_SPEAKER_URLS = {
   Colette_Cheung_IBM: "generic/events/revolve/speakers/Colette-IBM.webp",
   Harsh_Otwani_EY: "generic/events/revolve/speakers/Harsh-EY.webp",
   Intern_Emir_Nurlanov_Deloitte: "generic/events/revolve/speakers/Intern-Emir-Deloitte.webp",
   Intern_Sandra_Chen_KPMG: "generic/events/revolve/speakers/Intern-Sandra-KPMG.webp",
   Intern_Tan_Vu_IBM: "generic/events/revolve/speakers/Intern-Tan-IBM.webp",
   Kevin_Doody_IBM: "generic/events/revolve/speakers/Kevin-IBM.webp",
   Liz_Gilder_Deloitte: "generic/events/revolve/speakers/Liz-Deloitte.webp",
   Yubin_Chae_KPMG: "generic/events/revolve/speakers/Yubin-KPMG.webp",
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
   },
];

export const WORKSHOP_ACTIVITY_HOSTS: RevolveEventSpeaker[] = [
   {
      name: "Kevin Doody",
      position: "Senior Manager @ IBM",
      img: REVOLVE_SPEAKER_URLS.Kevin_Doody_IBM,
   },
];

export const FIRM_LED_WORKSHOP_HOSTS: RevolveEventSpeaker[] = [
   {
      name: "Yubin Chae",
      position: "Consultant, Technology Strategy & Digital Transformation @ KPMG",
      img: REVOLVE_SPEAKER_URLS.Yubin_Chae_KPMG,
   },
   {
      name: "Liz Gilder",
      position: "Business Analyst - Workforce Strategy & Intelligence @ Deloitte",
      img: REVOLVE_SPEAKER_URLS.Liz_Gilder_Deloitte,
   },
   {
      name: "Harsh Otwani",
      position: "Manager - Data Analytics & AI @ EY",
      img: REVOLVE_SPEAKER_URLS.Harsh_Otwani_EY,
   },
];

export const INTERN_PANELISTS: RevolveEventSpeaker[] = [
   {
      name: "Emir Nurlanov",
      position: "Deal Transformation and Post Merger Integration Intern @ Deloitte",
      img: REVOLVE_SPEAKER_URLS.Intern_Emir_Nurlanov_Deloitte,
   },
   {
      name: "Sandra Chen",
      position:
         "Management Consultant Intern, Technology Strategy and Digital Transformation @ KPMG",
      img: REVOLVE_SPEAKER_URLS.Intern_Sandra_Chen_KPMG,
   },
   {
      name: "Tan Vu",
      position: "Consulting Intern @ IBM",
      img: REVOLVE_SPEAKER_URLS.Intern_Tan_Vu_IBM,
   },
];

// Attending companies (for logo marquee)
const REVOLVE_COMPANY_BUCKET = "generic/events/revolve/companies/";

export const REVOLVE_COMPANY_LOGOS = [
   {
      key: "ibm",
      name: "IBM",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}ibm.webp`,
      website: "https://www.ibm.com/",
   },
   {
      key: "kpmg",
      name: "KPMG",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}kpmg.webp`,
      website: "https://kpmg.com/",
   },
   {
      key: "deloitte",
      name: "Deloitte",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}deloitte.webp`,
      website: "https://www.deloitte.com/",
   },
   {
      key: "ey",
      name: "EY",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}ey.webp`,
      website: "https://www.ey.com/",
   },
   {
      key: "pwc",
      name: "PwC",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}pwc.webp`,
      website: "https://www.pwc.com/",
   },
   {
      key: "slalom",
      name: "Slalom",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}slalom.webp`,
      website: "https://www.slalom.com/",
   },
   {
      key: "doane_grant_thornton",
      name: "Doane Grant Thornton",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}doane-grant-thornton.webp`,
      website: "https://www.doanegrantthornton.ca/",
   },
   {
      key: "passion_fruit",
      name: "Passion Fruit",
      logoSrc: `${REVOLVE_COMPANY_BUCKET}passion-fruit.webp`,
      website: "https://www.passionfruitpartners.com/",
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
