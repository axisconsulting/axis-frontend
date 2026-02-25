import Button from "$components/Button/Button";
import ImageContainer from "$components/images/ImageContainer/ImageContainer";
import Title from "$components/Title/Title";
import { Container, SmallCardRow } from "./Revolve.styled";

const LINKS = {
   REVOLVE_TICKET_LINK: "https://www.bouncelife.com/events/6982a0f2cc5b63a647be6ab6",
   REVOLVE_EVENT_SCHEDULE_POST:
      "https://www.instagram.com/p/DUzRRsEkdfO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
} as const;

const IMAGES = {
   CARD_1: "generic/events/revolve/revolve_1.webp",
   CARD_2: "generic/events/revolve/revolve_2.webp",
} as const;

export default function Revolve() {
   return (
      <Container>
         <Title Header="Revolve Consulting Conference" />

         <SmallCardRow>
            <ImageContainer
               Header="Consulting Conference"
               Body="Get ready to network with industry professionals, hear key insights from our speakers, and engage in firm-led workshops."
               CTA="Attend the Conference"
               Image={IMAGES.CARD_1}
               clickTo={LINKS.REVOLVE_TICKET_LINK}
               loading="lazy"
            />
            <ImageContainer
               Header="Conference Highlights"
               Body={
                  <ul>
                     <li>→ Keynote Speakers</li>
                     <li>→ Interactive Workshops</li>
                     <li>→ Structured Networking Rounds</li>
                  </ul>
               }
               CTA="Event Schedule Details"
               Image={IMAGES.CARD_2}
               clickTo={LINKS.REVOLVE_EVENT_SCHEDULE_POST}
               loading="lazy"
            />
         </SmallCardRow>

         <Button clickTo={"/revolve"} size="lg">
            Learn More
         </Button>
      </Container>
   );
}
