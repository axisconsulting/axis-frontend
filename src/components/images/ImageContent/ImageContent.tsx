import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
   Wrapper,
   BgImage,
   BgVideo,
   Overlay,
   Inner,
   Heading,
   BodyText,
   CTABox,
} from "./ImageContent.styled";
import Button from "$components/Button/Button";

import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";
import { SheenLoader } from "$styles/constants/Animation";
import { ImageState } from "$constants/utils";
import { assetUrl } from "$constants/image-utils/assets";

export interface ImageContentProps {
   Header: string;
   Body: string;
   ButtonText: string;

   /** R2 path only, e.g. "home-page/hero.webp" or "home-page/hero.webm" */
   ImageSrc: string;

   AltText: string;
   clickTo: string;
   className?: string;
   loading?: "eager" | "lazy";

   /**
    * Only used for webm playback. Defaults are "hero-safe":
    * autoplay + loop + muted + playsInline
    */
   videoAutoPlay?: boolean;
   videoLoop?: boolean;
   videoMuted?: boolean;
}

const getExt = (p: string) => {
   const clean = (p ?? "").split("?")[0].split("#")[0];
   const last = clean.split(".").pop();
   return (last ?? "").toLowerCase();
};

const ImageContent = ({
   Header,
   Body,
   ButtonText,
   ImageSrc: imagePath,
   AltText,
   clickTo,
   className,
   loading = "lazy",
   videoAutoPlay = true,
   videoLoop = true,
   videoMuted = true,
}: ImageContentProps) => {
   const [mediaState, setMediaState] = useState<ImageState>(ImageState.LOADING);

   const isValidLink = Boolean((clickTo ?? "").trim().length);

   const src = useMemo(() => assetUrl(imagePath), [imagePath]);
   const ext = useMemo(() => getExt(imagePath), [imagePath]);
   const isWebm = ext === "webm";

   // show loader again if the media changes
   useEffect(() => {
      setMediaState(ImageState.LOADING);
   }, [src]);

   const visible = mediaState === ImageState.LOADED;

   return (
      <Wrapper className={className}>
         {mediaState === ImageState.LOADING ? (
            <SheenLoader role="status" aria-live="polite" aria-label="loading media" />
         ) : null}

         {mediaState === ImageState.ERROR ? (
            <GlossyPlaceholder aria-label="media failed to load" />
         ) : null}

         {isWebm ? (
            <BgVideo
               key={src}
               $visible={visible}
               autoPlay={videoAutoPlay}
               loop={videoLoop}
               muted={videoMuted}
               playsInline
               preload={loading === "eager" ? "auto" : "metadata"}
               aria-label={AltText}
               onCanPlay={() => setMediaState(ImageState.LOADED)}
               onError={() => setMediaState(ImageState.ERROR)}>
               <source src={src} type="video/webm" />
            </BgVideo>
         ) : (
            <BgImage
               key={src}
               src={src}
               alt={AltText}
               loading={loading}
               $visible={visible}
               onLoad={() => setMediaState(ImageState.LOADED)}
               onError={() => setMediaState(ImageState.ERROR)}
            />
         )}

         <Overlay>
            <Inner>
               <Heading>{Header}</Heading>
               <BodyText>{Body}</BodyText>
               <CTABox>
                  {isValidLink ? (
                     <Link to={clickTo}>
                        <Button>{ButtonText}</Button>
                     </Link>
                  ) : (
                     <Button variant="ghost">{ButtonText}</Button>
                  )}
               </CTABox>
            </Inner>
         </Overlay>
      </Wrapper>
   );
};

export default ImageContent;
