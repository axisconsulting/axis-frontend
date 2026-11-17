import { TEAM_MEMBERS_URLS } from "$constants/image-utils/image-urls";
import { TEAM_EUCALYPTUS, TEAM_REDWOOD, TEAM_WILLOW } from "$constants/members";

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
   { name: "Team Eucalyptus", members: TEAM_EUCALYPTUS, teamImgSrc: TEAM_MEMBERS_URLS.team_eucalyptus_albel },
   { name: "Team Redwood", members: TEAM_REDWOOD, teamImgSrc: TEAM_MEMBERS_URLS.team_redwood_sachkeerat },
   { name: "Team Willow", members: TEAM_WILLOW, teamImgSrc: TEAM_MEMBERS_URLS.team_willow_daria },
];
