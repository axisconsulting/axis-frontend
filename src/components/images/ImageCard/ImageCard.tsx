import React, { useEffect, useMemo, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

import {
   CardOuter,
   CardInner,
   ImgFrame,
   OverlayProfile,
   OverlayFeature,
   FeatureCTAWrapper,
   BgImage, // NEW: fade-in image (mirrors ImageContent)
   LoaderLayer, // NEW: positioning for loader/placeholder
} from "./ImageCard.styled";

import { SheenLoader } from "$styles/constants/Animation"; // same as ImageContent
import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled"; // same as ImageContent
import { ImageState } from "$constants/utils"; // same enum as ImageContent
import { Link } from "react-router-dom";

export interface ImageCardPropsBase {
   img: string;
   loading?: "lazy" | "eager";
   clickTo?: string;
}

export interface BannerProfileCardProps extends ImageCardPropsBase {
   variant: "bannerProfile";
   title: string;
   subtitle: string;
   size: "team" | "person";
}

export interface ProfileCardProps extends ImageCardPropsBase {
   variant: "profile";
   name: string;
   position: string;
   size: "team" | "person";
}

export interface FeatureCardProps extends ImageCardPropsBase {
   variant: "feature";
   header: string;
   body: string;
   cta?: string;
}

export type ImageCardProps = ProfileCardProps | FeatureCardProps | BannerProfileCardProps;

const maxRetries = 2;

const ImageCard: React.FC<ImageCardProps> = (props) => {
   const { img, loading = "lazy", clickTo } = props;

   // 1) Same image lifecycle as ImageContent
   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);
   const [attempt, setAttempt] = useState(0);

   // cache-busting src when retrying
   const currentSrc = useMemo(
      () => (attempt > 0 ? `${img}?retry=${attempt}` : img),
      [img, attempt]
   );

   // reset when base img changes
   useEffect(() => {
      if (!img) {
         setImageState(ImageState.ERROR);
         return;
      }
      setAttempt(0);
      setImageState(ImageState.LOADING);
   }, [img]);

   const onLoad = () => setImageState(ImageState.LOADED);

   const onError = () => {
      if (attempt < maxRetries) {
         setAttempt((a) => a + 1);
         setImageState(ImageState.LOADING);
      } else {
         setImageState(ImageState.ERROR);
      }
   };

   const hasLink = Boolean((clickTo ?? "").trim().length);

   // 2) Overlay content by variant
   let overlayBlock: React.ReactNode;
   let altText = "";

   if (props.variant === "profile") {
      const { name, position } = props;
      altText = name;
      overlayBlock = (
         <OverlayProfile>
            <h2>{name}</h2>
            <p>{position}</p>
         </OverlayProfile>
      );
   } else if (props.variant === "bannerProfile") {
      const { title, subtitle } = props;
      altText = title;
      overlayBlock = (
         <OverlayProfile>
            <h2>{title}</h2>
            <p>{subtitle}</p>
         </OverlayProfile>
      );
   } else {
      // feature
      const { header, body, cta } = props;
      altText = header;
      overlayBlock = (
         <OverlayFeature>
            <h2>{header}</h2>
            <p>{body}</p>

            {cta && (
               <FeatureCTAWrapper>
                  <span>{cta}</span>
                  <MdArrowOutward />
               </FeatureCTAWrapper>
            )}
         </OverlayFeature>
      );
   }

   const imageBlock = (
      <div>
         {imageState === ImageState.LOADING && (
            <LoaderLayer>
               <SheenLoader role="status" aria-live="polite" aria-label="loading image" />
            </LoaderLayer>
         )}

         {imageState === ImageState.ERROR && (
            <LoaderLayer>
               <GlossyPlaceholder aria-label="image failed to load" />
            </LoaderLayer>
         )}

         {img && (
            <BgImage
               key={currentSrc}
               src={currentSrc}
               alt={altText}
               loading={loading}
               $visible={imageState === ImageState.LOADED}
               onLoad={onLoad}
               onError={onError}
            />
         )}
      </div>
   );

   const inner = (
      <CardInner>
         {overlayBlock}
         {props.variant === "profile" ? (
            <ImgFrame $mode="profile" $profileSize={props.size}>
               {imageBlock}
            </ImgFrame>
         ) : props.variant === "bannerProfile" ? (
            <ImgFrame $mode="profile" $profileSize={props.size}>
               {imageBlock}
            </ImgFrame>
         ) : (
            <ImgFrame $mode="feature" $profileSize={"team"}>
               {imageBlock}
            </ImgFrame>
         )}
      </CardInner>
   );

   return (
      <CardOuter>
         {hasLink ? (
            <Link to={clickTo || ""} target="_blank" rel="noopener noreferrer">
               {inner}
            </Link>
         ) : (
            inner
         )}
      </CardOuter>
   );
};

export default ImageCard;
