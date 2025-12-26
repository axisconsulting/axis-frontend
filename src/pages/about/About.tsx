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
   INTERNAL_TEAM,
   EXTERNAL_TEAM,
   STRATEGY_TEAM,
   MARKETING_STRATEGY_TEAM,
   MARKETING_DESIGN_TEAM,
   FINANCE_TEAM,
   WEB_DEV_TEAM,
   CONSULTING_TEAM_LEADS,
   type Member,
} from "$constants/members";
import { currentYear, FAKE_URL } from "$constants/utils";
import { TEAM_MEMBERS_URLS } from "$constants/image-utils/image-urls";
import { consultingTeams, featureBlocks } from "$constants/pages/about";

function TeamRow({
   people,
   teamTitle = "",
   teamSubtitle = `${currentYear}-${currentYear + 1}`,
   teamImgSrc = FAKE_URL,
}: {
   people: Member[];
   teamTitle?: string;
   teamSubtitle?: string;
   teamImgSrc?: string;
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
                     img={member.imgUrl ?? FAKE_URL}
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
            <TeamRow people={DIRECTORS} teamImgSrc={TEAM_MEMBERS_URLS.executive_team} />
         </TeamSection>

         {/* Consulting Leads */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Consulting Team Leads</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={CONSULTING_TEAM_LEADS} teamImgSrc={TEAM_MEMBERS_URLS.team_leads} />
         </TeamSection>

         {/* Consulting Teams */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>{consultingTeams[0].name}</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={consultingTeams[0].members}
               teamTitle={consultingTeams[0].name}
               teamImgSrc={consultingTeams[0].teamImgSrc}
            />
         </TeamSection>

         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>{consultingTeams[1].name}</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={consultingTeams[1].members}
               teamTitle={consultingTeams[1].name}
               teamImgSrc={consultingTeams[1].teamImgSrc}
            />
         </TeamSection>

         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>{consultingTeams[2].name}</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={consultingTeams[2].members}
               teamTitle={consultingTeams[2].name}
               teamImgSrc={consultingTeams[2].teamImgSrc}
            />
         </TeamSection>

         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>{consultingTeams[3].name}</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={consultingTeams[3].members}
               teamTitle={consultingTeams[3].name}
               teamImgSrc={consultingTeams[3].teamImgSrc}
            />
         </TeamSection>

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

         {/* External Team */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>External Team</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={EXTERNAL_TEAM}
               teamTitle="External Team"
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

         {/* Marketing Design */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Marketing Design</h2>
            </TeamSectionHeaderRow>
            <TeamRow
               people={MARKETING_DESIGN_TEAM}
               teamTitle="Marketing Design"
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
