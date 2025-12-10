import { type FC } from "react";
import { PageWrapper } from "$styles/constants/PageWrapper";
import Title from "$components/Title/Title";
import { Link } from "react-router-dom";
import { ROUTES } from "$constants/routes";

const NotFound: FC = () => {
   return (
      <PageWrapper>
         <Title
            Header="404 Page not Found"
            Body="Sorry, the page you are looking for does not exist."
         />
         <Link to={ROUTES.HOME}>Go back to Home</Link>
      </PageWrapper>
   );
};

export default NotFound;
