import { Box } from "@chakra-ui/react";

import { Dashboard, SubAdminUsers } from "@/components";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Sub Admin", link: "/sub-admin" },
    { label: "Add Sub Admin", link: "/add-sub-admin" },
  ];
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Add Sub-Admin User"
        breadcrumb={breadcrumb}
      />
      <Box
        borderRadius="10px"
        padding="20px"
        boxShadow="0px 2px 5px 2px rgba(0,0,0,0.05)"
        backgroundColor="#fff"
      >
        <SubAdminUsers.AddSubAdminForm />
      </Box>
    </Box>
  );
};

export default UploaderMainView;
