import type { FC } from "react";

import Title from "$components/Title/Title";
import ImageCard from "$components/images/ImageCard/ImageCard";
import { FAKE_URL } from "$constants/utils";

import {
   AttendeesLogosSection,
   HeaderWrapper,
   CardsTrack,
   PageWrapper,
   RevolveInfoSection,
   ScrollContainer,
   TeamRowOuter,
   TeamSection,
   TeamSectionHeaderRow,
} from "./RevolveEvent.styled";

import {
   KEYNOTE_SPEAKERS,
   WORKSHOP_ACTIVITY_HOSTS,
   FIRM_LED_WORKSHOP_HOSTS,
   INTERN_PANELISTS,
   type RevolveEventSpeaker,
   REVOLVE_COMPANY_LOGOS,
} from "$constants/pages/revolve-event";
import LogoMarquee from "$components/pages/LogoMarquee/LogoMarquee";
import Button from "$components/Button/Button";
import { EVENT_LINKS } from "$constants/links";

function SpeakerRow({ speakers }: { speakers: RevolveEventSpeaker[] }) {
   const totalCards = speakers.length;
   const isLowCardCount = totalCards < 3;

   return (
      <TeamRowOuter>
         <ScrollContainer $center={isLowCardCount}>
            <CardsTrack $center={isLowCardCount}>
               {speakers.map((speaker) => (
                  <ImageCard
                     key={speaker.name}
                     variant="profile"
                     name={speaker.name}
                     position={speaker.position}
                     img={speaker.img ?? FAKE_URL}
                     clickTo={speaker.linkedin || undefined}
                     size="person"
                     loading="lazy"
                  />
               ))}
            </CardsTrack>
         </ScrollContainer>
      </TeamRowOuter>
   );
}

const RevolveEvent: FC = () => {
   // Duplicated array to create seamless marquee effect
   const COMPANY_MARQUEE = [...REVOLVE_COMPANY_LOGOS, ...REVOLVE_COMPANY_LOGOS];
   // Disable registration button after March 4th, 2026 at midnight PST (UTC-8)
   const PST_MIDNIGHT_MARCH_4 = new Date("2026-03-05T08:00:00Z");
   const disabled = new Date() > PST_MIDNIGHT_MARCH_4;

   return (
      <PageWrapper>
         <HeaderWrapper>
            <Title
               Header="Revolve Consulting Conference"
               Body="Get ready to network with industry professionals, hear key insights from our speakers, and engage in firm-led workshops."
            />
            <Button
               clickTo={!disabled ? EVENT_LINKS.REVOLVE : undefined}
               variant={!disabled ? "primary" : "ghost"}
               disabled={disabled}
               size="lg">
               {!disabled ? "Register Now (Until March 4th)!" : "Registration Now Closed"}
            </Button>
         </HeaderWrapper>

         <RevolveInfoSection>
            <h1>What is Revolve?</h1>
            <p>
               Revolve Consulting Conference is one-day consulting conference event that aims to
               provide undergraduate students interested in the consulting industry an opportunity
               to network, engage, and learn from consulting professionals. Additionally, attendees
               have the opportunity to see how Axis Consulting delivers real impact through the
               showcase of Axis Consulting's client engagements in the year.
            </p>
         </RevolveInfoSection>

         {/* Keynote Speaker */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Keynote Speaker</h2>
            </TeamSectionHeaderRow>
            <SpeakerRow speakers={KEYNOTE_SPEAKERS} />
         </TeamSection>

         {/* Workshop Activity Host */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Workshop Activity Host</h2>
            </TeamSectionHeaderRow>
            <SpeakerRow speakers={WORKSHOP_ACTIVITY_HOSTS} />
         </TeamSection>

         {/* Firm-led Workshop Hosts */}
         <TeamSection>
            <TeamSectionHeaderRow>
               <h2>Firm-led Workshop Hosts</h2>
            </TeamSectionHeaderRow>
            <SpeakerRow speakers={FIRM_LED_WORKSHOP_HOSTS} />
         </TeamSection>

         {/* Intern Panelists */}
         <TeamSection>
            <TeamSectionHeaderRow>
               {/* awaiting 2~ more to be confirmed potentially */}
               <h2>Intern Panelists</h2>
            </TeamSectionHeaderRow>
            <SpeakerRow speakers={INTERN_PANELISTS} />
         </TeamSection>

         {/* Logo grid - shows all attending companies*/}
         <AttendeesLogosSection>
            <h2>Attending Companies</h2>
            <LogoMarquee clients={COMPANY_MARQUEE} speedSeconds={45} />
         </AttendeesLogosSection>
      </PageWrapper>
   );
};

export default RevolveEvent;
