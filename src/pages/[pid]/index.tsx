import { Layouts } from "@/components";
import { Meta } from "@/layouts/Meta";

import MainView from "../../utils/pages/pid.view";

const Page = () => <MainView />;

Page.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layouts.AdminLayout
      meta={
        <Meta
          title="Ellis Docs Water Park"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {page}
    </Layouts.AdminLayout>
  );
};

export default Page;
