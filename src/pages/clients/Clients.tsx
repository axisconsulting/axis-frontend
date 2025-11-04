import ImageContent from "$components/images/ImageContent/ImageContent";
import Title from "$components/Title/Title";
import { AXIS_LINKS } from "$constants/links";
import { PageWrapper } from "./Clients.styled";

export default function Clients() {
   const TEMP_URL = "https://fakeimage.com/400x300.png";

   return (
      <PageWrapper>
         <Title
            Header="Our Clients"
            Body="We have worked with a variety of clients from different industries. Here are some of the clients we have worked with."
         />

         <div>Client 1</div>
         <div>Client 2</div>
         <div>Client 3</div>
         <div>Client 4</div>

         <h3>Clients We have worked with</h3>
         <ul>
            <li>Client A</li>
            <li>Client B</li>
            <li>Client C</li>
            <li>Client D</li>
         </ul>

         <ImageContent
            Header="Want to work with us?"
            Body="Let's get in touch!"
            ButtonText="Contact Us"
            ImageSrc={TEMP_URL}
            clickTo={`mailto:${AXIS_LINKS.EMAIL}`}
            AltText="The Axis Consulting Organization 2024-2025 posing for our annual group photo"
            loading="eager"
         />
      </PageWrapper>
   );
}
