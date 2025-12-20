// src/components/ClientLogoGrid/ClientLogoMarquee.tsx
import type { FC } from "react";
import { useMemo } from "react";

import { CLIENT_LOGOS, type ClientLogo } from "$constants/pages/clients";
import { assetUrl } from "$constants/image-utils/assets";

import {
   MarqueeWrapper,
   Row,
   Track,
   LogoItem,
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

   return (
      <LogoItem>
         <LogoImg src={src} alt={`${logo.name} logo`} loading="lazy" />
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
