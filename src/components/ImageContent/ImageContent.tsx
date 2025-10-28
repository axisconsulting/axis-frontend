import React, { useEffect, useState } from "react";
import { Wrapper, BgImage, Overlay, Inner, Heading, BodyText, CTABox } from "./ImageContent.styled";
import image_not_found from "$assets/image_not_found.jpg";
import Button from "$components/Button/Button";

export interface ImageContentProps {
   Header: string;
   Body: string;
   ButtonText: string;
   Image: string; // primary src
   AltText: string;
   clickTo: string; // href (can be "")
   execute?: React.MouseEventHandler<HTMLButtonElement>;
   className?: string;

   /** optional extras */
   fallbackSrc?: string; // used when primary image fails
   loading?: "eager" | "lazy";
}

const ImageContent: React.FC<ImageContentProps> = ({
   Header,
   Body,
   ButtonText,
   Image: srcProp,
   AltText,
   clickTo,
   execute,
   className,
   fallbackSrc = image_not_found,
   loading = "lazy",
}) => {
   const [src, setSrc] = useState(srcProp);
   const [loaded, setLoaded] = useState(false);
   const [failedOnce, setFailedOnce] = useState(false);

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
         setLoaded(true);
      }
   };

   const hasLink = Boolean((clickTo ?? "").trim().length);

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
      <Wrapper
         data-aos="fade-up"
         data-aos-duration="800"
         data-aos-delay="200"
         data-aos-easing="ease-in-sine"
         data-aos-offset="0"
         className={className}>
         {/* position relative is already in styled for Wrapper.
          We add skeleton overlay in the same stacking context */}
         <div style={{ position: "relative" }}>
            {skeleton}
            <BgImage
               src={src}
               alt={AltText}
               loading={loading}
               onLoad={handleLoad}
               onError={handleError}
            />
         </div>

         <Overlay>
            <Inner>
               <Heading>{Header}</Heading>
               <BodyText>{Body}</BodyText>

               <CTABox>
                  {hasLink && (
                     <a href={clickTo}>
                        <Button onClick={execute}>{ButtonText}</Button>
                     </a>
                  )}
               </CTABox>
            </Inner>
         </Overlay>

         <style>{`
        @keyframes image-sheen {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      </Wrapper>
   );
};

export default ImageContent;
