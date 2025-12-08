// src/components/ClientBlock/ClientBlock.tsx
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
} from "./ClientBlock.styled";

import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";

type ClientBlockProps = {
   title: string;
   body: string;
   imageSrc: string; // always passed in final result
   altText: string;
   imageWidth?: string;
   /** Optional: force placeholder even if image loads */
   usePlaceholder?: boolean;
};

const ClientBlock: FC<ClientBlockProps> = ({
   title,
   body,
   imageSrc,
   altText,
   imageWidth,
   usePlaceholder = false,
}) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const [hasError, setHasError] = useState(false);

   const handleLoad = () => {
      setIsLoaded(true);
   };

   const handleError = () => {
      setHasError(true);
      setIsLoaded(false);
   };

   // Show placeholder while loading OR on error OR if explicitly forced
   const showPlaceholder = usePlaceholder || !isLoaded || hasError;

   return (
      <BlockWrapper>
         <BlockInner>
            <ImageWrapper>
               {showPlaceholder && <GlossyPlaceholder showNotFound={hasError} label={altText} />}

               {!hasError && (
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

export default ClientBlock;
