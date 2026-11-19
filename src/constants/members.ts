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

import tlAlbel from "./test-img/team-leads/TL-abel.webp"
import tlSachkeerat from "./test-img/team-leads/TL-sachkeerat.webp"
import tlDaria from "./test-img/team-leads/TL-daria.webp"

import tlnAlbel from "./test-img/team-eucalyptus/team-lead-albel.webp"
import cDimitri from "./test-img/team-eucalyptus/consultant-dmitri.webp"
import cAlijawad from "./test-img/team-eucalyptus/consultant-alijawad.webp"
import cJassveen from "./test-img/team-eucalyptus/consultant-jassveen.webp"
import cMakeyla from "./test-img/team-eucalyptus/consultant-makeyla.webp"
import cTyler from "./test-img/team-eucalyptus/consultant-tyler.webp"

import tlnSachkeerat from "./test-img/team-redwood/team-lead-sach.webp"
import cEric from "./test-img/team-redwood/consultant-eric.webp"
import cGiselle from "./test-img/team-redwood/consultant-giselle.webp"
import cWilson from "./test-img/team-redwood/consultant-wilson.webp"
import cJoshua from "./test-img/team-redwood/consultant-joshua.webp"
import cPreethi from "./test-img/team-redwood/consultant-preethi.webp"

import tlnDaria from "./test-img/team-willow/team-lead-daria.webp"
import cSeojin from "./test-img/team-willow/consultant-seojin.webp"
import cKhue from "./test-img/team-willow/consultant-khue.webp"
import cMax from "./test-img/team-willow/consultant-max.webp"
import cWinnie from "./test-img/team-willow/consultant-winnie.webp"
import cPhineas from "./test-img/team-willow/consultant-phineas.webp"

import diSabrina from "./test-img/team-internal/internal-director-sabrina.webp"
import coordAubrey from "./test-img/team-internal/coordinator-aubrey.webp"
import coordKaiya from "./test-img/team-internal/coordinator-kaiya.webp"
import coordSimran from "./test-img/team-internal/coordinator-simran.webp"

import bdnFrancine from "./test-img/team-business-development/business-dev-director-francine.webp"
import coordAngela from "./test-img/team-business-development/coordinator-angela.webp"
import coordAudrey from "./test-img/team-business-development/coordinator-audrey.webp"
import coordEthan from "./test-img/team-business-development/coordinator-ethan.webp"
//src\constants\test-img\team-business-development\business-dev-director-francine.webp

import snJun from "./test-img/team-strategy/strategy-director-jun.webp"
import scoordAudrey from "./test-img/team-strategy/strategy-coordinator-audrey.webp"
import coordAyumi from "./test-img/team-strategy/strategy-coordinator-ayumi.webp"
import coordJade from "./test-img/team-strategy/strategy-coordinator-jade.webp"
import coordTyson from "./test-img/team-strategy/strategy-coordinator-tyson.webp"

import msnKayla from "./test-img/team-marketing-strategy/marketing-strategy-director-kayla.webp"
import coordDamielle from "./test-img/team-marketing-strategy/marketing-coordinator-danielle.webp"
import coordLing from "./test-img/team-marketing-strategy/marketing-coordinator-ling.webp"

import dnInarah from "./test-img/team-design/design-director-inarah.webp"
import dnLaraine from "./test-img/team-design/design-director-laraine.webp"
import coordAngelina from "./test-img/team-design/design-coordinator-angelina.webp"
import coordRehma from "./test-img/team-design/design-coordinator-rehma.webp"
import coordSara from "./test-img/team-design/design-coordinator-sara.webp"
import coordSophia from "./test-img/team-design/design-coordinator-sophia.webp"

import enShirly from "./test-img/team-events/events-director-shirly.webp"
import coordHasini from "./test-img/team-events/events-coordinator-hasini.webp"
import coordKaenan from "./test-img/team-events/events-coordinator-kaenan.webp"
import coordeSophie from "./test-img/team-events/events-coordinator-sophie.webp"
import coordTabatha from "./test-img/team-events/events-coordinator-tabatha.webp"
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
   businessDevelopment: Member[];
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

// ================= Team Albel (Eucalyptus) =================
export const TEAM_EUCALYPTUS: Member[] = [
   {
      name: "Albel Dhanoa",
      role: "Consulting Team Lead",
      linkedin: "https://linkedin.com/in/albel-dhanoa",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/team-lead-ryan.webp`,
      featuredImgUrl: tlAlbel,
      imgUrl: tlnAlbel,
   },
   {
      name: "Dmitri Folomeyev",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/dfolomeyev/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-dmitri.webp`,
      imgUrl: cDimitri,
   },
   {
      name: "Alijawad Ali",
      role: "Consultant",
      linkedin: "https://linkedin.com/in/alijawad-ali",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-alijawad.webp`,
      imgUrl: cAlijawad,
   },
   {
      name: "Jassveen Kaur",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/kaurjassveen234/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-jassveen.webp`,
      imgUrl: cJassveen,
   },
   {
      name: "Makeyla Truong",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/makeylat/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-makeyla.webp`,
      imgUrl: cMakeyla,
   },
   {
      name: "Tyler Tan",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/tylerntan/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-tyler.webp`,
      imgUrl: cTyler,
   },
] as const;


// ================= Team Sachkeerat (Redwood) =================
export const TEAM_REDWOOD: Member[] = [
   {
      name: "Sachkeerat Sandhu",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/sachkeeratsandhu/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/team-lead-sachkeerat.webp`,
      featuredImgUrl: tlSachkeerat,
      imgUrl: tlnSachkeerat,
   },
   {
      name: "Eric Pan",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/ericpan06/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-eric.webp`,
      imgUrl: cEric,
   },
   {
      name: "Giselle Rafe",
      role: "Consultant",
      linkedin: "www.linkedin.com/in/gisellerafe",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-giselle.webp`,
      imgUrl: cGiselle,
   },
   {
      name: "Wilson Yueng",
      role: "Consultant",
      linkedin: "www.linkedin.com/in/wilsonyueng",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-wilson.webp`,
      imgUrl: cWilson,
   },
   {
      name: "Joshua Oladokun",
      role: "Consultant",
      linkedin: "www.linkedin.com/in/joshua-oladokun-47aab0303",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-joshua.webp`,
      imgUrl: cJoshua,
   },
   {
      name: "Preethi Chidambaran",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/preethi-ca/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-preethi.webp`,
      imgUrl: cPreethi,
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
      imgUrl: tlnDaria,
   },
   {
      name: "Seojin Yoon",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/seojin-yoon-397a50302/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-seojin.webp`,
      imgUrl: cSeojin,
   },
   {
      name: "Khue Nguyen",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/khue-nguyen/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-khue.webp`,
      imgUrl: cKhue,
   },
   {
      name: "Max Gu",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/max-gu-aa916b388/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-max.webp`,
      imgUrl: cMax,
   },
   {
      name: "Winnie Wang",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/winniiewg/",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-winnie.webp`,
      imgUrl: cWinnie,
   },
   {
      name: "Phineas Tran",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/phineas-tran",
      //imgUrl: `${ABOUT_BUCKET}consulting/team-willow/consultant-phineas.webp`,
      imgUrl: cPhineas,
   },
] as const;

// ================= Internal =================
export const INTERNAL_TEAM: Member[] = [
   {
      name: "Sabrina Wang",
      role: "Internal Director",
      linkedin: "https://www.linkedin.com/in/sabrinawang9/",
      //imgUrl: `${ABOUT_BUCKET}internal-team/internal-dir-hazel.webp`,
      featuredImgUrl: iSabrina,
      imgUrl: diSabrina,
   },
   {
      name: "Aubrey Muirhead",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/aubrey-muirhead-1a2b3c4d5e/",
      imgUrl: coordAubrey,
   },
   {
      name: "Kaiya Bains",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/kaiyabains/",
      imgUrl: coordKaiya,
   },
   {
      name: "Simran Nihalani",
      role: "Internal Coordinator",
      linkedin: "www.linkedin.com/in/simran-pnihalani",
      imgUrl: coordSimran,
   },
] as const;

// ================= Business Development =================
export const BUSINESS_DEVELOPMENT_TEAM: Member[] = [
   {
      name: "Francine Halim",
      role: "Business Development Director",
      linkedin: "https://www.linkedin.com/in/francinehalim/",
      //imgUrl: `${ABOUT_BUCKET}external-team/external-dir-tan.webp`,
      featuredImgUrl: bdFrancine,
      imgUrl: bdnFrancine,
   },
   {
      name: "Angela Lim",
      role: "Business Development Coordinator",
      linkedin: "https://www.linkedin.com/in/angelalim-/",
      //imgUrl: `${ABOUT_BUCKET}external-team/external-coord-lauren.webp`,
      imgUrl: coordAngela,
   },
   {
      name: "Audrey Wong",
      role: "Business Development Coordinator",
      linkedin: "https://www.linkedin.com/in/audreywongg/",
      //imgUrl: `${ABOUT_BUCKET}external-team/external-coord-sophie.webp`,
      imgUrl: coordAudrey,
   },
   {
      name: "Ethan Lauritzen",
      role: "Business Development Coordinator",
      linkedin: "https://www.linkedin.com/in/ethan-lauritzen/",
      //imgUrl: `${ABOUT_BUCKET}external-team/external-coord-josh.webp`,
      imgUrl: coordEthan,
   },
] as const;

// ================= Strategy =================
export const STRATEGY_TEAM: Member[] = [
   {
      name: "Jun Han",
      role: "Strategy Director",
      linkedin: "https://www.linkedin.com/in/yaejunhan/",
      //imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-dir-carol.webp`,
      featuredImgUrl: sJun,
      imgUrl: snJun,
   },
   {
      name: "Audrey Khin",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/audrey-k-5711a32b7/",
      //imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-audrey.webp`,
      imgUrl: scoordAudrey,
   },
   {
      name: "Ayumi Morita",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/ayumimorita/",
      //imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-ayumi.webp`,
      imgUrl: coordAyumi,
   },
   {
      name: "Jade Aw-Yeong",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/jadeaw-yeong/",
      //imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-jade.webp`,
      imgUrl: coordJade,
   },
   {
      name: "Tyson Tang",
      role: "Strategy Analyst",
      linkedin: "www.linkedin.com/in/tysontang2",
      //imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-tyson.webp`,
      imgUrl: coordTyson,
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
      imgUrl: enShirly,
   }, 
   {
      name: "Hasini Birlangi",
      role: "Events Coordinator",
      linkedin: "https://www.linkedin.com/in/hasini-birlangi-81b750257/",
      //imgUrl: `${ABOUT_BUCKET}events-team/events-coord-hasini.webp`,
      imgUrl: coordHasini,
   },
   {
      name: "Kaenan D'Cruz",
      role: "Events Coordinator",
      linkedin: "https://www.linkedin.com/in/kaenan-dcruz/",
      imgUrl: coordKaenan,
   },
   {
      name: "Sophia Bruchet",
      role: "Events Coordinator",
      linkedin: "www.linkedin.com/in/sophie-bruchet",
      imgUrl: coordeSophie,
   
   },
   {
      name: "Tabatha Acosta",
      role: "Events Coordinator",
      linkedin: "www.linkedin.com/in/tabatha-acosta-villasenor-68bb34244",
      imgUrl: coordTabatha,
   }
] as const;

// ================= Marketing Strategy =================
export const MARKETING_STRATEGY_TEAM: Member[] = [
   {
      name: "Kayla Jong",
      role: "Marketing Director",
      linkedin: "www.linkedin.com/in/kaylajong",
      //imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-dir-jessica.webp`,
      featuredImgUrl: msKayla,
      imgUrl: msnKayla,
   },
   {
      name: "Danielle Arcenal",
      role: "Marketing Coordinator",
      linkedin: "www.linkedin.com/in/danielle-arcenal",
      //imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-coord-danielle.webp`,
      imgUrl: coordDamielle,
   },
   {
      name: "Ling Ly",
      role: "Marketing Coordinator",
      linkedin: "www.linkedin.com/in/ling-lyy",
      //imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-coord-ling.webp`,
      imgUrl: coordLing,
   },
] as const;

// ================= Marketing Design =================
export const DESIGN_TEAM: Member[] = [
   {
      name: "Inarah Usmani",
      role: "Design Director",
      linkedin: "www.linkedin.com/in/inarahusmani ",
      //imgUrl: `${ABOUT_BUCKET}design-team/design-dir-inarah.webp`,
      featuredImgUrl: dInarah,
      imgUrl: dnInarah,
   },
   {
      name: "Laraine Sim",
      role: "Design Director",
      linkedin: "https://www.linkedin.com/in/laraine-sim",
      //imgUrl: `${ABOUT_BUCKET}design-team/design-dir-laraine.webp`,
      featuredImgUrl: dLaraine,
      imgUrl: dnLaraine,
   },
   {
      name: "Angelina Lim",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/angelina-jj-lim/",
      //imgUrl: `${ABOUT_BUCKET}design-team/design-coord-angelina.webp`,
      imgUrl: coordAngelina,
   },
   {
      name: "Rehma Adnan",
      role: "Design Coordinator",
      linkedin: "www.linkedin.com/in/rehma-adnan",
      //imgUrl: `${ABOUT_BUCKET}design-team/design-coord-rehma.webp`,
      imgUrl: coordRehma,
   },
   {
      name: "Sara Chung",
      role: "Design Coordinator",
      linkedin: "www.linkedin.com/in/saraknchung",
      //imgUrl: `${ABOUT_BUCKET}design-team/design-coord-sara.webp`,
      imgUrl: coordSara,
   },
   {
      name: "Sophia Tsai",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/sophia-tsai-kanon/",
      //imgUrl: `${ABOUT_BUCKET}design-team/design-coord-sophia.webp`,
      imgUrl: coordSophia,
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
      linkedin: "https://www.linkedin.com/in/abraham-mormontoy/",
      //imgUrl: `${ABOUT_BUCKET}web-dev-team/web-dir-abraham.webp`,
      imgUrl: wdAbraham,
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
   businessDevelopment: BUSINESS_DEVELOPMENT_TEAM, //
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
