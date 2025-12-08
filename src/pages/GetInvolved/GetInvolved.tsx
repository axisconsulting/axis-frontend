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
import { TEMP_URL } from "$constants/utils";
import { EVENT_LINKS, RECRUITMENT } from "$constants/links";
import ImageContainer from "$components/images/ImageContainer/ImageContainer";
import TestimonialsCarousel from "$components/testimonials/TestimonialsCarousel/TestimonialsCarousel";
import FAQSection from "$components/pages/FAQSection/FAQSection";

const GetInvolved: FC = () => {
   return (
      <PageWrapper>
         <Title
            Header="Get Involved"
            Body="Become a part of the Axis community by coming to events, joining our programs, and applying to be a part of our team when recruitment season begins."
         />

         <GridSection>
            <JoinTeamItem>
               <ImageContainer
                  Header="Join our Team!"
                  Body=""
                  CTA="Applications are currently closed."
                  Image={TEMP_URL}
                  clickTo={RECRUITMENT.COORDINATOR_PACKAGE}
                  loading="lazy"
               />
            </JoinTeamItem>

            <OdysseyItem>
               <ImageContainer
                  Header="Odyssey Mentorship Program"
                  Body=""
                  CTA="Registration is currently closed."
                  Image={TEMP_URL}
                  clickTo={EVENT_LINKS.ODYSSEY}
                  loading="lazy"
               />
            </OdysseyItem>

            <FiresideItem>
               <ImageContainer
                  Header="Fireside Chat Series"
                  Body=""
                  CTA="Registration is currently closed."
                  Image={TEMP_URL}
                  clickTo={EVENT_LINKS.FIRESIDE}
                  loading="lazy"
               />
            </FiresideItem>
         </GridSection>

         <TestimonialWrapper>
            <TestimonialsCarousel autoPlay intervalMs={9000} />
         </TestimonialWrapper>

         <CalloutWrapper>
            <ImageContent
               Header="Your Future Awaits!"
               Body="View Application Package"
               ButtonText="Apply Now"
               ImageSrc={TEMP_URL}
               clickTo={RECRUITMENT.APPLICATION_FORM}
               AltText="The Axis Consulting Organization Group Photo"
               loading="lazy"
            />
         </CalloutWrapper>

         <FAQSection />
      </PageWrapper>
   );
};

export default GetInvolved;
