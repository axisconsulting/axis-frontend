// src/pages/Clients/Clients.tsx
import type { FC } from "react";

import Title from "$components/Title/Title";
import ImageContent from "$components/images/ImageContent/ImageContent";
import ClientLogoGrid from "$components/pages/ClientLogoGrid/ClientLogoGrid";

import { AXIS_LINKS } from "$constants/links";
import { CLIENT_LOGOS_BY_KEY, CLIENT_LOGOS, FEATURED_CLIENT_KEYS } from "$constants/clients";
import { TEMP_URL } from "$constants/utils";

import {
   PageWrapper,
   ClientsListSection,
   ClientsLogosSection,
   CalloutWrapper,
} from "./Clients.styled";
import CompanyBlock from "$components/pages/CompanyBlock/CompanyBlock";

const Clients: FC = () => {
   // All logos except the ones featured
   const nonFeaturedLogos = CLIENT_LOGOS.filter((logo) => !FEATURED_CLIENT_KEYS.includes(logo.key));

   return (
      <PageWrapper>
         <Title
            Header="Our Clients"
            Body="We have worked with a variety of clients from different industries. Here are some of the clients we have worked with."
         />

         {/* Main client highlight cards */}
         <ClientsListSection>
            <CompanyBlock
               title="Ark Renewable Energy"
               body="Ark, a hyper-growth startup in the renewable energy industry, serves residential and commercial clients, leveraging the EPC (Engineering, Procurement, and Construction) model in construction to facilitate greener home development."
               imageSrc={CLIENT_LOGOS_BY_KEY.ark.logoSrc}
               altText={CLIENT_LOGOS_BY_KEY.ark.name}
            />

            <CompanyBlock
               title="Teck Resources"
               body="Teck is a leading Canadian resources company focusing on producing the metals essential for energy transition. Established in 1913, Teck leads the mining industry in sustainably extracting resources the world needs to enable development."
               imageSrc={CLIENT_LOGOS_BY_KEY.teck.logoSrc}
               altText={CLIENT_LOGOS_BY_KEY.teck.name}
               imageWidth="200px"
            />

            <CompanyBlock
               title="Recycling Council of British Columbia"
               body="RCBC is Canada's longest-serving recycling council dedicated to providing the most up-to-date recycling information to residents across BC, while leading research and policy advocacy for circular economy initiatives."
               imageSrc={CLIENT_LOGOS_BY_KEY.rcbc.logoSrc}
               altText={CLIENT_LOGOS_BY_KEY.rcbc.name}
            />

            <CompanyBlock
               title="Civic Innovation Lab"
               body="Burnaby-based research institute partnership between Simon Fraser University (SFU) and the City of Burnaby, aimed at providing a permanent base to drive solutions that advance community engagement and well-being."
               imageSrc={CLIENT_LOGOS_BY_KEY.cil.logoSrc}
               altText={CLIENT_LOGOS_BY_KEY.cil.name}
            />
         </ClientsListSection>

         {/* Logo grid - shows all OTHER clients */}
         <ClientsLogosSection>
            <h3>Clients We've worked with</h3>
            <ClientLogoGrid clients={nonFeaturedLogos} />
         </ClientsLogosSection>

         {/* CTA block */}
         <CalloutWrapper>
            <ImageContent
               Header="Want to work with us?"
               Body="Let's get in touch!"
               ButtonText="Contact Us"
               ImageSrc={TEMP_URL}
               clickTo={`mailto:${AXIS_LINKS.EMAIL}`}
               AltText="The Axis Consulting Organization placeholder"
               loading="eager"
            />
         </CalloutWrapper>
      </PageWrapper>
   );
};

export default Clients;
