import type { FC } from "react";

import Title from "$components/Title/Title";

import { PageWrapper } from "$styles/constants/PageWrapper";
import {
   CalloutWrapper,
   FiresideItem,
   GridSection,
   JoinTeamItem,
   OdysseyItem,
   TestimonialWrapper,
} from "./GetInvolved.styled";
import ImageContent from "$components/images/ImageContent/ImageContent";
import { AXIS_LINKS, EVENT_LINKS, RECRUITMENT } from "$constants/links";
import ImageContainer from "$components/images/ImageContainer/ImageContainer";
import TestimonialsCarousel from "$components/testimonials/TestimonialsCarousel/TestimonialsCarousel";
import FAQSection from "$components/pages/FAQSection/FAQSection";
import { GET_INVOLVED_URLS } from "$constants/pages/get-involved";

const GetInvolved: FC = () => {
   return (
      <PageWrapper>
         <Title
            Header="Get Involved"
            Body="Become a part of the Axis community by coming to events, joining our programs, and applying to be a part of our team when recruitment season begins"
         />

         <GridSection>
            <JoinTeamItem>
               <ImageContainer
                  Header="Join our Team!"
                  Body="Become a member of Axis Consulting and contribute to meaningful projects while developing your skills today"
                  CTA="Applications are currently closed"
                  Image={GET_INVOLVED_URLS.join_team_card}
                  clickTo={RECRUITMENT.COORDINATOR_PACKAGE}
                  loading="lazy"
               />
            </JoinTeamItem>

            <OdysseyItem>
               <ImageContainer
                  Header="Odyssey Mentorship Program"
                  Body="Tailored Mentorship, Industry Foundations, Professional Connections, and Real-World Experience"
                  CTA="Registration is currently closed"
                  Image={GET_INVOLVED_URLS.odyssey_card}
                  clickTo={EVENT_LINKS.ODYSSEY}
                  loading="lazy"
               />
            </OdysseyItem>

            <FiresideItem>
               <ImageContainer
                  Header="Revolve"
                  Body="Consulting Conference that brings students and industry leaders together for panels, workshops, and networking"
                  CTA="Registration is currently closed"
                  Image={GET_INVOLVED_URLS.revolve_card}
                  clickTo={EVENT_LINKS.REVOLVE}
                  loading="lazy"
               />
            </FiresideItem>
         </GridSection>

         <TestimonialWrapper>
            <TestimonialsCarousel autoPlay intervalMs={9000} />
         </TestimonialWrapper>

         <CalloutWrapper>
            <ImageContent
               Header="Join our Mailing List"
               Body="Be the first to receive updates on upcoming events, recruitment, and news from Axis Consulting"
               ButtonText="Get Notified"
               ImageSrc={GET_INVOLVED_URLS.mailing_list_card}
               clickTo={AXIS_LINKS.MAILING_LIST}
               AltText="The Axis Consulting Organization Group Photo"
               loading="lazy"
            />
         </CalloutWrapper>

         <FAQSection />
      </PageWrapper>
   );
};

export default GetInvolved;
