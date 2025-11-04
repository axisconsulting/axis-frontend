import React, { useEffect, useMemo, useState } from "react";
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
} from "./ImageContainer.styled";

import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";
import { SheenLoader } from "$styles/constants/Animation";
import { ImageState, MAX_IMAGE_LOAD_RETRIES } from "$constants/utils";

export interface ImageContainerProps {
   Header: string;
   Body: string;
   CTA: string;
   Image: string;
   clickTo: string;
   className?: string;
   loading?: "eager" | "lazy";
}

const ImageContainer: React.FC<ImageContainerProps> = ({
   Header,
   Body,
   CTA,
   Image: srcProp,
   clickTo,
   className,
   loading = "lazy",
}) => {
   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);
   const [attempt, setAttempt] = useState(0);

   // Build src with a cache-busting retry param (mirrors ImageContent)
   const currentSrc = useMemo(
      () => (attempt > 0 ? `${srcProp}?retry=${attempt}` : srcProp),
      [srcProp, attempt]
   );

   // Reset when image source changes
   useEffect(() => {
      if (!srcProp) {
         setImageState(ImageState.ERROR);
         return;
      }
      setAttempt(0);
      setImageState(ImageState.LOADING);
   }, [srcProp]);

   const hasLink = Boolean((clickTo ?? "").trim().length);

   const onLoad = () => setImageState(ImageState.LOADED);

   const onError = () => {
      if (attempt < MAX_IMAGE_LOAD_RETRIES) {
         setAttempt((a) => a + 1);
         setImageState(ImageState.LOADING);
      } else {
         setImageState(ImageState.ERROR);
      }
   };

   return (
      <Wrapper className={className}>
         <Overlay>
            <Heading>{Header}</Heading>
            <BodyText>{Body}</BodyText>

            {hasLink ? (
               <Link to={clickTo}>
                  <CTAInline>
                     <span>{CTA}</span>
                     <CTAArrow>
                        <MdArrowOutward />
                     </CTAArrow>
                  </CTAInline>
               </Link>
            ) : (
               // keeps the “text + arrow” styling even without a link
               <CTAInline>
                  <span>{CTA}</span>
                  <CTAArrow>
                     <MdArrowOutward />
                  </CTAArrow>
               </CTAInline>
            )}
         </Overlay>

         <MediaBox>
            {imageState === ImageState.LOADING && (
               <SheenLoader role="status" aria-live="polite" aria-label="loading image" />
            )}

            {imageState === ImageState.ERROR && (
               <GlossyPlaceholder aria-label="image failed to load" />
            )}

            {srcProp && (
               <MediaImg
                  key={currentSrc}
                  src={currentSrc}
                  alt={Header}
                  loading={loading}
                  $visible={imageState === ImageState.LOADED}
                  onLoad={onLoad}
                  onError={onError}
               />
            )}
         </MediaBox>
      </Wrapper>
   );
};

export default ImageContainer;
