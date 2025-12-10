// src/components/ClientLogoGrid/ClientLogoGrid.tsx
import type { FC } from "react";
import { useState } from "react";

import { CLIENT_LOGOS, type ClientLogo } from "$constants/clients";
import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";
import { ImageState } from "$constants/imageState";

import {
   GridWrapper,
   LogosGrid,
   LogoItem,
   LogoItemImageWrapper,
   LogoItemImage,
   LogoItemLabel,
} from "./ClientLogoGrid.styled";
import { LoaderLayer } from "$styles/constants/LoaderLayer";
import { SheenLoader } from "$styles/constants/Animation";

type ClientLogoGridProps = {
   clients?: ClientLogo[]; // optional override; defaults to all CLIENT_LOGOS
   showLabel?: boolean; // controls logo.name visibility (default = false)
};

type ClientLogoItemProps = {
   logo: ClientLogo;
   showLabel: boolean;
};

const ClientLogoItem: FC<ClientLogoItemProps> = ({ logo, showLabel }) => {
   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);

   const isLoading = imageState === ImageState.LOADING;
   const isError = imageState === ImageState.ERROR;

   return (
      <LogoItem>
         <LogoItemImageWrapper>
            {/* Loading shimmer */}
            {isLoading && (
               <LoaderLayer>
                  <SheenLoader role="status" aria-live="polite" aria-label="loading logo" />
               </LoaderLayer>
            )}

            {/* Error fallback */}
            {isError && (
               <LoaderLayer>
                  <GlossyPlaceholder
                     showNotFound
                     label={logo.name}
                     aria-label="logo failed to load"
                  />
               </LoaderLayer>
            )}

            {/* Image (hidden only when in hard error state) */}
            {!isError && (
               <LogoItemImage
                  src={logo.logoSrc}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  onLoad={() => setImageState(ImageState.LOADED)}
                  onError={() => setImageState(ImageState.ERROR)}
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
