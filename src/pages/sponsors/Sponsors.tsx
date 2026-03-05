// src/pages/Sponsors/Sponsors.tsx
import type { FC } from "react";

import Title from "$components/Title/Title";
import ImageContent from "$components/images/ImageContent/ImageContent";

import { AXIS_LINKS } from "$constants/links";

import { AttendeesLogosSection, CalloutWrapper, SponsorsListSection } from "./Sponsors.styled";
import {
   SPONSORS_COMPANY_LOGOS_BY_KEY,
   SPONSOR_URL,
   SPONSORS_COMPANY_LOGOS,
} from "$constants/pages/sponsors";
import CompanyBlock from "$components/pages/CompanyBlock/CompanyBlock";
import { PageWrapper } from "$styles/constants/PageWrapper";
import LogoMarquee from "$components/pages/LogoMarquee/LogoMarquee";

const Sponsors: FC = () => {
   // Duplicated array to create seamless marquee effect
   const NON_MONETARY_SPONSORS = SPONSORS_COMPANY_LOGOS.slice(2); // in-kind sponsors
   const COMPANY_MARQUEE = [...NON_MONETARY_SPONSORS, ...NON_MONETARY_SPONSORS];

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
               imageSrc={SPONSORS_COMPANY_LOGOS_BY_KEY.ey.logoSrc}
               imageLink={SPONSORS_COMPANY_LOGOS_BY_KEY.ey.website}
               altText={SPONSORS_COMPANY_LOGOS_BY_KEY.ey.name}
            />
            <CompanyBlock
               title="Deloitte"
               imageSrc={SPONSORS_COMPANY_LOGOS_BY_KEY.deloitte.logoSrc}
               imageLink={SPONSORS_COMPANY_LOGOS_BY_KEY.deloitte.website}
               altText={SPONSORS_COMPANY_LOGOS_BY_KEY.deloitte.name}
            />
         </SponsorsListSection>

         {/* Logo grid - shows all sponsor companies*/}
         <AttendeesLogosSection>
            <h2>Additional Sponsors</h2>
            <LogoMarquee clients={COMPANY_MARQUEE} speedSeconds={45} />
         </AttendeesLogosSection>

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
