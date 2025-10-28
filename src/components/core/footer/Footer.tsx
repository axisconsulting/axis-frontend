// Footer.tsx
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import Hyperlink from "$components/Hyperlink/Hyperlink";
import {
   Wrapper,
   TopNav,
   AddressDesktop,
   RightCols,
   LinkGroup,
   BottomBar,
   Socials,
   SocialLink,
   AddressMobile,
} from "./Footer.styled";

import { ROUTES } from "$constants/routes";
import { AXIS_LINKS, SOCIAL_LINKS } from "$constants/links";

const currentYear: number = new Date().getFullYear();

export default function Footer() {
   return (
      <Wrapper>
         <TopNav>
            <AddressDesktop>
               <h6>Axis Consulting</h6>
               <div className="block">
                  <h6>8888 University Drive</h6>
                  <h6>Burnaby, BC</h6>
                  <h6>V5A 1S6</h6>
               </div>
            </AddressDesktop>

            <RightCols>
               <LinkGroup>
                  <h6>Our Resources</h6>
                  <Hyperlink text="Resources" clickTo={ROUTES.RESOURCES} />
                  <Hyperlink text="Email" mailto={AXIS_LINKS.EMAIL} />
                  <Hyperlink text="Recruitment Package" clickTo={AXIS_LINKS.RECRUITMENT_PACKAGE} />
               </LinkGroup>
               <LinkGroup>
                  <h6>Discover</h6>
                  <Hyperlink text="About" clickTo={ROUTES.ABOUT} />
                  <Hyperlink text="Clients" clickTo={ROUTES.CLIENTS} />
                  <Hyperlink text="Sponsors" clickTo={ROUTES.SPONSORS} />
                  <Hyperlink text="Get Involved" clickTo={ROUTES.GET_INVOLVED} />
               </LinkGroup>
            </RightCols>
         </TopNav>

         <BottomBar>
            <h6 className="left">Axis Consulting @ {currentYear}</h6>

            <Socials aria-label="Social media links">
               <SocialLink
                  href={SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn">
                  <FaLinkedinIn />
               </SocialLink>

               <SocialLink
                  href={SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram">
                  <FaInstagram />
               </SocialLink>

               <SocialLink
                  href={SOCIAL_LINKS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook">
                  <FaFacebookF />
               </SocialLink>
            </Socials>

            <AddressMobile>
               <hr />
               <div className="block">
                  <h6>8888 University Drive</h6>
                  <h6>Burnaby, BC</h6>
                  <h6>V5A 1S6</h6>
               </div>
            </AddressMobile>
         </BottomBar>
      </Wrapper>
   );
}
