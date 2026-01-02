import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import { ROUTES } from "$constants/routes";
import { ROUTE_STRINGS } from "$constants/routeStrings";
import { BREAKPOINTS } from "$styles/constants/breakpoints";
import {
   NavbarContainer,
   NavbarContent,
   NavbarHeader,
   Logo,
   LogoAccent,
   LogoText,
   MobileMenuButton,
   NavLinks,
   NavLink,
   Backdrop,
} from "./Navbar.styled";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const containerRef = useRef<HTMLElement | null>(null);

   const toggleNavbar = () => setIsOpen((v) => !v);
   const closeNavbar = () => setIsOpen(false);

   // Close on route click (mobile)
   const onNavClick = () => closeNavbar();

   // Close on click-away + Escape (mobile only)
   useEffect(() => {
      if (!isOpen) return;

      const mq = window.matchMedia(`(min-width: ${BREAKPOINTS.LARGE})`);
      const isDesktop = mq.matches;
      if (isDesktop) return; // only apply on mobile

      const handleClickAway = (e: MouseEvent | TouchEvent) => {
         const target = e.target as Node | null;
         if (containerRef.current && target && !containerRef.current.contains(target)) {
            closeNavbar();
         }
      };

      const handleEsc = (e: KeyboardEvent) => {
         if (e.key === "Escape") closeNavbar();
      };

      document.addEventListener("mousedown", handleClickAway);
      document.addEventListener("touchstart", handleClickAway, { passive: true });
      document.addEventListener("keydown", handleEsc);

      // Keep in sync if the viewport changes while open
      const handleMQChange = (ev: MediaQueryListEvent) => {
         if (ev.matches) closeNavbar();
      };
      mq.addEventListener?.("change", handleMQChange);

      return () => {
         document.removeEventListener("mousedown", handleClickAway);
         document.removeEventListener("touchstart", handleClickAway);
         document.removeEventListener("keydown", handleEsc);
         mq.removeEventListener?.("change", handleMQChange);
      };
   }, [isOpen]);

   return (
      <>
         {/* Backdrop only shows on mobile when open; click to close */}
         {isOpen && <Backdrop onClick={closeNavbar} />}

         <NavbarContainer ref={containerRef} $isOpen={isOpen}>
            <NavbarContent>
               <NavbarHeader>
                  <Logo>
                     <Link to={ROUTES.HOME} onClick={onNavClick}>
                        <LogoAccent>Axis</LogoAccent>
                        <LogoText> Consulting</LogoText>
                     </Link>
                  </Logo>
                  <MobileMenuButton
                     onClick={toggleNavbar}
                     aria-expanded={isOpen}
                     aria-controls="mobile-nav-links"
                     aria-label="Toggle navigation">
                     {isOpen ? "✕" : <IoMenu />}
                  </MobileMenuButton>
               </NavbarHeader>

               <NavLinks id="mobile-nav-links" $isOpen={isOpen} role="menu">
                  <div>
                     <ul>
                        <NavLink to={ROUTES.ABOUT} onClick={onNavClick} role="menuitem">
                           {ROUTE_STRINGS.ABOUT}
                        </NavLink>
                        <NavLink to={ROUTES.CLIENTS} onClick={onNavClick} role="menuitem">
                           {ROUTE_STRINGS.CLIENTS}
                        </NavLink>
                        <NavLink to={ROUTES.SPONSORS} onClick={onNavClick} role="menuitem">
                           {ROUTE_STRINGS.SPONSORS}
                        </NavLink>
                        <NavLink to={ROUTES.RESOURCES} onClick={onNavClick} role="menuitem">
                           {ROUTE_STRINGS.RESOURCES}
                        </NavLink>
                        <NavLink to={ROUTES.GET_INVOLVED} onClick={onNavClick} role="menuitem">
                           {ROUTE_STRINGS.GET_INVOLVED}
                        </NavLink>
                     </ul>
                  </div>
               </NavLinks>
            </NavbarContent>
         </NavbarContainer>
      </>
   );
}
