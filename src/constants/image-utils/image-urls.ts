// URLs for all home page image assets using R2 path

import managingDirectors from "../test-img/managing-directors/managing-directors.webp"
import teamLeads from "../test-img/team-leads/team-leads.webp"
import teamEucalyptusAlbel from "../test-img/team-eucalyptus/team-photo.webp"
import teamRedwoodSachkeerat from "../test-img/team-redwood/team-photo.webp"
import teamWillowDaria from "../test-img/team-willow/team-photo.webp"

import teamInternal from "../test-img/team-internal/team-photo.webp"
import teamBusinessDevelopment from "../test-img/team-business-development/team-photo.webp"
import teamStrategy from "../test-img/team-strategy/team-photo.webp"
import teamMarketingStrategy from "../test-img/team-marketing-strategy/team-photo.webp"
import teamDesign from "../test-img/team-design/team-photo.webp"
import teamEvents from "../test-img/team-events/team-photo.webp"

export const TEAM_MEMBERS_URLS = {
   //managing_directors: "about-page/managing-directors/managing-directors.webp",
   managing_directors: managingDirectors,
   md_funny: "about-page/managing-directors/md-funny.webp",
   team_leads: "about-page/team-leads.webp",
   consulting_team_leads: teamLeads,
   executive_team: "about-page/executive-team.webp",
   //team_eucalyptus_albel: "about-page/consulting/team-eucalyptus-ryan/team-ryan-eucalyptus.webp",
   team_eucalyptus_albel: teamEucalyptusAlbel,
   //team_redwood_sachkeerat: "about-page/consulting/team-redwood-sachkeerat/team-sachkeerat-redwood.webp",
   team_redwood_sachkeerat: teamRedwoodSachkeerat,
   //team_willow_daria: "about-page/consulting/team-willow-daria/team-daria-willow.webp",
   team_willow_daria: teamWillowDaria,
   //internal_team: "about-page/internal-team/internal-all.webp",
   internal_team: teamInternal,
   business_development_team: teamBusinessDevelopment,
   strategy_team: teamStrategy,
   //events_team: "about-page/events-team/events-all.webp",
   //marketing_strategy_team: "about-page/marketing-team/marketing-all.webp",
   marketing_strategy_team: teamMarketingStrategy,
   //marketing_design_team: "about-page/design-team/design-all.webp",
   marketing_design_team: teamDesign,
   events_team: teamEvents,
} as const;
