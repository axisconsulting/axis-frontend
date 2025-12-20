import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Wrapper, BgImage, Overlay, Inner, Heading, BodyText, CTABox } from "./ImageContent.styled";
import Button from "$components/Button/Button";

import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";
import { SheenLoader } from "$styles/constants/Animation";
import { ImageState } from "$constants/utils";
import { assetUrl } from "$constants/image-utils/assets";

export interface ImageContentProps {
   Header: string;
   Body: string;
   ButtonText: string;

   /** R2 path only, e.g. "home-page/hero.webp" */
   ImageSrc: string;

   AltText: string;
   clickTo: string;
   className?: string;
   loading?: "eager" | "lazy";
}

const ImageContent = ({
   Header,
   Body,
   ButtonText,
   ImageSrc: imagePath,
   AltText,
   clickTo,
   className,
   loading = "lazy",
}: ImageContentProps) => {
   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);

   const isValidLink = Boolean((clickTo ?? "").trim().length);
   const src = assetUrl(imagePath);

   // show loader again if the image changes
   useEffect(() => {
      setImageState(ImageState.LOADING);
   }, [imagePath]);

   return (
      <Wrapper className={className}>
         {imageState === ImageState.LOADING ? (
            <SheenLoader role="status" aria-live="polite" aria-label="loading image" />
         ) : null}

         {imageState === ImageState.ERROR ? (
            <GlossyPlaceholder aria-label="image failed to load" />
         ) : null}

         <BgImage
            key={src}
            src={src}
            alt={AltText}
            loading={loading}
            $visible={imageState === ImageState.LOADED}
            onLoad={() => setImageState(ImageState.LOADED)}
            onError={() => setImageState(ImageState.ERROR)}
         />

         <Overlay>
            <Inner>
               <Heading>{Header}</Heading>
               <BodyText>{Body}</BodyText>
               <CTABox>
                  {isValidLink ? (
                     <Link to={clickTo}>
                        <Button>{ButtonText}</Button>
                     </Link>
                  ) : null}
               </CTABox>
            </Inner>
         </Overlay>
      </Wrapper>
   );
};

export default ImageContent;
