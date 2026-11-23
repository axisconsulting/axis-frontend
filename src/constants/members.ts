/*
 * Centralized file containing all team member information
 * Including names, roles, LinkedIn URLs, and optional profile images
 */
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
      imgUrl: `${ABOUT_BUCKET}managing-directors/md-sam.webp`,
   },
   {
      name: "Tan Vu",
      role: "Managing Director",
      linkedin: "https://www.linkedin.com/in/tan-vu/",
      imgUrl: `${ABOUT_BUCKET}managing-directors/md-tan.webp`,
   },
] as const;

// ================= Team Albel (Eucalyptus) =================
export const TEAM_EUCALYPTUS: Member[] = [
   {
      name: "Albel Dhanoa",
      role: "Consulting Team Lead",
      linkedin: "https://linkedin.com/in/albel-dhanoa",
      featuredImgUrl: `${ABOUT_BUCKET}team-leads/TL-abel.webp`,
      imgUrl: `${ABOUT_BUCKET}consulting/team-eucalyptus-albel/team-lead-albel.webp`,
   },
   {
      name: "Dmitri Folomeyev",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/dfolomeyev/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eucalyptus-albel/consultant-dmitri.webp`,
   },
   {
      name: "Alijawad Ali",
      role: "Consultant",
      linkedin: "https://linkedin.com/in/alijawad-ali",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eucalyptus-albel/consultant-alijawad.webp`,
   },
   {
      name: "Jassveen Kaur",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/kaurjassveen234/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eucalyptus-albel/consultant-jassveen.webp`,
   },
   {
      name: "Makeyla Truong",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/makeylat/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eucalyptus-albel/consultant-makeyla.webp`,
   },
   {
      name: "Tyler Tan",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/tylerntan/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eucalyptus-albel/consultant-tyler.webp`,
   },
] as const;


// ================= Team Sachkeerat (Redwood) =================
export const TEAM_REDWOOD: Member[] = [
   {
      name: "Sachkeerat Sandhu",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/sachkeeratsandhu/",
      featuredImgUrl: `${ABOUT_BUCKET}team-leads/TL-sachkeerat.webp`,
      imgUrl: `${ABOUT_BUCKET}consulting/team-redwood-sachkeerat/team-lead-sach.webp`,
   },
   {
      name: "Eric Pan",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/ericpan06/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-redwood-sachkeerat/consultant-eric.webp`,
   },
   {
      name: "Giselle Rafe",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/gisellerafe/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-redwood-sachkeerat/consultant-giselle.webp`,
   },
   {
      name: "Wilson Yueng",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/wilsonyueng/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-redwood-sachkeerat/consultant-wilson.webp`,
   },
   {
      name: "Joshua Oladokun",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/joshua-oladokun-47aab0303",
      imgUrl: `${ABOUT_BUCKET}consulting/team-redwood-sachkeerat/consultant-joshua.webp`,
   },
   {
      name: "Preethi Chidambaran",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/preethi-ca/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-redwood-sachkeerat/consultant-preethi.webp`,
   },
] as const;


// ================= Team Daria (Willow) =================
export const TEAM_WILLOW: Member[] = [
   {
      name: "Daria Zakharova",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/dariazakharova/",
      featuredImgUrl: `${ABOUT_BUCKET}team-leads/TL-daria.webp`,
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow-daria/team-lead-daria.webp`,
   },
   {
      name: "Seojin Yoon",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/seojin-yoon-397a50302/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow-daria/consultant-seojin.webp`,
   },
   {
      name: "Khue Nguyen",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/khue-nguyen/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow-daria/consultant-khue.webp`,
   },
   {
      name: "Max Gu",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/max-gu-aa916b388/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow-daria/consultant-max.webp`,
   },
   {
      name: "Winnie Wang",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/winniiewg/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow-daria/consultant-winnie.webp`,
   },
   {
      name: "Phineas Tran",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/phineas-tran",
      imgUrl: `${ABOUT_BUCKET}consulting/team-willow-daria/consultant-phineas.webp`,
   },
] as const;

// ================= Internal =================
export const INTERNAL_TEAM: Member[] = [
   {
      name: "Sabrina Wang",
      role: "Internal Director",
      linkedin: "https://www.linkedin.com/in/sabrinawang9/",
      featuredImgUrl: `${ABOUT_BUCKET}executives/internal-sabrina.webp`,
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-dir-sabrina.webp`,
   },
   {
      name: "Aubrey Muirhead",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/aubrey-muirhead-a568b0218/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-aubrey.webp`,
   },
   {
      name: "Kaiya Bains",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/kaiyabains/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-kaiya.webp`,
   },
   {
      name: "Simran Nihalani",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/simran-pnihalani/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-simran.webp`,
   },
] as const;

// ================= Business Development =================
export const BUSINESS_DEVELOPMENT_TEAM: Member[] = [
   {
      name: "Francine Halim",
      role: "Business Development Director",
      linkedin: "https://www.linkedin.com/in/francinehalim/",
      featuredImgUrl: `${ABOUT_BUCKET}executives/business-development-francine.webp`,
      imgUrl: `${ABOUT_BUCKET}business-development-team/business-dev-dir-francine.webp`,
   },
   {
      name: "Angela Lim",
      role: "Business Development Coordinator",
      linkedin: "https://www.linkedin.com/in/angelalim-/",
      imgUrl: `${ABOUT_BUCKET}business-development-team/business-dev-coord-angela.webp`,
   },
   {
      name: "Audrey Wong",
      role: "Business Development Coordinator",
      linkedin: "https://www.linkedin.com/in/audreywongg/",
      imgUrl: `${ABOUT_BUCKET}business-development-team/business-dev-coord-audrey.webp`,
   },
   {
      name: "Ethan Lauritzen",
      role: "Business Development Coordinator",
      linkedin: "https://www.linkedin.com/in/ethan-lauritzen/",
      imgUrl: `${ABOUT_BUCKET}business-development-team/business-dev-coord-ethan.webp`,
   },
] as const;

// ================= Strategy =================
export const STRATEGY_TEAM: Member[] = [
   {
      name: "Jun Han",
      role: "Strategy Director",
      linkedin: "https://www.linkedin.com/in/yaejunhan/",
      //imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-dir-carol.webp`,
      featuredImgUrl: `${ABOUT_BUCKET}executives/strategy-jun.webp`,
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-dir-jun.webp`,
   },
   {
      name: "Audrey Khin",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/audrey-k-5711a32b7/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-audrey.webp`,
   },
   {
      name: "Ayumi Morita",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/ayumimorita/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-ayumi.webp`,
   },
   {
      name: "Jade Aw-Yeong",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/jadeaw-yeong/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-jade.webp`,
   },
   {
      name: "Tyson Tang",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/tysontang2",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-tyson.webp`,
   },
] as const;

// ================= Events =================
export const EVENTS_TEAM: Member[] = [
   {
      name: "Shirly Zhou",
      role: "Events Director",
      linkedin: "https://www.linkedin.com/in/shirly-zhou/",
      featuredImgUrl: `${ABOUT_BUCKET}executives/events-shirly.webp`,
      imgUrl: `${ABOUT_BUCKET}events-team/events-dir-shirly.webp`,
   }, 
   {
      name: "Hasini Birlangi",
      role: "Events Coordinator",
      linkedin: "https://www.linkedin.com/in/hasini-birlangi-81b750257/",
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
      linkedin: "https://www.linkedin.com/in/sophie-bruchet/",
      imgUrl: `${ABOUT_BUCKET}events-team/events-coord-sophie.webp`,
   
   },
   {
      name: "Tabatha Acosta",
      role: "Events Coordinator",
      linkedin: "https://www.linkedin.com/in/tabatha-acosta-villasenor-68bb34244",
      imgUrl: `${ABOUT_BUCKET}events-team/events-coord-tabatha.webp`,
   }
] as const;

// ================= Marketing Strategy =================
export const MARKETING_STRATEGY_TEAM: Member[] = [
   {
      name: "Kayla Jong",
      role: "Marketing Director",
      linkedin: "https://www.linkedin.com/in/kaylajong/",
      featuredImgUrl: `${ABOUT_BUCKET}executives/marketing-strategy-kayla.webp`,
      imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-dir-kayla.webp`,
   },
   {
      name: "Danielle Arcenal",
      role: "Marketing Coordinator",
      linkedin: "https://www.linkedin.com/in/danielle-arcenal/",
      imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-coord-danielle.webp`,
   },
   {
      name: "Ling Ly",
      role: "Marketing Coordinator",
      linkedin: "https://www.linkedin.com/in/ling-lyy",
      imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-coord-ling.webp`,
   },
] as const;

// ================= Marketing Design =================
export const DESIGN_TEAM: Member[] = [
   {
      name: "Inarah Usmani",
      role: "Design Director",
      linkedin: "https://www.linkedin.com/in/inarahusmani/",
      featuredImgUrl: `${ABOUT_BUCKET}executives/design-inarah.webp`,
      imgUrl: `${ABOUT_BUCKET}design-team/design-director-inarah.webp`,
   },
   {
      name: "Laraine Sim",
      role: "Design Director",
      linkedin: "https://www.linkedin.com/in/laraine-sim",
      featuredImgUrl: `${ABOUT_BUCKET}executives/design-laraine.webp`,
      imgUrl: `${ABOUT_BUCKET}design-team/design-director-laraine.webp`,
   },
   {
      name: "Angelina Lim",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/angelina-jj-lim/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-angelina.webp`,
   },
   {
      name: "Rehma Adnan",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/rehma-adnan/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coordinator-rehma.webp`,
   },
   {
      name: "Sara Chung",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/saraknchung",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coordinator-sara.webp`,
   },
   {
      name: "Sophia Tsai",
      role: "Design Coordinator",
      linkedin: "https://www.linkedin.com/in/sophia-tsai-kanon/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coordinator-sophia.webp`,
   },
] as const;

// ================= Finance =================
export const FINANCE_TEAM: Member[] = [
   {
      name: "Vincent Kwan",
      role: "Finance Director",
      linkedin: "https://www.linkedin.com/in/vincentkkwan",
      featuredImgUrl: `${ABOUT_BUCKET}executives/finance-vincent.webp`,
      imgUrl: `${ABOUT_BUCKET}executives/finance-vincent.webp`,
   },
] as const;

// ================= Web Development =================
export const WEB_DEV_TEAM: Member[] = [
   {
      name: "Abraham Mormontoy",
      role: "Web Development Director",
      linkedin: "https://www.linkedin.com/in/abraham-mormontoy/",
      featuredImgUrl: `${ABOUT_BUCKET}executives/web-dev-abraham.webp`,
      imgUrl: `${ABOUT_BUCKET}executives/web-dev-abraham.webp`,
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
