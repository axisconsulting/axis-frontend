// src/components/ClientLogoGrid/ClientLogoMarquee.tsx
import type { FC } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { CLIENT_LOGOS, type ClientLogo } from "$constants/pages/clients";
import { assetUrl } from "$constants/image-utils/assets";

import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";
import { ImageState } from "$constants/utils";
import { SheenLoader } from "$styles/constants/Animation";
import { LoaderLayer } from "$components/images/ImageCard/ImageCard.styled";

import {
   MarqueeWrapper,
   Row,
   Track,
   LogoItem,
   LogoImgWrap,
   LogoImg,
   LogoLabel,
   FadeEdge,
} from "./ClientLogoMarquee.styled";

type ClientLogoMarqueeProps = {
   clients?: ReadonlyArray<ClientLogo>;
   showLabel?: boolean;
   speedSeconds?: number;
};

type LogoCellProps = {
   logo: ClientLogo;
   showLabel: boolean;
};

const LogoCell: FC<LogoCellProps> = ({ logo, showLabel }) => {
   const src = assetUrl(logo.logoSrc);

   const imgRef = useRef<HTMLImageElement | null>(null);
   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);

   const syncLoadedStateIfComplete = () => {
      const el = imgRef.current;
      if (!el) return;

      if (el.complete && el.naturalWidth > 0) {
         setImageState(ImageState.LOADED);
      }
   };

   // When src changes, reset + immediately sync if cached
   useEffect(() => {
      setImageState(ImageState.LOADING);
      syncLoadedStateIfComplete();
   }, [src]);

   const isLoaded = imageState === ImageState.LOADED;
   const isError = imageState === ImageState.ERROR;

   const altText = `${logo.name} logo`;

   return (
      <LogoItem>
         <LogoImgWrap>
            {!isLoaded && !isError ? (
               <LoaderLayer>
                  <SheenLoader role="status" aria-live="polite" aria-label="loading logo" />
               </LoaderLayer>
            ) : null}

            {!isLoaded && isError ? (
               <LoaderLayer>
                  <GlossyPlaceholder
                     showNotFound
                     label={altText}
                     aria-label="logo failed to load"
                  />
               </LoaderLayer>
            ) : null}

            <LogoImg
               ref={imgRef}
               key={src}
               src={src}
               alt={altText}
               loading="lazy"
               $loaded={isLoaded}
               onLoad={() => setImageState(ImageState.LOADED)}
               onError={() => setImageState(ImageState.ERROR)}
            />
         </LogoImgWrap>

         {showLabel ? <LogoLabel>{logo.name}</LogoLabel> : null}
      </LogoItem>
   );
};

const splitTwoRows = (logos: ReadonlyArray<ClientLogo>) => {
   const top: ClientLogo[] = [];
   const bottom: ClientLogo[] = [];

   for (let i = 0; i < logos.length; i += 1) {
      if (i % 2 === 0) top.push(logos[i]);
      else bottom.push(logos[i]);
   }

   return { top, bottom };
};

const ClientLogoMarquee: FC<ClientLogoMarqueeProps> = ({
   clients = CLIENT_LOGOS,
   showLabel = false,
   speedSeconds = 28,
}) => {
   const { top, bottom } = useMemo(() => splitTwoRows(clients), [clients]);

   // Duplicate to create a seamless loop
   const topLoop = useMemo(() => [...top, ...top], [top]);
   const bottomLoop = useMemo(() => [...bottom, ...bottom], [bottom]);

   return (
      <MarqueeWrapper>
         <FadeEdge />

         <Row>
            <Track $duration={`${speedSeconds}s`}>
               {topLoop.map((logo, idx) => (
                  <LogoCell key={`${logo.key}-top-${idx}`} logo={logo} showLabel={showLabel} />
               ))}
            </Track>
         </Row>

         <Row>
            <Track data-reverse $duration={`${speedSeconds + 6}s`}>
               {bottomLoop.map((logo, idx) => (
                  <LogoCell key={`${logo.key}-bot-${idx}`} logo={logo} showLabel={showLabel} />
               ))}
            </Track>
         </Row>

         <FadeEdge data-right />
      </MarqueeWrapper>
   );
};

export default ClientLogoMarquee;
