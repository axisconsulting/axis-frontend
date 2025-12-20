// src/pages/Sponsors/Sponsors.tsx
import type { FC } from "react";

import Title from "$components/Title/Title";
import ImageContent from "$components/images/ImageContent/ImageContent";

import { AXIS_LINKS } from "$constants/links";

import { CalloutWrapper, SponsorsListSection } from "./Sponsors.styled";
import { SPONSOR_LOGOS_BY_KEY, SPONSOR_URL } from "$constants/pages/sponsors";
import CompanyBlock from "$components/pages/CompanyBlock/CompanyBlock";
import { PageWrapper } from "$styles/constants/PageWrapper";

const Sponsors: FC = () => {
   return (
      <PageWrapper>
         <Title
            Header="Our Sponsors"
            Body="We are grateful to our sponsors who support our mission and make our work possible. Their partnership enables us to continue delivering exceptional results"
         />

         {/* Main client highlight cards */}
         <SponsorsListSection>
            <CompanyBlock
               title="EY (Ernst & Young)"
               body="A global professional services firm focused on 'Building a better working world' through its integrated services in assurance, consulting, tax, and strategy and transactions."
               imageSrc={SPONSOR_LOGOS_BY_KEY.ey.logoSrc}
               altText={SPONSOR_LOGOS_BY_KEY.ey.name}
            />
            <CompanyBlock
               title="Deloitte"
               imageSrc={SPONSOR_LOGOS_BY_KEY.deloitte.logoSrc}
               altText={SPONSOR_LOGOS_BY_KEY.deloitte.name}
            />
         </SponsorsListSection>

         {/* CTA block */}
         <CalloutWrapper>
            <ImageContent
               Header="Want to Work with Us?"
               Body="Let's get in touch!"
               ButtonText="Contact Us"
               ImageSrc={SPONSOR_URL.work_with_us}
               clickTo={`mailto:${AXIS_LINKS.EMAIL}`}
               AltText="The Axis Consulting Organization placeholder"
               loading="eager"
            />
         </CalloutWrapper>
      </PageWrapper>
   );
};

export default Sponsors;
