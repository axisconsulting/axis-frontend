// Hyperlink.tsx
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { HyperlinkWrapper, StyledAnchor, Arrow } from "./hyperlink.styled";

export interface HyperlinkProps {
   text: string;
   clickTo?: string; // normal link or route
   mailto?: string; // for email links
   isArrowEnabled?: boolean; // future use
}

const Hyperlink: React.FC<HyperlinkProps> = ({ text, clickTo, mailto, isArrowEnabled = false }) => {
   const href = mailto ? `mailto:${mailto}` : clickTo ?? "#";
   const external = href.startsWith("http");

   let linkProps;
   if (external) {
      linkProps = { href, target: "_blank", rel: "noopener noreferrer" };
   } else if (mailto) {
      linkProps = { href };
   } else {
      linkProps = { to: href, as: RouterLink };
   }

   return (
      <HyperlinkWrapper>
         <StyledAnchor {...linkProps}>{text}</StyledAnchor>
         {isArrowEnabled && (
            <Arrow>
               <MdArrowOutward />
            </Arrow>
         )}
      </HyperlinkWrapper>
   );
};

export default Hyperlink;
