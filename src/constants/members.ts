/*
 * Centralized file containing all team member information
 * Including names, roles, LinkedIn URLs, and optional profile images
 */

export interface Member {
   name: string;
   role: string;
   linkedin: string;
   imgUrl: string;
}

export interface TeamMembers {
   managingDirectors: Member[];
   directors: Member[];
   internal: Member[];
   external: Member[];
   strategy: Member[];
   marketingStrategy: Member[];
   marketingDesign: Member[];
   finance: Member[];
   webDev: Member[];
   consultingTeamLeads: Member[];
   consultingTeam1: Member[];
   consultingTeam2: Member[];
   consultingTeam3: Member[];
   consultingTeam4: Member[];
}

const ABOUT_BUCKET = "about-page/";

// ================= Managing Directors =================
export const MANAGING_DIRECTORS: Member[] = [
   {
      name: "Camille Sanchez",
      role: "Managing Director",
      linkedin: "https://www.linkedin.com/in/camillevpsanchez/",
      imgUrl: `${ABOUT_BUCKET}managing-directors/md-camille.webp`,
   },
   {
      name: "Andrew Novak",
      role: "Managing Director",
      linkedin: "https://www.linkedin.com/in/andrew-novak831/",
      imgUrl: `${ABOUT_BUCKET}managing-directors/md-andrew.webp`,
   },
] as const;

// ================= Internal =================
export const INTERNAL_TEAM: Member[] = [
   {
      name: "Hazel Liu",
      role: "Director of Internal",
      linkedin: "https://www.linkedin.com/in/hazel-liu-/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-dir-hazel.webp`,
   },
   {
      name: "Ishaq Ahmad",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/ishaq-ahmad06/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-ishaq.webp`,
   },
   {
      name: "Parniyan Namazi Fard",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/parniyannamazifard/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-parniyan.webp`,
   },
   {
      name: "Cole Afonso",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/cole-afonso-a10b9533b/",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-cole.webp`,
   },
   {
      name: "Kristen Ma",
      role: "Internal Coordinator",
      linkedin: "https://linkedin.com/in/kristen-ma-590296325",
      imgUrl: `${ABOUT_BUCKET}internal-team/internal-coord-kristen.webp`,
   },
] as const;

// ================= External =================
export const EXTERNAL_TEAM: Member[] = [
   {
      name: "Tan Vu",
      role: "Director of External",
      linkedin: "https://www.linkedin.com/in/tan-vu",
      imgUrl: `${ABOUT_BUCKET}external-team/external-dir-tan.webp`,
   },
   {
      name: "Lauren Lee",
      role: "External Coordinator",
      linkedin: "https://www.linkedin.com/in/laurenlee5",
      imgUrl: `${ABOUT_BUCKET}external-team/external-coord-lauren.webp`,
   },
   {
      name: "Sophie Long",
      role: "External Coordinator",
      linkedin: "https://www.linkedin.com/in/sophie-long-aa6a5933a/",
      imgUrl: `${ABOUT_BUCKET}external-team/external-coord-sophie.webp`,
   },
   {
      name: "Joshua Tam",
      role: "External Coordinator",
      linkedin: "https://www.linkedin.com/in/joshua-m-tam/",
      imgUrl: `${ABOUT_BUCKET}external-team/external-coord-josh.webp`,
   },
] as const;

// ================= Strategy =================
export const STRATEGY_TEAM: Member[] = [
   {
      name: "Carol Wang",
      role: "Director of Strategy",
      linkedin: "https://www.linkedin.com/in/wangmcarol/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-dir-carol.webp`,
   },
   {
      name: "Lucy Liu",
      role: "Director of Strategy",
      linkedin: "https://www.linkedin.com/in/lucyliuu/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-dir-lucy.webp`,
   },
   {
      name: "Jun Han",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/yaejunhan/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-jun.webp`,
   },
   {
      name: "Angela Lim",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/angelalim-",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-angela.webp`,
   },
   {
      name: "Marianne Li",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/marianne-li1311/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-marianne.webp`,
   },
   {
      name: "Helen Chen",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/helen-chen-65b832291/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-helen.webp`,
   },
   {
      name: "Shirly Zhou",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/shirly-zhou/",
      imgUrl: `${ABOUT_BUCKET}strategy-team/strategy-coord-shirly.webp`,
   },
] as const;

// ================= Marketing Strategy =================
export const MARKETING_STRATEGY_TEAM: Member[] = [
   {
      name: "Jessica Kan",
      role: "Director of Marketing Strategy",
      linkedin: "https://www.linkedin.com/in/jessicataokan",
      imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-dir-jessica.webp`,
   },
   {
      name: "Isabelle Lam",
      role: "Marketing Strategy Coordinator",
      linkedin: "https://www.linkedin.com/in/isabelle-lam-904a9b298/",
      imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-coord-isabelle.webp`,
   },
   {
      name: "Melissa Tabrizi",
      role: "Marketing Strategy Coordinator",
      linkedin: "https://www.linkedin.com/in/melissa-tabrizi/",
      imgUrl: `${ABOUT_BUCKET}marketing-team/marketing-coord-melissa.webp`,
   },
] as const;

// ================= Marketing Design =================
export const MARKETING_DESIGN_TEAM: Member[] = [
   {
      name: "Jayson Lee",
      role: "Director of Marketing Design",
      linkedin: "https://www.linkedin.com/in/jaydglee",
      imgUrl: `${ABOUT_BUCKET}design-team/design-dir-jayson.webp`,
   },
   {
      name: "Cathy Liang",
      role: "Marketing Design Coordinator",
      linkedin: "https://www.linkedin.com/in/cathy-liang/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-cathy.webp`,
   },
   {
      name: "Dylan Tse",
      role: "Marketing Design Coordinator",
      linkedin: "https://www.linkedin.com/in/dyltse",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-dylan.webp`,
   },
   {
      name: "August Othanavathakit",
      role: "Visual Media Coordinator",
      linkedin: "https://www.linkedin.com/in/augustothana",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-august.webp`,
   },
   {
      name: "Kal Kuan Chia",
      role: "Marketing Design Coordinator",
      linkedin: "https://www.linkedin.com/in/kal-kuan-chia-1a25242b8/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-kuan.webp`,
   },
   {
      name: "Maggie Chang",
      role: "Marketing Design Coordinator",
      linkedin: "https://www.linkedin.com/in/mag-chang/",
      imgUrl: `${ABOUT_BUCKET}design-team/design-coord-maggie.webp`,
   },
] as const;

// ================= Finance =================
export const FINANCE_TEAM: Member[] = [
   {
      name: "Tom Bui",
      role: "Director of Finance",
      linkedin: "https://www.linkedin.com/in/hungtombui/",
      imgUrl: `${ABOUT_BUCKET}finance-team/finance-dir-tom.webp`,
   },
] as const;

// ================= Web Development =================
export const WEB_DEV_TEAM: Member[] = [
   {
      name: "Jai Malhi",
      role: "Director of Web Development",
      linkedin: "https://www.linkedin.com/in/jaimalhi/",
      imgUrl: `${ABOUT_BUCKET}web-dev-team/web-dir-jai.webp`,
   },
] as const;

// ================= Team Ryan (Nebula) =================
export const TEAM_NEBULA: Member[] = [
   {
      name: "Ryan Thaulad",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/ryanthaulad",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/team-lead-ryan.webp`,
   },
   {
      name: "Sonakshi Rao",
      role: "Sr. Consultant",
      linkedin: "https://www.linkedin.com/in/sonakshi-rao/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/sr-consultant-sonakshi.webp`,
   },
   {
      name: "Nigel Mathias",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/nigel-mathias-b88095239",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-nigel.webp`,
   },
   {
      name: "Claire Dubois",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/clairedubois",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-claire.webp`,
   },
   {
      name: "Evan Elsaesser",
      role: "Consultant",
      linkedin: "https://linkedin.com/in/evan-elsaesser",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-evan.webp`,
   },
   {
      name: "Victor Suwantaweechoat",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/lertpong-suwantaweechoat/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nebula-ryan/consultant-victor.webp`,
   },
] as const;

// ================= Team Nathan (Nova) =================
export const TEAM_NOVA: Member[] = [
   {
      name: "Nathan Chu",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/nathan-chu-404a6b1b0/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/team-lead-nathan.webp`,
   },
   {
      name: "Clayton Campbell",
      role: "Sr. Consultant",
      linkedin: "https://www.linkedin.com/in/claytonkwcampbell/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/sr-consultant-clayton.webp`,
   },
   {
      name: "Matthias Chun",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/matthiaschun",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-matthias.webp`,
   },
   {
      name: "Vincent Kwan",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/vincentkkwan",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-vincent.webp`,
   },
   {
      name: "Nika Saeedi",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/nika-saeedi",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-nika.webp`,
   },
   {
      name: "Lucy Liu",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/lucyliuu/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-nova-nathan/consultant-lucy.webp`,
   },
] as const;

// ================= Team Sabrina (Polaris) =================
export const TEAM_POLARIS: Member[] = [
   {
      name: "Sabrina Wang",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/sabrinawang9/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-polaris-sabrina/team-lead-sabrina.webp`,
   },
   {
      name: "Sachkeerat Sandhu",
      role: "Sr. Consultant",
      linkedin: "https://www.linkedin.com/in/sachkeeratsandhu/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-polaris-sabrina/sr-consultant-sachkeerat.webp`,
   },
   {
      name: "Salmaan Shariff",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/salmaanshariff/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-polaris-sabrina/consultant-salmaan.webp`,
   },
   {
      name: "Enya Zeng",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/enyazeng/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-polaris-sabrina/consultant-enya.webp`,
   },
   {
      name: "Dmitri Folomeyev",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/dfolomeyev/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-polaris-sabrina/consultant-dmitri.webp`,
   },
   {
      name: "Francine Halim",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/francinehalim/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-polaris-sabrina/consultant-francine.webp`,
   },
] as const;

// ================= Team Sam (Eclipse) =================
export const TEAM_ECLIPSE: Member[] = [
   {
      name: "Samuel McCallen",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/samuel-mccallen",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eclipse-sam/team-lead-sam.webp`,
   },
   {
      name: "Albel Singh Dhanoa",
      role: "Sr. Consultant",
      linkedin: "https://www.linkedin.com/in/albel-dhanoa/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eclipse-sam/sr-consultant-albel.webp`,
   },
   {
      name: "Daria Zakharova",
      role: "Consultant",
      linkedin: "https://linkedin.com/in/dariaazakharova",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eclipse-sam/consultant-daria.webp`,
   },
   {
      name: "Krish Rajput",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/krishrajput2305",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eclipse-sam/consultant-krish.webp`,
   },
   {
      name: "Angela Bui",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/angela-bui-2829182b1",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eclipse-sam/consultant-angela.webp`,
   },
   {
      name: "Edric Lagrisola",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/edric-lagrisola/",
      imgUrl: `${ABOUT_BUCKET}consulting/team-eclipse-sam/consultant-edric.webp`,
   },
] as const;

// ================= Directors =================
export const DIRECTORS: Member[] = [
   INTERNAL_TEAM[0], // Hazel Liu
   EXTERNAL_TEAM[0], // Tan Vu
   STRATEGY_TEAM[0], // Carol Wang
   STRATEGY_TEAM[1], // Lucy Liu
   MARKETING_STRATEGY_TEAM[0], // Jessica Kan
   MARKETING_DESIGN_TEAM[0], // Jayson Lee
   FINANCE_TEAM[0], // Tom Bui
   WEB_DEV_TEAM[0], // Jai Malhi
] as const;

// ================= Consulting Team Leads =================
export const CONSULTING_TEAM_LEADS: Member[] = [
   TEAM_NEBULA[0], // Ryan Thaulad
   TEAM_NOVA[0], // Nathan Chu
   TEAM_POLARIS[0], // Sabrina Wang
   TEAM_ECLIPSE[0], // Samuel McCallen
] as const;

// ================= All Members Export =================
export const ALL_MEMBERS: TeamMembers = {
   managingDirectors: MANAGING_DIRECTORS,
   directors: DIRECTORS,
   internal: INTERNAL_TEAM,
   external: EXTERNAL_TEAM,
   strategy: STRATEGY_TEAM,
   marketingStrategy: MARKETING_STRATEGY_TEAM,
   marketingDesign: MARKETING_DESIGN_TEAM,
   finance: FINANCE_TEAM,
   webDev: WEB_DEV_TEAM,
   consultingTeamLeads: CONSULTING_TEAM_LEADS,
   consultingTeam1: TEAM_NEBULA,
   consultingTeam2: TEAM_NOVA,
   consultingTeam3: TEAM_POLARIS,
   consultingTeam4: TEAM_ECLIPSE,
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
      member.role.toLowerCase().includes(role.toLowerCase())
   );
};

// Get all consultants
export const getAllConsultants = (): Member[] => {
   return [
      ...TEAM_NEBULA.filter((m) => m.role.includes("Consultant")),
      ...TEAM_NOVA.filter((m) => m.role.includes("Consultant")),
      ...TEAM_POLARIS.filter((m) => m.role.includes("Consultant")),
      ...TEAM_ECLIPSE.filter((m) => m.role.includes("Consultant")),
   ];
};

// Get all coordinators
export const getAllCoordinators = (): Member[] => {
   return getAllUniqueMembers().filter((member) => member.role.includes("Coordinator"));
};
