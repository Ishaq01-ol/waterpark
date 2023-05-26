import { Box } from "@chakra-ui/react";

import { Dashboard, Payments } from "@/components";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Subscription Packages", link: "/payments/subscription" },
    { label: "Add Subscription Packages", link: "/payments/subscription/add" },
  ];

  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Add Subscriptions Package"
        breadcrumb={breadcrumb}
      />
      <Box
        borderRadius="10px"
        padding="20px"
        boxShadow="0px 2px 5px 2px rgba(0,0,0,0.05)"
        backgroundColor="#fff"
      >
        <Payments.AddSubscriptionPackageForm />
      </Box>
    </Box>
  );
};

export default UploaderMainView;
