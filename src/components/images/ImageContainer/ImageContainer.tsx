import { useEffect, useMemo, useState, type JSX } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

import {
   Wrapper,
   Overlay,
   Heading,
   BodyText,
   CTAInline,
   CTAArrow,
   MediaBox,
   MediaImg,
   MediaVideo,
} from "./ImageContainer.styled";

import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";
import { SheenLoader } from "$styles/constants/Animation";
import { ImageState } from "$constants/utils";
import { assetUrl } from "$constants/image-utils/assets";

export interface ImageContainerProps {
   Header: string;
   Body: string | JSX.Element;
   CTA: string;

   /** R2 path only, e.g. "home-page/Visier.webp" or "home-page/Visier.webm" */
   Image: string;

   clickTo?: string;
   className?: string;
   loading?: "eager" | "lazy";

   /** Video behavior (only used if Image ends with .webm) */
   videoAutoPlay?: boolean;
   videoLoop?: boolean;
   videoMuted?: boolean;
}

const getExt = (p: string) => {
   const clean = (p ?? "").split("?")[0].split("#")[0];
   const last = clean.split(".").pop();
   return (last ?? "").toLowerCase();
};

const ImageContainer = ({
   Header,
   Body,
   CTA,
   Image: imagePath,
   clickTo,
   className,
   loading = "lazy",
   videoAutoPlay = true,
   videoLoop = true,
   videoMuted = true,
}: ImageContainerProps) => {
   const [mediaState, setMediaState] = useState<ImageState>(ImageState.LOADING);

   const hasLink = Boolean((clickTo ?? "").trim().length);

   const src = useMemo(() => assetUrl(imagePath), [imagePath]);
   const ext = useMemo(() => getExt(imagePath), [imagePath]);
   const isWebm = ext === "webm";

   // reset loader if the media changes
   useEffect(() => {
      setMediaState(ImageState.LOADING);
   }, [src]);

   const visible = mediaState === ImageState.LOADED;

   const renderCTA = () => {
      const content = (
         <CTAInline>
            <span>{CTA}</span>
            <CTAArrow>
               <MdArrowOutward />
            </CTAArrow>
         </CTAInline>
      );

      if (!hasLink) return <span aria-disabled="true">{content}</span>;

      return (
         <Link target="_blank" to={clickTo ? clickTo : ""}>
            {content}
         </Link>
      );
   };

   return (
      <Wrapper className={className}>
         <Overlay>
            <Heading>{Header}</Heading>
            <BodyText>{Body}</BodyText>
            {renderCTA()}
         </Overlay>

         <MediaBox>
            {mediaState === ImageState.LOADING && (
               <SheenLoader role="status" aria-live="polite" aria-label="loading media" />
            )}

            {mediaState === ImageState.ERROR && (
               <GlossyPlaceholder aria-label="media failed to load" />
            )}

            {isWebm ? (
               <MediaVideo
                  key={src}
                  $visible={visible}
                  autoPlay={videoAutoPlay}
                  loop={videoLoop}
                  muted={videoMuted}
                  playsInline
                  preload={loading === "eager" ? "auto" : "metadata"}
                  aria-label={Header}
                  onCanPlay={() => setMediaState(ImageState.LOADED)}
                  onError={() => setMediaState(ImageState.ERROR)}>
                  <source src={src} type="video/webm" />
               </MediaVideo>
            ) : (
               <MediaImg
                  key={src}
                  src={src}
                  alt={Header}
                  loading={loading}
                  $visible={visible}
                  onLoad={() => setMediaState(ImageState.LOADED)}
                  onError={() => setMediaState(ImageState.ERROR)}
               />
            )}
         </MediaBox>
      </Wrapper>
   );
};

export default ImageContainer;
