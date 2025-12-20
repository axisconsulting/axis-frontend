import type { FC } from "react";

import Title from "$components/Title/Title";

import { PageWrapper } from "$styles/constants/PageWrapper";
import { CalloutWrapper, Container, StatsGrid } from "./Resources.styled";
import Icon from "$components/icons/IconContainer/IconContainer";
import { AXIS_LINKS, RECRUITMENT } from "$constants/links";

import { BsPaperclip } from "react-icons/bs";
import ImageContainer from "$components/images/ImageContainer/ImageContainer";
import ImageContent from "$components/images/ImageContent/ImageContent";
import { RESOURCES_URLS } from "$constants/pages/resources";

const Resources: FC = () => {
   return (
      <PageWrapper>
         <Title
            Header="Resources"
            Body="Explore our packages and learn more about what Axis has to offer"
         />

         <Container>
            <ImageContainer
               Header="Sign up to Receive our Consulting 101 Package"
               Body="Take the first step towards your consulting career. Click here to sign up for our beginners' guide to consulting"
               CTA="Register Here"
               Image={RESOURCES_URLS.consulting_101_package}
               clickTo={AXIS_LINKS.CONSULTING_101}
               loading="lazy"
            />
            <ImageContainer
               Header="Interested in our upcoming events? Sign up to get updates."
               Body="Be the first to receive packages, learn about events, and get exclusive access to our resources"
               CTA="Join our Mailing List"
               Image={RESOURCES_URLS.mailing_list_card}
               clickTo={AXIS_LINKS.MAILING_LIST}
               loading="lazy"
            />
         </Container>

         <StatsGrid>
            <Icon Icon={BsPaperclip} Text="Consulting 101" clickTo={AXIS_LINKS.CONSULTING_101} />
            <Icon
               Icon={BsPaperclip}
               Text="24/25 Impact Report"
               clickTo={AXIS_LINKS.IMPACT_REPORT}
            />
            <Icon
               Icon={BsPaperclip}
               Text="Consulting Application Package"
               clickTo={RECRUITMENT.CONSULTANT_PACKAGE}
            />
            <Icon
               Icon={BsPaperclip}
               Text="Coordinator Application Package"
               clickTo={RECRUITMENT.COORDINATOR_PACKAGE}
            />
         </StatsGrid>

         <CalloutWrapper>
            <ImageContent
               Header="Your Future Awaits!"
               Body="View Application Package"
               ButtonText="Apply Now"
               ImageSrc={RESOURCES_URLS.future_awaits_card}
               clickTo={RECRUITMENT.APPLICATION_FORM}
               AltText="The Axis Consulting Organization Group Photo"
               loading="lazy"
            />
         </CalloutWrapper>
      </PageWrapper>
   );
};

export default Resources;
