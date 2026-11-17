// src/components/About/About.tsx
import {
   PageWrapper,
   ValuesRow,
   TeamSection,
   TeamSectionHeaderRow,
   TeamRowOuter,
   ScrollContainer,
   CardsTrack,
} from "./About.styled";

import Title from "$components/Title/Title";
import ImageCard from "$components/images/ImageCard/ImageCard";

// Consulting teams handled in constants/pages/about.ts
import {
   MANAGING_DIRECTORS,
   DIRECTORS,
   CONSULTING_TEAM_LEADS,
   INTERNAL_TEAM,
   BUSINESS_DEVELOPMENT_TEAM,
   STRATEGY_TEAM,
   MARKETING_STRATEGY_TEAM,
   DESIGN_TEAM,
   FINANCE_TEAM,
   WEB_DEV_TEAM,
   type Member,
} from "$constants/members";
import { FAKE_URL } from "$constants/utils";
import { TEAM_MEMBERS_URLS } from "$constants/image-utils/image-urls";
import { consultingTeams, featureBlocks } from "$constants/pages/about";

function TeamRow({
   people,
   teamTitle = "",
   teamSubtitle = "2026-2027", //* This should be updated each year manually */
   teamImgSrc = FAKE_URL,
   useFeaturedImg = false,
}: {
   people: Member[];
   teamTitle?: string;
   teamSubtitle?: string;
   teamImgSrc?: string;
   useFeaturedImg?: boolean; // optional prop to use featured image instead of default imgUrl
}) {
   // total cards that will render:
   const hasBanner = Boolean(teamTitle && teamSubtitle);
   const totalCards = (hasBanner ? 1 : 0) + people.length;

   // if fewer than 3 cards, center them instead of scroll & don't show banner
   const isLowCardCount = totalCards < 3;

   return (
      <TeamRowOuter>
         <ScrollContainer $center={isLowCardCount}>
            <CardsTrack $center={isLowCardCount}>
               {hasBanner && !isLowCardCount && (
                  <ImageCard
                     variant="bannerProfile"
                     title={teamTitle}
                     subtitle={teamSubtitle}
                     img={teamImgSrc}
                     size="team" // makes banner wider at lg
                     loading="lazy"
                  />
               )}

               {people.map((member, idx) => (
                  <ImageCard
                     key={idx}
                     variant="profile"
                     name={member.name}
                     position={member.role}
                     img={(useFeaturedImg && member.featuredImgUrl) || member.imgUrl || FAKE_URL}
                     //img={member.imgUrl ?? FAKE_URL}
                     clickTo={member.linkedin || undefined}
                     size="person"
                     loading="lazy"
                  />
               ))}
            </CardsTrack>
         </ScrollContainer>
      </TeamRowOuter>
   );
}

export default function About() {
   return (
      <PageWrapper>
         {/* Intro block */}
         <Title
            Header="Who We Are"
            Body="Discover more about our values, mission and vision for Axis Consulting. Meet the current team and some of our 212 alumni since 2012"
         />

         {/* Top hero cards: Values / Mission / Vision */}
         <ValuesRow>
            {featureBlocks.map((block, i) => (
               <ImageCard
                  key={i}
                  variant="feature"
                  header={block.header}
                  body={block.body}
                  img={block.img}
                  loading="lazy"
               />
            ))}
         </ValuesRow>

         {/* Managing Directors */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Managing Directors</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={MANAGING_DIRECTORS}
               teamTitle="Managing Directors"
               teamImgSrc={TEAM_MEMBERS_URLS.managing_directors}
            />
         </TeamSection>

         {/* Directors */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Executive Team</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={DIRECTORS} useFeaturedImg={true} teamImgSrc={TEAM_MEMBERS_URLS.executive_team} />
         </TeamSection>

         {/* Consulting Team leads */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Consulting Team Leads</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={CONSULTING_TEAM_LEADS} useFeaturedImg={true} teamImgSrc={TEAM_MEMBERS_URLS.consulting_team_leads} />
         </TeamSection>

         {/* Consulting Leads */}
         {consultingTeams.map((team) => (
            <TeamSection key={team.name}>
               <TeamSectionHeaderRow>
                  <h2>{team.name}</h2>
               </TeamSectionHeaderRow>
               <TeamRow
                  people={team.members}
                  teamTitle={team.name}
                  teamImgSrc={team.teamImgSrc}
               />
            </TeamSection>
         ))}

         {/* Internal Team */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Internal Team</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={INTERNAL_TEAM}
               teamTitle="Internal Team"
               teamImgSrc={TEAM_MEMBERS_URLS.internal_team}
            />
         </TeamSection>

         {/* Business Development Team */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Business Development Team</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={BUSINESS_DEVELOPMENT_TEAM}
               teamTitle="Business Development Team"
               teamImgSrc={TEAM_MEMBERS_URLS.external_team}
            />
         </TeamSection>

         {/* Strategy Team */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Strategy Team</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={STRATEGY_TEAM}
               teamTitle="Strategy Team"
               teamImgSrc={TEAM_MEMBERS_URLS.strategy_team}
            />
         </TeamSection>

         {/* Marketing Strategy */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Marketing Strategy</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={MARKETING_STRATEGY_TEAM}
               teamTitle="Marketing Strategy"
               teamImgSrc={TEAM_MEMBERS_URLS.marketing_strategy_team}
            />
         </TeamSection>

         {/* Design */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Design</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={DESIGN_TEAM}
               teamTitle="Design"
               teamImgSrc={TEAM_MEMBERS_URLS.marketing_design_team}
            />
         </TeamSection>

         {/* Finance */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Finance</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={FINANCE_TEAM} teamTitle="Finance" />
         </TeamSection>

         {/* Web Development */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Web Development</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={WEB_DEV_TEAM} teamTitle="Web Development" />
         </TeamSection>
      </PageWrapper>
   );
}
