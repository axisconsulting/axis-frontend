import type { FC } from "react";

import Title from "$components/Title/Title";

import { PageWrapper } from "$styles/constants/PageWrapper";

const Resources: FC = () => {
   return (
      <PageWrapper>
         <Title
            Header="Resources"
            Body="Explore our packages and learn more about what Axis has to offer."
         />
      </PageWrapper>
   );
};

export default Resources;
