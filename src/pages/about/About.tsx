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
   TEAM_NEBULA,
   TEAM_NOVA,
   TEAM_POLARIS,
   TEAM_ECLIPSE,
   type Member,
} from "$constants/members";
import { currentYear } from "$constants/utils";

const TEMP_URL = "https://fakeimage.com/400x300.png";

// hero section content
const featureBlocks = [
   {
      header: "Our Values",
      body: "We aim to create a platform for students of all perspectives to experience real-world consulting.",
      img: TEMP_URL,
   },
   {
      header: "Our Mission",
      body: "To support undergraduate students in understanding and preparing for careers in consulting through experiential learning opportunities.",
      img: TEMP_URL,
   },
   {
      header: "Our Vision",
      body: "Empowering undergraduate students to excel in consulting careers through hands-on learning and real-world client engagements.",
      img: TEMP_URL,
   },
];

const consultingTeams = [
   { name: "Team Nebula", members: TEAM_NEBULA },
   { name: "Team Nova", members: TEAM_NOVA },
   { name: "Team Polaris", members: TEAM_POLARIS },
   { name: "Team Eclipse", members: TEAM_ECLIPSE },
];

function TeamRow({
   people,
   teamTitle = "",
   teamSubtitle = `${currentYear}-${currentYear + 1}`,
}: {
   people: Member[];
   teamTitle?: string;
   teamSubtitle?: string;
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
                     img={TEMP_URL}
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
                     img={member.imgUrl ?? TEMP_URL}
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
            Header="Who are we"
            Body="Discover more about our values, mission and vision for Axis Consulting. Meet the current team and some of our 212 alumni since 2012."
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
            <TeamRow people={MANAGING_DIRECTORS} teamTitle="Managing Directors" />
         </TeamSection>

         {/* Directors */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Executive Team</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={DIRECTORS} />
         </TeamSection>

         {/* Consulting Leads */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Consulting Team Leads</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={CONSULTING_TEAM_LEADS} />
         </TeamSection>

         {/* Consulting Teams */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>{consultingTeams[0].name}</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={consultingTeams[0].members} teamTitle={consultingTeams[0].name} />
         </TeamSection>

         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>{consultingTeams[1].name}</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={consultingTeams[1].members} teamTitle={consultingTeams[1].name} />
         </TeamSection>

         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>{consultingTeams[2].name}</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={consultingTeams[2].members} teamTitle={consultingTeams[2].name} />
         </TeamSection>

         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>{consultingTeams[3].name}</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={consultingTeams[3].members} teamTitle={consultingTeams[3].name} />
         </TeamSection>

         {/* Internal Team */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Internal Team</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={INTERNAL_TEAM} teamTitle="Internal Team" />
         </TeamSection>

         {/* External Team */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>External Team</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={EXTERNAL_TEAM} teamTitle="External Team" />
         </TeamSection>

         {/* Strategy Team */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Strategy Team</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={STRATEGY_TEAM} teamTitle="Strategy Team" />
         </TeamSection>

         {/* Marketing Strategy */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Marketing Strategy</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={MARKETING_STRATEGY_TEAM} teamTitle="Marketing Strategy" />
         </TeamSection>

         {/* Marketing Design */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Marketing Design</h2>
            </TeamSectionHeaderRow>
            <TeamRow people={MARKETING_DESIGN_TEAM} teamTitle="Marketing Design" />
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
