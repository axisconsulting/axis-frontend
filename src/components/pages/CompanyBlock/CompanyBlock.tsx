// src/components/CompanyBlock/CompanyBlock.tsx
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";

import {
   BlockWrapper,
   BlockInner,
   ImageWrapper,
   StyledImage,
   TextWrapper,
   Title,
   Body,
} from "./CompanyBlock.styled";

import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";
import { ImageState } from "$constants/utils";
import { SheenLoader } from "$styles/constants/Animation";
import { LoaderLayer } from "$components/images/ImageCard/ImageCard.styled";
import { assetUrl } from "$constants/image-utils/assets";

type CompanyBlockProps = {
   title: string;
   body?: string;

   /** R2 path only */
   imageSrc: string;

   altText: string;
   imageWidth?: string;
   usePlaceholder?: boolean;
};

const CompanyBlock: FC<CompanyBlockProps> = ({
   title,
   body,
   imageSrc,
   altText,
   imageWidth,
   usePlaceholder = false,
}) => {
   const imgRef = useRef<HTMLImageElement | null>(null);
   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);

   const src = assetUrl(imageSrc);

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

   return (
      <BlockWrapper>
         <BlockInner>
            <ImageWrapper>
               {/* Only show loader/placeholder if NOT loaded */}
               {!isLoaded && !usePlaceholder && !isError ? (
                  <LoaderLayer>
                     <SheenLoader role="status" aria-live="polite" aria-label="loading image" />
                  </LoaderLayer>
               ) : null}

               {!isLoaded && (usePlaceholder || isError) ? (
                  <LoaderLayer>
                     <GlossyPlaceholder
                        showNotFound={isError}
                        label={altText}
                        aria-label={isError ? "image failed to load" : altText}
                     />
                  </LoaderLayer>
               ) : null}

               <StyledImage
                  ref={imgRef}
                  key={src}
                  src={src}
                  alt={altText}
                  style={imageWidth ? { width: imageWidth } : undefined}
                  loading="lazy"
                  onLoad={() => setImageState(ImageState.LOADED)}
                  onError={() => setImageState(ImageState.ERROR)}
               />
            </ImageWrapper>

            <TextWrapper>
               <Title>{title}</Title>
               {body && <Body>{body}</Body>}
            </TextWrapper>
         </BlockInner>
      </BlockWrapper>
   );
};

export default CompanyBlock;
