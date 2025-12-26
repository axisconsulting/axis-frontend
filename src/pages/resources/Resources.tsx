import type { FC } from "react";

import Title from "$components/Title/Title";

import { PageWrapper } from "$styles/constants/PageWrapper";
import { CalloutWrapper, Container, LinksGrid } from "./Resources.styled";
import Icon from "$components/icons/IconContainer/IconContainer";
import { AXIS_LINKS, RECRUITMENT, SNAPSHOT_LINKS } from "$constants/links";

import { BsPaperclip } from "react-icons/bs";
import { MdOilBarrel } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import ImageContainer from "$components/images/ImageContainer/ImageContainer";
import ImageContent from "$components/images/ImageContent/ImageContent";
import { RESOURCES_URLS } from "$constants/pages/resources";
import { CONFIG_STRINGS } from "$constants/config";

const Resources: FC = () => {
   return (
      <PageWrapper>
         <Title
            Header="Resources"
            Body="Explore our packages and learn more about what Axis has to offer"
         />

         <Container>
            <ImageContainer
               Header="Learn about our Consulting 101 Program"
               Body="Take the first step towards your consulting career. Click here to view for our beginners' guide to consulting!"
               CTA="View Consulting 101 Guide"
               Image={RESOURCES_URLS.consulting_101_package}
               clickTo={AXIS_LINKS.CONSULTING_101}
               loading="lazy"
            />
            <ImageContainer
               Header="Interested in our upcoming events?"
               Body="Be the first to receive packages, learn about events, and get exclusive access to our resources"
               CTA="Join our Mailing List"
               Image={RESOURCES_URLS.mailing_list_card}
               clickTo={AXIS_LINKS.MAILING_LIST}
               loading="lazy"
            />
         </Container>

         <LinksGrid>
            <Icon
               Icon={BsPaperclip}
               Text="24/25 Impact Report"
               clickTo={AXIS_LINKS.IMPACT_REPORT}
            />
            <Icon
               Icon={MdOilBarrel}
               Text="Oil & Gas Snapshot"
               clickTo={SNAPSHOT_LINKS.OIL_AND_GAS_REPORT}
            />
            <Icon Icon={BsBank} Text="Banking Snapshot" clickTo={SNAPSHOT_LINKS.BANKING_REPORT} />
            <Icon
               Icon={MdOutlineHealthAndSafety}
               Text="Healthcare Snapshot"
               clickTo={SNAPSHOT_LINKS.HEALTHCARE_REPORT}
            />
         </LinksGrid>

         <CalloutWrapper>
            <ImageContent
               Header="Your Future Awaits!"
               Body="View Application Package"
               ButtonText={CONFIG_STRINGS.HIRING_MSG}
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
