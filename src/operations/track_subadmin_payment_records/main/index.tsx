import { Box } from "@chakra-ui/react";

import { Dashboard, TrackSubAdminPaymentRecords } from "@/components";

const TrackSubadminPaymentRecordsMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Manage Payment", link: "/payments" },
    {
      label: "Track Records",
      link: "/payment-records/track",
    },
  ];
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Track Sub-Admin Payment Records"
        breadcrumb={breadcrumb}
      />
      <TrackSubAdminPaymentRecords.TrackSubAdminPaymentRecordsListing />
    </Box>
  );
};

export default TrackSubadminPaymentRecordsMainView;
