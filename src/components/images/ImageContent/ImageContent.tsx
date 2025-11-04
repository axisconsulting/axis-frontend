// ImageContent.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Wrapper, BgImage, Overlay, Inner, Heading, BodyText, CTABox } from "./ImageContent.styled";
import Button from "$components/Button/Button";
import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";
import { SheenLoader } from "$styles/constants/Animation";
import { Link } from "react-router-dom";
import { ImageState, MAX_IMAGE_LOAD_RETRIES } from "$constants/utils";

export interface ImageContentProps {
   Header: string;
   Body: string;
   ButtonText: string;
   ImageSrc: string;
   AltText: string;
   clickTo: string;
   className?: string;
   loading?: "eager" | "lazy";
}

const ImageContent: React.FC<ImageContentProps> = ({
   Header,
   Body,
   ButtonText,
   ImageSrc,
   AltText,
   clickTo,
   className,
   loading = "lazy",
}) => {
   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);
   const [attempt, setAttempt] = useState(0);

   // Build the src with a cache-busting retry param when needed
   const currentSrc = useMemo(
      () => (attempt > 0 ? `${ImageSrc}?retry=${attempt}` : ImageSrc),
      [ImageSrc, attempt]
   );

   // Reset state whenever the base ImageSrc changes
   useEffect(() => {
      if (!ImageSrc) {
         setImageState(ImageState.ERROR);
         return;
      }
      setAttempt(0);
      setImageState(ImageState.LOADING);
   }, [ImageSrc]);

   const isValidLink = Boolean((clickTo ?? "").trim().length);

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
         {imageState === ImageState.LOADING && (
            <SheenLoader role="status" aria-live="polite" aria-label="loading image" />
         )}

         {imageState === ImageState.ERROR && (
            <GlossyPlaceholder aria-label="image failed to load" />
         )}

         {/* Background image (fades in when loaded) */}
         {ImageSrc && (
            <BgImage
               key={currentSrc}
               src={currentSrc}
               alt={AltText}
               loading={loading}
               $visible={imageState === ImageState.LOADED}
               onLoad={onLoad}
               onError={onError}
            />
         )}

         <Overlay>
            <Inner>
               <Heading>{Header}</Heading>
               <BodyText>{Body}</BodyText>
               <CTABox>
                  {isValidLink && (
                     <Link to={clickTo}>
                        <Button>{ButtonText}</Button>
                     </Link>
                  )}
               </CTABox>
            </Inner>
         </Overlay>
      </Wrapper>
   );
};

export default ImageContent;
