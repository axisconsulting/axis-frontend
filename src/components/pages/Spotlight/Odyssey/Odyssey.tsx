import ImageContainer from "$components/images/ImageContainer/ImageContainer";
import ImageContent from "$components/images/ImageContent/ImageContent";
import Title from "$components/Title/Title";
import { SOCIAL_LINKS } from "$constants/links";
import { CalloutWrapper, Container, SmallCardRow } from "./Odyssey.styled";

const LINKS = {
   CARD_1: SOCIAL_LINKS.INSTAGRAM,
   CARD_2: "https://www.instagram.com/sfuaxisconsulting/p/DdfvzKwm5c9/?img_index=1",
   CARD_LARGE:
      "https://forms.cloud.microsoft/pages/responsepage.aspx?id=fmfoBInJuUeGGdg9Wl9sZ3dfmpb4AUNHquMegZ8ykp9UQURCTE9QQjFYRkRQN0RVNVpMQ1NKR0pLUSQlQCN0PWcu&route=shorturl",
} as const;

const IMAGES = {
   CARD_1: "generic/events/odyssey/odyssey_1.webp",
   CARD_2: "generic/events/odyssey/odyssey_2.webp",
   CARD_LARGE: "generic/events/odyssey/odyssey_3.webp",
} as const;

type OdysseyProps = {
   isLargeCardVisible?: boolean;
};

export default function Odyssey({ isLargeCardVisible = true }: OdysseyProps) {
   return (
      <Container>
         <Title Header="Odyssey Mentorship Program" />

         <SmallCardRow>
            <ImageContainer
               Header="Your Consulting Journey Starts Here"
               Body="Learn about consulting, project management, networking, and more with an experienced industry mentor."
               CTA="Start your Odyssey Journey"
               Image={IMAGES.CARD_1}
               clickTo={LINKS.CARD_1}
               loading="lazy"
            />
            <ImageContainer
               Header="Learn Pillars"
               Body={
                  <ul>
                     <li>Personalized Mentorship</li>
                     <li>Industry Fundamentals</li>
                     <li>Meaningful Networks</li>
                     <li>Career Readiness</li>
                  </ul>
               }
               CTA="More information on the program"
               Image={IMAGES.CARD_2}
               clickTo={LINKS.CARD_2}
               loading="lazy"
            />
         </SmallCardRow>

         {isLargeCardVisible && (
            <CalloutWrapper>
               <ImageContent
                  Header="Ready to Discover your True Potential?"
                  Body="Tailored mentorship, industry foundations, and real-world experience. Applications close October 10th at 11:59 PM."
                  ButtonText="Apply Now"
                  ImageSrc={IMAGES.CARD_LARGE}
                  AltText="The Axis Consulting Organization 2024-2025 posing for our annual group photo"
                  clickTo={LINKS.CARD_LARGE}
               />
            </CalloutWrapper>
         )}
      </Container>
   );
}