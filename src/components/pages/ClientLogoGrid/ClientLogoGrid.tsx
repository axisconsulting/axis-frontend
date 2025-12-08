// src/components/ClientLogoGrid/ClientLogoGrid.tsx
import type { FC } from "react";
import { useState } from "react";

import { CLIENT_LOGOS, type ClientLogo } from "$constants/clients";
import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";

import {
   GridWrapper,
   LogosGrid,
   LogoItem,
   LogoItemImageWrapper,
   LogoItemImage,
   LogoItemLabel,
} from "./ClientLogoGrid.styled";

type ClientLogoGridProps = {
   clients?: ClientLogo[]; // optional override; defaults to all CLIENT_LOGOS
   showLabel?: boolean; // controls logo.name visibility (default = false)
};

type ClientLogoItemProps = {
   logo: ClientLogo;
   showLabel: boolean;
};

const ClientLogoItem: FC<ClientLogoItemProps> = ({ logo, showLabel }) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const [hasError, setHasError] = useState(false);

   const showPlaceholder = !isLoaded || hasError;

   return (
      <LogoItem>
         <LogoItemImageWrapper>
            {showPlaceholder && <GlossyPlaceholder showNotFound={hasError} label={logo.name} />}

            {!hasError && (
               <LogoItemImage
                  src={logo.logoSrc}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  onLoad={() => setIsLoaded(true)}
                  onError={() => {
                     setHasError(true);
                     setIsLoaded(false);
                  }}
               />
            )}
         </LogoItemImageWrapper>

         {showLabel && <LogoItemLabel>{logo.name}</LogoItemLabel>}
      </LogoItem>
   );
};

const ClientLogoGrid: FC<ClientLogoGridProps> = ({
   clients = CLIENT_LOGOS,
   showLabel = false, // default hidden
}) => {
   return (
      <GridWrapper>
         <LogosGrid>
            {clients.map((logo) => (
               <ClientLogoItem key={logo.key} logo={logo} showLabel={showLabel} />
            ))}
         </LogosGrid>
      </GridWrapper>
   );
};

export default ClientLogoGrid;
