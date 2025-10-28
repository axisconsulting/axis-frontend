/*
 * Centralized file containing all team member information
 * Including names, roles, LinkedIn URLs, and optional profile images
 */

export interface Member {
   name: string;
   role: string;
   linkedin: string;
   imgUrl?: string;
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

// ================= Managing Directors =================
export const MANAGING_DIRECTORS: Member[] = [
   {
      name: "Camille Sanchez",
      role: "Managing Director",
      linkedin: "https://www.linkedin.com/in/camillevpsanchez/",
   },
   {
      name: "Andrew Novak",
      role: "Managing Director",
      linkedin: "https://www.linkedin.com/in/andrew-novak831/",
   },
] as const;

// ================= Consulting Team Leads =================
export const CONSULTING_TEAM_LEADS: Member[] = [
   {
      name: "Nathan Chu",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/nathan-chu-404a6b1b0/",
   },
   {
      name: "Sabrina Wang",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/sabrinawang9/",
   },
   {
      name: "Ryan Thauald",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/ryanthaulad",
   },
   {
      name: "Samuel McCallen",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/samuel-mccallen",
   },
] as const;

// ================= Directors =================
export const DIRECTORS: Member[] = [
   {
      name: "Tom Bui",
      role: "Director of Finance",
      linkedin: "https://www.linkedin.com/in/hungtombui/",
   },
   {
      name: "Hazel Liu",
      role: "Director of Internal",
      linkedin: "https://www.linkedin.com/in/hazel-liu-/",
   },
   {
      name: "Tan Vu",
      role: "Director of External",
      linkedin: "https://www.linkedin.com/in/tan-vu",
   },
   {
      name: "Carol Wang",
      role: "Director of Strategy",
      linkedin: "https://www.linkedin.com/in/wangmcarol/",
   },
   {
      name: "Lucy Liu",
      role: "Director of Strategy",
      linkedin: "https://www.linkedin.com/in/lucyliuu/",
   },
   {
      name: "Jayson Lee",
      role: "Director of Marketing Design",
      linkedin: "https://www.linkedin.com/in/jaydglee",
   },
   {
      name: "Jessica Kan",
      role: "Director of Marketing Strategy",
      linkedin: "https://www.linkedin.com/in/jessicataokan",
   },
   {
      name: "Jai Malhi",
      role: "Director of Web Development",
      linkedin: "https://www.linkedin.com/in/jaimalhi/",
   },
] as const;

// ================= Finance =================
export const FINANCE_TEAM: Member[] = [
   {
      name: "Tom Bui",
      role: "Director of Finance",
      linkedin: "https://www.linkedin.com/in/hungtombui/",
   },
] as const;

// ================= Internal =================
export const INTERNAL_TEAM: Member[] = [
   {
      name: "Hazel Liu",
      role: "Director of Internal",
      linkedin: "https://www.linkedin.com/in/hazel-liu-/",
   },
   {
      name: "Ishaq Ahmad",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/ishaq-ahmad06/",
   },
   {
      name: "Parniyan Namazi Fard",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/parniyannamazifard/",
   },
   {
      name: "Cole Afonso",
      role: "Internal Coordinator",
      linkedin: "https://www.linkedin.com/in/cole-afonso-a10b9533b/",
   },
   {
      name: "Kristen Ma",
      role: "Internal Coordinator",
      linkedin: "https://linkedin.com/in/kristen-ma-590296325",
   },
] as const;

// ================= External =================
export const EXTERNAL_TEAM: Member[] = [
   {
      name: "Tan Vu",
      role: "Director of External",
      linkedin: "https://www.linkedin.com/in/tan-vu",
   },
   {
      name: "Lauren Lee",
      role: "External Coordinator",
      linkedin: "https://www.linkedin.com/in/laurenlee5",
   },
   {
      name: "Sophie Long",
      role: "External Coordinator",
      linkedin: "https://www.linkedin.com/in/sophie-long-aa6a5933a/",
   },
   {
      name: "Joshua Tam",
      role: "External Coordinator",
      linkedin: "https://www.linkedin.com/in/joshua-m-tam/",
   },
] as const;

// ================= Strategy =================
export const STRATEGY_TEAM: Member[] = [
   {
      name: "Carol Wang",
      role: "Director of Strategy",
      linkedin: "https://www.linkedin.com/in/wangmcarol/",
   },
   {
      name: "Lucy Liu",
      role: "Director of Strategy",
      linkedin: "https://www.linkedin.com/in/lucyliuu/",
   },
   {
      name: "Jun Han",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/yaejunhan/",
   },
   {
      name: "Angela Lim",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/angelalim-",
   },
   {
      name: "Marianne Li",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/marianne-li1311/",
   },
   {
      name: "Helen Chen",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/helen-chen-65b832291/",
   },
   {
      name: "Shirly Zhou",
      role: "Strategy Analyst",
      linkedin: "https://www.linkedin.com/in/shirly-zhou/",
   },
] as const;

// ================= Marketing Strategy =================
export const MARKETING_STRATEGY_TEAM: Member[] = [
   {
      name: "Jessica Kan",
      role: "Director of Marketing Strategy",
      linkedin: "https://www.linkedin.com/in/jessicataokan",
   },
   {
      name: "Isabelle Lam",
      role: "Marketing Strategy Coordinator",
      linkedin: "https://www.linkedin.com/in/isabelle-lam-904a9b298/",
   },
   {
      name: "Melissa Tabrizi",
      role: "Marketing Strategy Coordinator",
      linkedin: "https://www.linkedin.com/in/melissa-tabrizi/",
   },
] as const;

// ================= Marketing Design =================
export const MARKETING_DESIGN_TEAM: Member[] = [
   {
      name: "Jayson Lee",
      role: "Director of Marketing Design",
      linkedin: "https://www.linkedin.com/in/jaydglee",
   },
   {
      name: "Cathy Liang",
      role: "Marketing Design Coordinator",
      linkedin: "https://www.linkedin.com/in/cathy-liang/",
   },
   {
      name: "Dylan Tse",
      role: "Marketing Design Coordinator",
      linkedin: "https://www.linkedin.com/in/dyltse",
   },
   {
      name: "August Othanavathakit",
      role: "Visual Media Coordinator",
      linkedin: "https://www.linkedin.com/in/augustothana",
   },
   {
      name: "Maggie Chang",
      role: "Marketing Design Coordinator",
      linkedin: "https://www.linkedin.com/in/mag-chang/",
   },
   {
      name: "Kal Kuan Chia",
      role: "Marketing Design Coordinator",
      linkedin: "https://www.linkedin.com/in/kal-kuan-chia-1a25242b8/",
   },
] as const;

// ================= Web Development =================
export const WEB_DEV_TEAM: Member[] = [
   {
      name: "Jai Malhi",
      role: "Director of Web Development",
      linkedin: "https://www.linkedin.com/in/jaimalhi/",
   },
] as const;

// ================= Team Ryan (Nebula) =================
export const TEAM_NEBULA: Member[] = [
   {
      name: "Ryan Thauald",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/ryanthaulad",
   },
   {
      name: "Sonakshi Rao",
      role: "Sr. Consultant",
      linkedin: "https://www.linkedin.com/in/sonakshi-rao/",
   },
   {
      name: "Nigel Mathias",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/nigel-mathias-b88095239",
   },
   {
      name: "Claire Dubois",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/clairedubois",
   },
   {
      name: "Victor Suwantaweechoat",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/lertpong-suwantaweechoat/",
   },
   {
      name: "Evan Elsaesser",
      role: "Consultant",
      linkedin: "https://linkedin.com/in/evan-elsaesser",
   },
] as const;

// ================= Team Nathan (Nova) =================
export const TEAM_NOVA: Member[] = [
   {
      name: "Nathan Chu",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/nathan-chu-404a6b1b0/",
   },
   {
      name: "Clayton Campbell",
      role: "Sr. Consultant",
      linkedin: "https://www.linkedin.com/in/claytonkwcampbell/",
   },
   {
      name: "Matthias Chun",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/matthiaschun",
   },
   {
      name: "Vincent Kwan",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/vincentkkwan",
   },
   {
      name: "Nika Saeedi",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/nika-saeedi",
   },
   {
      name: "Lucy Liu",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/lucyliuu/",
   },
] as const;

// ================= Team Sabrina (Polaris) =================
export const TEAM_POLARIS: Member[] = [
   {
      name: "Sabrina Wang",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/sabrinawang9/",
   },
   {
      name: "Sachkeerat Sandhu",
      role: "Sr. Consultant",
      linkedin: "https://www.linkedin.com/in/sachkeeratsandhu/",
   },
   {
      name: "Salmaan Shariff",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/salmaanshariff/",
   },
   {
      name: "Enya Zeng",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/enyazeng/",
   },
   {
      name: "Dmitri Folomeyev",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/dfolomeyev/",
   },
   {
      name: "Francine Halim",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/francinehalim/",
   },
] as const;

// ================= Team Sam (Eclipse) =================
export const TEAM_ECLIPSE: Member[] = [
   {
      name: "Samuel McCallen",
      role: "Consulting Team Lead",
      linkedin: "https://www.linkedin.com/in/samuel-mccallen",
   },
   {
      name: "Albel Singh Dhanoa",
      role: "Sr. Consultant",
      linkedin: "", // No LinkedIn URL provided
   },
   {
      name: "Daria Zakharova",
      role: "Consultant",
      linkedin: "https://linkedin.com/in/dariaazakharova",
   },
   {
      name: "Krish Rajput",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/krishrajput2305",
   },
   {
      name: "Angela Bui",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/angela-bui-2829182b1",
   },
   {
      name: "Edric Lagrisola",
      role: "Consultant",
      linkedin: "https://www.linkedin.com/in/edric-lagrisola/",
   },
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
