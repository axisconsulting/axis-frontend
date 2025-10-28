import { IoIosCheckmark } from "react-icons/io";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { BsPaperclip } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";

import { Page, Container, StatsGrid, StatColumn, CenterStack, EngagementRow } from "./Home.styled";

import Title from "$components/Title/Title";
import Icon from "$components/Icon/Icon";
import Image from "$components/Image/Image";
import ImageContent from "$components/ImageContent/ImageContent";
import { ROUTES } from "$constants/routes";

export default function Home() {
   const TEMP_URL = "https://fakeimage.com/400x300.png";

   return (
      <Page>
         <Container>
            <Title
               Header="Personal Growth,"
               Header2="Community Impact"
               Body="Axis Consulting is a student-led pro-bono consultancy part of Simon
            Fraser University."
            />

            <StatsGrid>
               <StatColumn>
                  <Icon Icon={IoIosCheckmark} Text="70+ Projects" clickTo="" />
                  <Icon Icon={MdOutlinePeopleAlt} Text="268 Alumni" clickTo="" />
                  <Icon Icon={IoMdStarOutline} Text="4.5/5 Rating" clickTo="" />
               </StatColumn>

               <StatColumn>
                  <Icon Icon={BsPaperclip} Text="200+ Students Engaged" clickTo="" />
                  <Icon Icon={FaRegHeart} Text="96% Satisfaction" clickTo="" />
                  <Icon Icon={FaRegStickyNote} Text="98% Implementation" clickTo="" />
               </StatColumn>
            </StatsGrid>

            <section>
               <CenterStack>
                  <h1>Our Engagements</h1>
                  <EngagementRow>
                     <Image
                        Header="Visier"
                        Body="Market research on the field of HR analytics, market trends in HR and finance interactions."
                        CTA="More information on the client"
                        Image={TEMP_URL}
                        clickTo={TEMP_URL}
                        loading="lazy"
                     />
                     <Image
                        Header="West Coast Kids Cancer Foundation"
                        Body="Analysis on the supply chain, bottleneck identification, and recommendation of a just-in-time inventory system"
                        CTA="More information on the client"
                        Image={TEMP_URL}
                        clickTo={TEMP_URL}
                        loading="lazy"
                     />
                  </EngagementRow>
               </CenterStack>
            </section>

            <ImageContent
               Header="Ready to Soar?"
               Body="Join the team, come to events, and expand horizons within the field of consulting"
               ButtonText="Get Involved"
               Image={TEMP_URL}
               AltText="The Axis Consulting Organization 2024-2025 posing for our annual group photo"
               clickTo={ROUTES.GET_INVOLVED}
               loading="lazy"
            />
         </Container>
      </Page>
   );
}
