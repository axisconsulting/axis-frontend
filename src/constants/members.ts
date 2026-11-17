/*
 * Centralized file containing all team member information
 * Including names, roles, LinkedIn URLs, and optional profile images
 */


import mdSam from "./test-img/managing-directors/md-sam.webp"
import mdTan from "./test-img/managing-directors/md-tan.webp"

import iSabrina from "./test-img/executives/i-sabrina.webp"
import bdFrancine from "./test-img/executives/bd-francine.webp"
import dInarah from "./test-img/executives/d-inarah.webp"
import dLaraine from "./test-img/executives/d-laraine.webp"
import eShirly from "./test-img/executives/e-shirly.webp" 
import sJun from "./test-img/executives/s-jun.webp"
import msKayla from "./test-img/executives/ms-kayla.webp"
import fVincent from "./test-img/executives/f-vincent.webp"
import wdAbraham from "./test-img/executives/wd-abraham.webp"

import tlAlbel from "./test-img/team leads/TL-abel.webp"
import tlSachkeerat from "./test-img/team leads/TL-sachkeerat.webp"
import tlDaria from "./test-img/team leads/TL-daria.webp"

export interface Member {
   name: string;
   role: string;
   linkedin: string;
   imgUrl: string;
   featuredImgUrl?: string;
}

export interface TeamMembers {
   managingDirectors: Member[];
   directors: Member[];
   internal: Member[];
   bussinessDevelopment: Member[];
   events: Member[];
   strategy: Member[];
   marketingStrategy: Member[];
   design: Member[];
   finance: Member[];
   webDev: Member[];
   consultingTeamLeads: Member[];
   consultingTeam1: Member[];
   consultingTeam2: Member[];
   consultingTeam3: Member[];
}

const ABOUT_BUCKET = "about-page/";

// ================= Managing Directors =================
export const MANAGING_DIRECTORS: Member[] = [
   {
      name: "Samuel McCallen",
      role: "Managing Director",
      linkedin: "https://www.linkedin.com/in/samuel-mccallen",
      //imgUrl: `${ABOUT_BUCKET}managing-directors/md-camille.webp`,
      imgUrl: mdSam,
   },
   {
      name: "Tan Vu",
      role: "Managing Director",
      linkedin: "https://www.linkedin.com/in/tan-vu/",
      //imgUrl: `${ABOUT_BUCKET}managing-directors/md-andrew.webp`,
      imgUrl: mdTan,
   },
] as const;

// ================= Internal =================
export const INTERNAL_TEAM: Member[] = [
   {
      name: "Sabrina Wang",
      role: "Internal Director",
      linkedin: "https://www.linkedin.com/in/hazel-liu-/",
      //imgUrl: `${ABOUT_BUCKET}internal-team/internal-dir-hazel.webp`,
      featuredImgUrl: iSabrina,
      imgUrl: iSabrina,
   },
   {
      name: "Aubrey Muirhead",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/aubrey-muirhead-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-aubrey.webp`,
   },
   {
      name: "Kaiya Bains",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/kaiya-bains-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-kaiya.webp`,
   },
   {
      name: "Simran Nihalani",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/simran-nihalani-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-simran.webp`,
   },
] as const;

// ================= Business Development =================
export const BUSINESS_DEVELOPMENT_TEAM: Member[] = [
   {
      name: "Francine Halim",
      role: "Bussiness Development Director",
      linkedin: "https://www.linkedin.com/in/francinehalim/",
      //imgUrl: `${ABOUT_BUCKET}external-team/external-dir-tan.webp`,
      featuredImgUrl: bdFrancine,
      imgUrl: bdFrancine,
   },
   {
      name: "Lauren Lee",
      role: "Business Development Coordinator",
      linkedin: "https://www.linkedin.com/in/laurenlee5",
      imgUrl: `${ABOUT_BUCKET}external-team/external-coord-lauren.webp`,
   },
   {
      name: "Sophie Long",
      role: "Business Development Coordinator",
      linkedin: "https://www.linkedin.com/in/sophie-long-aa6a5933a/",
      imgUrl: `${ABOUT_BUCKET}external-team/external-coord-sophie.webp`,
   },
   {
      name: "Joshua Tam",
      role: "Business Development Coordinator",
      linkedin: "https://www.linkedin.com/in/joshua-m-tam/",
      imgUrl: `${ABOUT_BUCKET}external-team/external-coord-josh.webp`,
   },
] as const;

// ================= Events =================
export const EVENTS_TEAM: Member[] = [
   {
      name: "Shirly Zhou",
      role: "Events Director",
      linkedin: "https://www.linkedin.com/in/shirly-zhou/",
      //imgUrl: `${ABOUT_BUCKET}events-team/events-dir-shirly.webp`,
      featuredImgUrl: eShirly,
      imgUrl: eShirly,
   }, 
   {
      name: "Hasini Birlangi",
      role: "Events Coordinator",
      linkedin: "https://www.linkedin.com/in/hasini-birlangi/",
      imgUrl: `${ABOUT_BUCKET}events-team/events-coord-hasini.webp`,
   },
   {
      name: "Kaenan D'Cruz",
      role: "Events Coordinator",
      linkedin: "https://www.linkedin.com/in/kaenan-dcruz/",
      imgUrl: `${ABOUT_BUCKET}events-team/events-coord-kaenan.webp`,
   },
   {
      name: "Sophia Bruchet",
      role: "Events Coordinator",
      linkedin: "https://www.linkedin.com/in/sophia-bruchet/",
      imgUrl: `${ABOUT_BUCKET}events-team/events-coord-sophia.webp`,
   },
   {
      name: "Tabatha Acosta",
      role: "Events Coordinator",
      linkedin: "https://www.linkedin.com/in/tabatha-acosta/",
      imgUrl: `${ABOUT_BUCKET}events-team/events-coord-tabatha.webp`,
   }
] as const;



// ================= Strategy =================
export const STRATEGY_TEAM: Member[] = [
   {
      name: "Jun Han",
      role: "Strategy Director",
      linkedin: "https://www.linkedin.com/in/yaejunhan/",
      //imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-dir-carol.webp`,
      featuredImgUrl: sJun,
      imgUrl: sJun,
   },
   {
      name: "Audrey Khin",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/audreykhin/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-audrey.webp`,
   },
   {
      name: "Ayumi Morita",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/ayumi-morita-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-ayumi.webp`,
   },
   {
      name: "Jade Aw-Yeong",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/jade-aw-yeong-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-jade.webp`,
   },
   {
      name: "Tyson Tang",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/tyson-tang-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-tyson.webp`,
   },
] as const;

// ================= Marketing Strategy =================
export const MARKETING_STRATEGY_TEAM: Member[] = [
   {
      name: "Kayla Jong",
      role: "Marketing Director",
      linkedin: "https://www.linkedin.com/in/jessicataokan",
      //imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-dir-jessica.webp`,
      featuredImgUrl: msKayla,
      imgUrl: msKayla,
   },
   {
      name: "Damielle Arcenal",
      role: "Marketing Coordinator",
      linkedin: "https://www.linkedin.com/in/damielle-arcelan-904a9b298/",
      imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-coord-damielle.webp`,
   },
   {
      name: "Ling Ly",
      role: "Marketing Coordinator",
      linkedin: "https://www.linkedin.com/in/ling-ly-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-coord-ling.webp`,
   },
] as const;

// ================= Marketing Design =================
export const DESIGN_TEAM: Member[] = [
   {
      name: "Inarah Usmani",
      role: "Design Director",
      linkedin: "https://www.linkedin.com/in/inarah-usmani-1a2b3c4d5e/",
      //imgUrl: `${ABOUT_BUCKET}design-team/design-dir-inarah.webp`,
      featuredImgUrl: dInarah,
      imgUrl: dInarah,
   },
   {
      name: "Laraine Sim",
      role: "Design Director",
      linkedin: "https://www.linkedin.com/in/laraine-sim-1a2b3c4d5e/",
      //imgUrl: `${ABOUT_BUCKET}design-team/design-dir-laraine.webp`,
      featuredImgUrl: dLaraine,
      imgUrl: dLaraine,
   },
   {
      name: "Angelina Lim",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/angelina-lim-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-angelina.webp`,
   },
   {
      name: "Rehma Adnan",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/rehma-adnan-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-rehma.webp`,
   },
   {
      name: "Sara Chung",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/sara-chung-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-sara.webp`,
   },
   {
      name: "Sophia Tsai",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/sophia-tsai-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-sophia.webp`,
   },
] as const;

// ================= Finance =================
export const FINANCE_TEAM: Member[] = [
   {
      name: "Vincent Kwan",
      role: "Finance Director",
      linkedin: "https://www.linkedin.com/in/vincentkkwan",
      //imgUrl: `${ABOUT_BUCKET}finance-team/finance-dir-tom.webp`,
      featuredImgUrl: fVincent,
      imgUrl: fVincent,
   },
] as const;

// ================= Web Development =================
export const WEB_DEV_TEAM: Member[] = [
   {
      name: "Abraham Mormontoy",
      role: "Web Development Director",
      linkedin: "https://www.linkedin.com/in/jaimalhi/",
      //imgUrl: `${ABOUT_BUCKET}web-dev-team/web-dir-abraham.webp`,
      imgUrl: wdAbraham,
   },
] as const;


// ================= Team Albel (Eucalyptus) =================
export const TEAM_EUCALYPTUS: Member[] = [
   {
      name: "Albel Dhanoa",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/ryanthaulad",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/team-lead-ryan.webp`,
      featuredImgUrl: tlAlbel,
      imgUrl: tlAlbel,
   },
   {
      name: "Dmitri Folomeyev",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/dfolomeyev/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-dmitri.webp`,
   },
   {
      name: "Alijawad Ali",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/alijawad-ali-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-alijawad.webp`,
   },
   {
      name: "Jassveen Kaur",
      role: "Consultant",
      linkedin: "https://linkedin.com/in/jassveen-kaur-1a2b3c4d5e",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-jassveen.webp`,
   },
   {
      name: "Makeyla Truong",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/makeyla-truong-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-makeyla.webp`,
   },
   {
      name: "Tyler Tan",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/tyler-tan-1a2b3c4d5e/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-tyler.webp`,
   },
] as const;


// ================= Team Sachkeerat (Redwood) =================
export const TEAM_REDWOOD: Member[] = [
   {
      name: "Sachkeerat Sandhu",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/sachkeerat-sandhu-404a6b1b0/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/team-lead-sachkeerat.webp`,
      featuredImgUrl: tlSachkeerat,
      imgUrl: tlSachkeerat,
   },
   {
      name: "Eric Pan",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/ericpan",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-eric.webp`,
   },
   {
      name: "Giselle Rafe",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/giselle-rafe",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-giselle.webp`,
   },
   {
      name: "Wilson Yueng",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/wilson-yueng/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-wilson.webp`,
   },
   {
      name: "Joshua Oladokun",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/joshua-oladokun/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-joshua.webp`,
   },
   {
      name: "Preethi Chidambaran",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/preethi-chidambaran/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-preethi.webp`,
   },
] as const;


// ================= Team Daria (Willow) =================
export const TEAM_WILLOW: Member[] = [
   {
      name: "Daria Zakharova",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/dariazakharova/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-willow/team-lead-daria.webp`,
      featuredImgUrl: tlDaria,
      imgUrl: tlDaria,
   },
   {
      name: "Seojin Yoon",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/seojin-yoon/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-seojin.webp`,
   },
   {
      name: "Khue Nguyen",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/khue-nguyen/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-khue.webp`,
   },
   {
      name: "Max Gu",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/max-gu/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-max.webp`,
   },
   {
      name: "Winnie Wang",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/winnie-wang/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-winnie.webp`,
   },
   {
      name: "Phineas Tran",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/phineas-tran/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-phineas.webp`,
   },
] as const;

// ================= Directors =================
export const DIRECTORS: Member[] = [
   INTERNAL_TEAM[0], // Sabrina Wang
   BUSINESS_DEVELOPMENT_TEAM[0], // Francine Halim
   STRATEGY_TEAM[0], // Jun Han
   MARKETING_STRATEGY_TEAM[0], // `Kayla Jong
   DESIGN_TEAM[0], // Inarah Usmani
   DESIGN_TEAM[1], // Laraine Sim
   FINANCE_TEAM[0], // Vincent Kwan
   WEB_DEV_TEAM[0], // Abraham Mormontoy
] as const;

// ================= Consulting Team Leads =================
export const CONSULTING_TEAM_LEADS: Member[] = [
   TEAM_EUCALYPTUS[0], // Albel Dhanoa
   TEAM_REDWOOD[0], // Sachkeerat Sandhu
   TEAM_WILLOW[0], // Daria Zakharova
] as const;

// ================= All Members Export =================
export const ALL_MEMBERS: TeamMembers = {
   managingDirectors: MANAGING_DIRECTORS,
   directors: DIRECTORS, 
   bussinessDevelopment: BUSINESS_DEVELOPMENT_TEAM, //
   events: EVENTS_TEAM, //
   internal: INTERNAL_TEAM, //
   strategy: STRATEGY_TEAM, // 
   marketingStrategy: MARKETING_STRATEGY_TEAM, //
   design: DESIGN_TEAM, //
   finance: FINANCE_TEAM, //
   webDev: WEB_DEV_TEAM, // 
   consultingTeamLeads: CONSULTING_TEAM_LEADS,
   consultingTeam1: TEAM_EUCALYPTUS,
   consultingTeam2: TEAM_REDWOOD,
   consultingTeam3: TEAM_WILLOW,
} as const;

// ================= Helper Functions =================

// Get all unique members (avoiding duplicates)
export const getAllUniqueMembers = (): Member[] => {
   const memberMap = new Map<string, Member>();

   Object.values(ALL_MEMBERS).forEach((team) => {
      team.forEach((member: Member) => {
         const key = member.linkedin || member.name;
         if (!memberMap.has(key)) {
            memberMap.set(key, member);
         }
      });
   });

   return Array.from(memberMap.values());
};

// Find a member by name
export const findMemberByName = (name: string): Member | undefined => {
   return getAllUniqueMembers().find((member) => member.name.toLowerCase() === name.toLowerCase());
};

// Get members by role
export const getMembersByRole = (role: string): Member[] => {
   return getAllUniqueMembers().filter((member) =>
      member.role.toLowerCase().includes(role.toLowerCase()),
   );
};

// Get all consultants
export const getAllConsultants = (): Member[] => {
   return [
      ...TEAM_EUCALYPTUS.filter((m) => m.role.includes("Consultant")),
      ...TEAM_REDWOOD.filter((m) => m.role.includes("Consultant")),
      ...TEAM_WILLOW.filter((m) => m.role.includes("Consultant")),
   ];
};

// Get all coordinators
export const getAllCoordinators = (): Member[] => {
   return getAllUniqueMembers().filter((member) => member.role.includes("Coordinator"));
};
