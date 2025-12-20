import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { BsPaperclip } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";

import { Container, StatsGrid, StatColumn, CenterStack, EngagementRow } from "./Home.styled";

import Title from "$components/Title/Title";
import Icon from "$components/icons/IconContainer/IconContainer";
import { ROUTES } from "$constants/routes";
import ImageContainer from "$components/images/ImageContainer/ImageContainer";
import ImageContent from "$components/images/ImageContent/ImageContent";
import { CLIENT_LOGOS_BY_KEY } from "$constants/pages/clients";
import { HOME_URLS } from "$constants/pages/home";

export default function Home() {
   return (
      <>
         <Container>
            <Title
               Header="Personal Growth,"
               Header2="Community Impact"
               Body="Axis Consulting is a student-led pro-bono consultancy part of Simon
            Fraser University"
            />

            <StatsGrid>
               <StatColumn>
                  <Icon Icon={IoIosCheckmarkCircleOutline} Text="70+ Projects" sizePercent={80} />
                  <Icon Icon={MdOutlinePeopleAlt} Text="268 Alumni" />
                  <Icon Icon={IoMdStarOutline} Text="4.5/5 Rating" />
               </StatColumn>

               <StatColumn>
                  <Icon Icon={BsPaperclip} Text="200+ Students Engaged" />
                  <Icon Icon={FaRegHeart} Text="96% Satisfaction" />
                  <Icon Icon={FaRegStickyNote} Text="98% Implementation" />
               </StatColumn>
            </StatsGrid>

            <section>
               <CenterStack>
                  <h1>Our Engagements</h1>
                  <EngagementRow>
                     <ImageContainer
                        Header="Visier"
                        Body="Market research on the field of HR analytics, market trends in HR and finance interactions"
                        CTA="More information on the client"
                        Image={HOME_URLS.visier_card}
                        clickTo={CLIENT_LOGOS_BY_KEY.visier.website}
                        loading="lazy"
                     />
                     <ImageContainer
                        Header="West Coast Kids Cancer Foundation"
                        Body="Analysis on the supply chain, bottleneck identification, and recommendation of a just-in-time inventory system"
                        CTA="More information on the client"
                        Image={HOME_URLS.wck_card}
                        clickTo={CLIENT_LOGOS_BY_KEY.wck.website}
                        loading="lazy"
                     />
                  </EngagementRow>
               </CenterStack>
            </section>

            <ImageContent
               Header="Ready to Soar?"
               Body="Join the team, come to events, and expand horizons within the field of consulting"
               ButtonText="Get Involved"
               ImageSrc={HOME_URLS.get_involved_card}
               AltText="The Axis Consulting Organization 2024-2025 posing for our annual group photo"
               clickTo={ROUTES.GET_INVOLVED}
            />
         </Container>
      </>
   );
}
