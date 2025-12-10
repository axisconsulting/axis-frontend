// src/components/CompanyBlock/CompanyBlock.tsx
import type { FC } from "react";
import { useState } from "react";

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
import { ImageState } from "$constants/imageState";
import { SheenLoader } from "$styles/constants/Animation";
import { LoaderLayer } from "$components/images/ImageCard/ImageCard.styled";

type CompanyBlockProps = {
   title: string;
   body: string;
   imageSrc: string; // always passed in final result
   altText: string;
   imageWidth?: string;
   /** Optional: force placeholder overlay even if image loads */
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
   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);

   const handleLoad = () => {
      setImageState(ImageState.LOADED);
   };

   const handleError = () => {
      setImageState(ImageState.ERROR);
   };

   const isLoading = imageState === ImageState.LOADING;
   const isError = imageState === ImageState.ERROR;

   return (
      <BlockWrapper>
         <BlockInner>
            <ImageWrapper>
               {/* Loading shimmer */}
               {isLoading && !usePlaceholder && (
                  <LoaderLayer>
                     <SheenLoader role="status" aria-live="polite" aria-label="loading image" />
                  </LoaderLayer>
               )}

               {/* Error or forced placeholder overlay */}
               {(usePlaceholder || isError) && (
                  <LoaderLayer>
                     <GlossyPlaceholder
                        showNotFound={isError}
                        label={altText}
                        aria-label={isError ? "image failed to load" : altText}
                     />
                  </LoaderLayer>
               )}

               {/* Underlying image (hidden only when in hard error state) */}
               {!isError && (
                  <StyledImage
                     src={imageSrc}
                     alt={altText}
                     style={imageWidth ? { width: imageWidth } : undefined}
                     loading="lazy"
                     onLoad={handleLoad}
                     onError={handleError}
                  />
               )}
            </ImageWrapper>

            <TextWrapper>
               <Title>{title}</Title>
               <Body>{body}</Body>
            </TextWrapper>
         </BlockInner>
      </BlockWrapper>
   );
};

export default CompanyBlock;
