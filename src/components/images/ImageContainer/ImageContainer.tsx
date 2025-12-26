import { useState, type JSX } from "react";
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
import { ImageState } from "$constants/utils";
import { assetUrl } from "$constants/image-utils/assets";

export interface ImageContainerProps {
   Header: string;
   Body: string | JSX.Element;
   CTA: string;

   /** R2 path only, e.g. "home-page/Visier.webp" */
   Image: string;

   clickTo?: string;
   className?: string;
   loading?: "eager" | "lazy";
}

const ImageContainer = ({
   Header,
   Body,
   CTA,
   Image: imagePath,
   clickTo,
   className,
   loading = "lazy",
}: ImageContainerProps) => {
   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);

   const hasLink = Boolean((clickTo ?? "").trim().length);
   const src = assetUrl(imagePath);

   const renderCTA = () => {
      const content = (
         <CTAInline>
            <span>{CTA}</span>
            <CTAArrow>
               <MdArrowOutward />
            </CTAArrow>
         </CTAInline>
      );

      if (!hasLink) {
         return <span aria-disabled="true">{content}</span>;
      } else {
         return (
            <Link target="_blank" to={clickTo ? clickTo : ""}>
               {content}
            </Link>
         );
      }
   };

   return (
      <Wrapper className={className}>
         <Overlay>
            <Heading>{Header}</Heading>
            <BodyText>{Body}</BodyText>
            {renderCTA()}
         </Overlay>

         <MediaBox>
            {imageState === ImageState.LOADING && (
               <SheenLoader role="status" aria-live="polite" aria-label="loading image" />
            )}

            {imageState === ImageState.ERROR && (
               <GlossyPlaceholder aria-label="image failed to load" />
            )}

            <MediaImg
               key={src}
               src={src}
               alt={Header}
               loading={loading}
               $visible={imageState === ImageState.LOADED}
               onLoad={() => setImageState(ImageState.LOADED)}
               onError={() => setImageState(ImageState.ERROR)}
            />
         </MediaBox>
      </Wrapper>
   );
};

export default ImageContainer;
