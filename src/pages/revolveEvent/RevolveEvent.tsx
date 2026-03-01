import type { FC } from "react";

import Title from "$components/Title/Title";
import { PageWrapper } from "$styles/constants/PageWrapper";

const RevolveEvent: FC = () => {
   return (
      <PageWrapper>
         <Title
            Header="Revolve Consulting Conference"
            Body="Get ready to network with industry professionals, hear key insights from our speakers, and engage in firm-led workshops."
         />
      </PageWrapper>
   );
};

export default RevolveEvent;
