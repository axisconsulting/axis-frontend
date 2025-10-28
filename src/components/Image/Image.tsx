import React, { useEffect, useMemo, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import {
   Wrapper,
   Overlay,
   Heading,
   BodyText,
   CTAAnchor,
   CTAInline,
   CTAArrow,
   MediaBox,
   MediaImg,
} from "./Image.styled";
import image_not_found from "$assets/image_not_found.jpg";

export interface ImageContainerProps {
   Header: string;
   Body: string;
   CTA: string;
   Image: string; // primary src
   clickTo: string; // href (can be "")
   className?: string;

   /** optional extras */
   fallbackSrc?: string; // used when primary image fails
   loading?: "eager" | "lazy";
}

const Image: React.FC<ImageContainerProps> = ({
   Header,
   Body,
   CTA,
   Image: srcProp,
   clickTo,
   className,
   fallbackSrc = image_not_found,
   loading = "lazy",
}) => {
   const [src, setSrc] = useState(srcProp);
   const [loaded, setLoaded] = useState(false);
   const [failedOnce, setFailedOnce] = useState(false);

   // reset lifecycle when caller changes the image
   useEffect(() => {
      setSrc(srcProp);
      setLoaded(false);
      setFailedOnce(false);
   }, [srcProp]);

   const handleLoad = () => setLoaded(true);

   const handleError = () => {
      if (!failedOnce && fallbackSrc && srcProp !== fallbackSrc) {
         setFailedOnce(true);
         setSrc(fallbackSrc);
         setLoaded(false);
      } else {
         setFailedOnce(true);
         setLoaded(true); // stop showing skeleton even if broken
      }
   };

   const hasLink = useMemo(() => Boolean((clickTo ?? "").trim().length), [clickTo]);

   // lightweight skeleton overlay
   const skeleton = !loaded ? (
      <div
         aria-hidden
         style={{
            position: "absolute",
            inset: 0,
            background:
               "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.16) 50%, rgba(255,255,255,0.08) 100%)",
            animation: "image-sheen 1.2s linear infinite",
         }}
      />
   ) : null;

   return (
      <Wrapper className={className}>
         <Overlay>
            <Heading>{Header}</Heading>
            <BodyText>{Body}</BodyText>

            {hasLink ? (
               <CTAAnchor href={clickTo} target="_blank" rel="noreferrer">
                  <CTAInline>
                     <span>{CTA}</span>
                     <CTAArrow>
                        <MdArrowOutward />
                     </CTAArrow>
                  </CTAInline>
               </CTAAnchor>
            ) : (
               <CTAInline as="div">
                  <span>{CTA}</span>
                  <CTAArrow>
                     <MdArrowOutward />
                  </CTAArrow>
               </CTAInline>
            )}
         </Overlay>

         <MediaBox style={{ position: "relative" }}>
            {skeleton}
            <MediaImg
               src={src}
               alt={Header}
               loading={loading}
               onLoad={handleLoad}
               onError={handleError}
            />
         </MediaBox>

         <style>{`
        @keyframes image-sheen {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      </Wrapper>
   );
};

export default Image;
