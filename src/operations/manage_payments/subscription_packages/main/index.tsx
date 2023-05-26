import { Box } from "@chakra-ui/react";

import { Dashboard, Payments } from "@/components";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Manage Payments", link: "/payments" },
    { label: "Subscription Packages", link: "/payments/subscription" },
  ];
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Subscription Packages"
        breadcrumb={breadcrumb}
        button={{
          name: "Add New Package",
          link: "/subscription/edit?id='123'",
        }}
      />
      <Payments.ListSubscriptionPackage />
    </Box>
  );
};

export default UploaderMainView;
