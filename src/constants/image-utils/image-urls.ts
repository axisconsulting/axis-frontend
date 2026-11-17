// URLs for all home page image assets using R2 path

import managingDirectors from "../test-img/managing-directors/managing-directors.webp"
import teamLeads from "../test-img/team leads/team-leads.webp"

export const TEAM_MEMBERS_URLS = {
   //managing_directors: "about-page/managing-directors/managing-directors.webp",
   managing_directors: managingDirectors,
   md_funny: "about-page/managing-directors/md-funny.webp",
   team_leads: "about-page/team-leads.webp",
   consulting_team_leads: teamLeads,
   executive_team: "about-page/executive-team.webp",
   team_eucalyptus_albel: "about-page/consulting/team-eucalyptus-ryan/team-ryan-eucalyptus.webp",
   team_redwood_sachkeerat: "about-page/consulting/team-redwood-sachkeerat/team-sachkeerat-redwood.webp",
   team_willow_daria: "about-page/consulting/team-willow-daria/team-daria-willow.webp",
   internal_team: "about-page/internal-team/internal-all.webp",
   external_team: "about-page/external-team/external-all.webp",
   strategy_team: "about-page/strategy-team/strategy-all.webp",
   marketing_strategy_team: "about-page/marketing-team/marketing-all.webp",
   marketing_design_team: "about-page/design-team/design-all.webp",
} as const;
