// src/components/images/ImageCard/ImageCard.tsx
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

import {
   CardOuter,
   CardInner,
   ImgFrame,
   OverlayProfile,
   OverlayFeature,
   FeatureCTAWrapper,
   BgImage,
   LoaderLayer,
} from "./ImageCard.styled";

import { SheenLoader } from "$styles/constants/Animation";
import { GlossyPlaceholder } from "$styles/constants/Placeholder.styled";
import { ImageState } from "$constants/utils";
import { assetUrl } from "$constants/image-utils/assets";

export interface ImageCardPropsBase {
   // R2 path only, e.g. "about/web-dev-team/jai.webp"
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

const ImageCard = (props: ImageCardProps) => {
   const { img, loading = "lazy", clickTo } = props;

   const [imageState, setImageState] = useState<ImageState>(ImageState.LOADING);

   const hasLink = Boolean((clickTo ?? "").trim().length);
   const src = assetUrl(img);

   // When the image path changes, we want the loader again.
   useEffect(() => {
      setImageState(ImageState.LOADING);
   }, [img]);

   // Overlay content by variant (no ternaries needed)
   let overlayBlock: React.ReactNode = null;
   let altText = "";
   let frameMode: "profile" | "feature" = "feature";
   let profileSize: "team" | "person" = "team";

   if (props.variant === "profile") {
      altText = `${props.name} | ${props.position}`;
      frameMode = "profile";
      profileSize = props.size;
      overlayBlock = (
         <OverlayProfile>
            <h2>{props.name}</h2>
            <p>{props.position}</p>
         </OverlayProfile>
      );
   }

   if (props.variant === "bannerProfile") {
      altText = props.title;
      frameMode = "profile";
      profileSize = props.size;
      overlayBlock = (
         <OverlayProfile>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
         </OverlayProfile>
      );
   }

   if (props.variant === "feature") {
      altText = props.header;
      frameMode = "feature";
      overlayBlock = (
         <OverlayFeature>
            <h2>{props.header}</h2>
            <p>{props.body}</p>

            {props.cta ? (
               <FeatureCTAWrapper>
                  <span>{props.cta}</span>
                  <MdArrowOutward />
               </FeatureCTAWrapper>
            ) : null}
         </OverlayFeature>
      );
   }

   /**
    * Intrinsic team banner behavior:
    * - Only applies to bannerProfile + size="team"
    * - Card shrink-wraps to the rendered image width at the set height
    */
   const isTeamBanner = props.variant === "bannerProfile" && profileSize === "team";
   const fitMode: "fill" | "intrinsic" = isTeamBanner ? "intrinsic" : "fill";

   const imageBlock = (
      <>
         {imageState === ImageState.LOADING ? (
            <LoaderLayer>
               <SheenLoader role="status" aria-live="polite" aria-label="loading image" />
            </LoaderLayer>
         ) : null}

         {imageState === ImageState.ERROR ? (
            <LoaderLayer>
               <GlossyPlaceholder aria-label="image failed to load" />
            </LoaderLayer>
         ) : null}

         <BgImage
            key={src} // remount when img changes so browser re-triggers load events cleanly
            src={src}
            alt={altText}
            loading={loading}
            $visible={imageState === ImageState.LOADED}
            $fit={fitMode}
            onLoad={() => setImageState(ImageState.LOADED)}
            onError={() => setImageState(ImageState.ERROR)}
         />
      </>
   );

   const inner = (
      <CardInner $shrink={isTeamBanner}>
         {overlayBlock}
         <ImgFrame $mode={frameMode} $profileSize={profileSize} $fit={fitMode}>
            {imageBlock}
         </ImgFrame>
      </CardInner>
   );

   if (!hasLink) {
      return <CardOuter $shrink={isTeamBanner}>{inner}</CardOuter>;
   }

   return (
      <CardOuter $shrink={isTeamBanner}>
         <Link to={clickTo ?? ""} target="_blank" rel="noopener noreferrer">
            {inner}
         </Link>
      </CardOuter>
   );
};

export default ImageCard;
