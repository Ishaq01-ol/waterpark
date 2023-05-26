import { Box } from "@chakra-ui/react";

import { Core, Dashboard, Payments } from "@/components";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Manage Payments", link: "/payments" },
    { label: "Payments", link: "/payments" },
  ];

  const statsData = [
    {
      title: "Daily Amount",
      number: "78",
      percentage: "32",
      status: false,
      type: true,
    },
    {
      title: "Monthly Amount",
      number: "2328",
      percentage: "67",
      status: false,
      type: true,
    },
    {
      title: "Yearly Amount",
      number: "64000",
      percentage: "44",
      status: false,
      type: true,
    },
  ];
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader heading="Payments" breadcrumb={breadcrumb} />
      <Core.StatsGroup statsData={statsData} />
      <Payments.PaymentsListing />
    </Box>
  );
};

export default UploaderMainView;
