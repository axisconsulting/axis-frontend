import React, { useEffect, useState, useMemo } from "react";
import { MdArrowOutward } from "react-icons/md";
import image_not_found from "$assets/image_not_found.jpg";

import {
   CardOuter,
   ClickWrapper,
   CardInner,
   ImgFrame,
   OverlayProfile,
   OverlayFeature,
   FeatureCTAWrapper,
   SkeletonOverlay,
} from "./ImageCard.styled";

export interface ImageCardPropsBase {
   img: string; // shared image source
   fallbackSrc?: string; // optional fallback if `img` fails
   loading?: "lazy" | "eager";
   clickTo?: string; // optional external link for the whole card
}

export interface BannerProfileCardProps extends ImageCardPropsBase {
   variant: "bannerProfile";
   title: string; // e.g. "Managing Directors" / "Team Nebula"
   subtitle: string; // "2025–2026"
   size: "team" | "person"; // desktop width preset for banner card ("team" -> 40vw, "person" -> 20vw)
}

export interface ProfileCardProps extends ImageCardPropsBase {
   variant: "profile";
   name: string; // big top line: person name OR team name
   position: string; // sub line under it: position / role / year
   size: "team" | "person"; // desktop width preset, team -> 40vw, person -> 20vw
}

export interface FeatureCardProps extends ImageCardPropsBase {
   variant: "feature";
   header: string; // headline text
   body: string; // body/description text
   cta?: string; // CTA label text, e.g. "Learn more"
   /** you don't pass size here; "feature" uses full-width rules */
}

export type ImageCardProps = ProfileCardProps | FeatureCardProps | BannerProfileCardProps;

const ImageCard: React.FC<ImageCardProps> = (props) => {
   const { img, fallbackSrc = image_not_found, loading = "lazy", clickTo } = props;

   // fallback + skeleton state
   const [src, setSrc] = useState(img);
   const [loaded, setLoaded] = useState(false);
   const [failedOnce, setFailedOnce] = useState(false);

   useEffect(() => {
      setSrc(img);
      setLoaded(false);
      setFailedOnce(false);
   }, [img]);

   const handleLoad = () => setLoaded(true);

   const handleError = () => {
      if (!failedOnce && fallbackSrc && img !== fallbackSrc) {
         setFailedOnce(true);
         setSrc(fallbackSrc);
         setLoaded(false);
      } else {
         setFailedOnce(true);
         setLoaded(true); // stop skeleton even if broken
      }
   };

   const hasLink = useMemo(() => Boolean((clickTo ?? "").trim().length), [clickTo]);

   // skeleton shimmer overlay
   const skeleton = !loaded ? <SkeletonOverlay aria-hidden /> : null;

   // decide overlay + frame based on variant
   let overlayBlock: React.ReactNode;
   let frame: React.ReactNode;

   if (props.variant === "profile") {
      const { name, position, size } = props;

      overlayBlock = (
         <OverlayProfile>
            <h2>{name}</h2>
            <p>{position}</p>
         </OverlayProfile>
      );

      frame = (
         <ImgFrame $mode="profile" $profileSize={size}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
               {skeleton}
               <img
                  src={src}
                  alt={name}
                  loading={loading}
                  onLoad={handleLoad}
                  onError={handleError}
               />
            </div>
         </ImgFrame>
      );
   } else if (props.variant === "bannerProfile") {
      const { title, subtitle, size } = props;

      overlayBlock = (
         <OverlayProfile>
            <h2>{title}</h2>
            <p>{subtitle}</p>
         </OverlayProfile>
      );

      // IMPORTANT: bannerProfile intentionally uses $mode="profile"
      // so it matches the height/width behavior of the other cards
      frame = (
         <ImgFrame $mode="profile" $profileSize={size}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
               {skeleton}
               <img
                  src={src}
                  alt={title}
                  loading={loading}
                  onLoad={handleLoad}
                  onError={handleError}
               />
            </div>
         </ImgFrame>
      );
   } else {
      // props.variant === "feature"
      const { header, body, cta } = props;

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

      frame = (
         <ImgFrame $mode="feature" $profileSize={"team"}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
               {skeleton}
               <img
                  src={src}
                  alt={header}
                  loading={loading}
                  onLoad={handleLoad}
                  onError={handleError}
               />
            </div>
         </ImgFrame>
      );
   }

   const inner = (
      <CardInner>
         {overlayBlock}
         {frame}
      </CardInner>
   );

   return (
      <CardOuter>
         {hasLink ? (
            <ClickWrapper href={clickTo} target="_blank" rel="noopener noreferrer">
               {inner}
            </ClickWrapper>
         ) : (
            inner
         )}
      </CardOuter>
   );
};

export default ImageCard;
