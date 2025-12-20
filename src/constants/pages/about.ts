import { TEAM_MEMBERS_URLS } from "$constants/image-utils/image-urls";
import { TEAM_ECLIPSE, TEAM_NEBULA, TEAM_NOVA, TEAM_POLARIS } from "$constants/members";

// hero section content
export const featureBlocks = [
   {
      header: "Our Values",
      body: "We aim to create a platform for students of all perspectives to experience real-world consulting",
      img: TEAM_MEMBERS_URLS.team_leads,
   },
   {
      header: "Our Mission",
      body: "To support undergraduate students in understanding and preparing for careers in consulting through experiential learning opportunities",
      img: TEAM_MEMBERS_URLS.executive_team,
   },
   {
      header: "Our Vision",
      body: "Empowering undergraduate students to excel in consulting careers through hands-on learning and real-world client engagements",
      img: TEAM_MEMBERS_URLS.md_funny,
   },
];

export const consultingTeams = [
   { name: "Team Nebula", members: TEAM_NEBULA, teamImgSrc: TEAM_MEMBERS_URLS.team_nebula_ryan },
   { name: "Team Nova", members: TEAM_NOVA, teamImgSrc: TEAM_MEMBERS_URLS.team_nova_nathan },
   {
      name: "Team Polaris",
      members: TEAM_POLARIS,
      teamImgSrc: TEAM_MEMBERS_URLS.team_polaris_sabrina,
   },
   { name: "Team Eclipse", members: TEAM_ECLIPSE, teamImgSrc: TEAM_MEMBERS_URLS.team_eclipse_sam },
];
