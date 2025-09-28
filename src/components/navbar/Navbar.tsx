import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ROUTES } from "../../constants/routes";
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
} from "./navbar.styled";
import { ROUTE_STRINGS } from "../../constants/strings";

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleNavbar = () => {
      setIsOpen(!isOpen);
   };

   return (
      <NavbarContainer $isOpen={isOpen}>
         <NavbarContent>
            <NavbarHeader>
               <Logo>
                  <Link to={ROUTES.HOME}>
                     <LogoAccent>Axis</LogoAccent>
                     <LogoText> Consulting</LogoText>
                  </Link>
               </Logo>
               <MobileMenuButton onClick={toggleNavbar}>
                  {isOpen ? "✕" : <IoMenu />}
               </MobileMenuButton>
            </NavbarHeader>
            <NavLinks $isOpen={isOpen}>
               <NavLink to={ROUTES.RESOURCES}>{ROUTE_STRINGS.RESOURCES}</NavLink>
               <NavLink to={ROUTES.ABOUT}>{ROUTE_STRINGS.ABOUT}</NavLink>
               <NavLink to={ROUTES.CLIENTS}>{ROUTE_STRINGS.CLIENTS}</NavLink>
               <NavLink to={ROUTES.SPONSORS}>{ROUTE_STRINGS.SPONSORS}</NavLink>
               <NavLink to={ROUTES.GET_INVOLVED}>{ROUTE_STRINGS.GET_INVOLVED}</NavLink>
            </NavLinks>
         </NavbarContent>
      </NavbarContainer>
   );
}

export default Navbar;
