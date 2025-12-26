import ImageContainer from "$components/images/ImageContainer/ImageContainer";
import ImageContent from "$components/images/ImageContent/ImageContent";
import Title from "$components/Title/Title";
import { SOCIAL_LINKS } from "$constants/links";
import { CalloutWrapper, Container, SmallCardRow } from "./Odyssey.styled";

const LINKS = {
   CARD_1: SOCIAL_LINKS.INSTAGRAM,
   CARD_2: SOCIAL_LINKS.INSTAGRAM,
   CARD_LARGE:
      "https://www.instagram.com/p/DO_1xR_EpIP/?utm_source=ig_web_copy_link&igsh=MWZkbnI3bzlkNnI4cw==",
} as const;

const IMAGES = {
   CARD_1: "generic/events/odyssey/odyssey_1.webp",
   CARD_2: "generic/events/odyssey/odyssey_2.webp",
   CARD_LARGE: "generic/events/odyssey/odyssey_3.webp",
} as const;

export default function Odyssey() {
   return (
      <Container>
         <Title Header="Odyssey Mentorship Program" />

         <SmallCardRow>
            <ImageContainer
               Header="Asynchronous Curriculum"
               Body="Learn about consulting, project management, networking, and more with an experienced industry mentor"
               CTA="Start your Odyssey Journey"
               Image={IMAGES.CARD_1}
               clickTo={LINKS.CARD_1}
               loading="lazy"
            />
            <ImageContainer
               Header="3 Pillar Events"
               Body={
                  <ul>
                     <li>Event 1: Kick-off & Meeting your Mentor</li>
                     <li>Event 2: Resume Roast & Networking Rotations</li>
                     <li>Event 3: Case Interview Walkthrough</li>
                  </ul>
               }
               CTA="Start your Odyssey Journey"
               Image={IMAGES.CARD_2}
               clickTo={LINKS.CARD_2}
               loading="lazy"
            />
         </SmallCardRow>

         <CalloutWrapper>
            <ImageContent
               Header="Ready to Discover your True Potential?"
               Body="Tailored Mentorship, Industry Foundations, Professional Connections, and Real-World Experience"
               ButtonText="Learn More"
               ImageSrc={IMAGES.CARD_LARGE}
               AltText="The Axis Consulting Organization 2024-2025 posing for our annual group photo"
               clickTo={LINKS.CARD_LARGE}
            />
         </CalloutWrapper>
      </Container>
   );
}
