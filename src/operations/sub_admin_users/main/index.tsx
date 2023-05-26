import { Box } from "@chakra-ui/react";

import { Core, Dashboard, SubAdminUsers } from "@/components";

interface SubAdminUsersViewProps {}

const SubAdminUsersView = (_props: SubAdminUsersViewProps) => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Sub Admin", link: "/subadmins" },
  ];
  const statsData = [
    {
      title: "Sub-Admins",
      number: "998",
      percentage: "66",
      status: true,
      type: false,
    },
  ];
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Sub-Admin Users"
        breadcrumb={breadcrumb}
        button={{ name: "Add Sub-Admin", link: "/subadmins/add/" }}
      />
      <Core.StatsGroup statsData={statsData} />
      <SubAdminUsers.SubAdminUsersListing />
    </Box>
  );
};

export default SubAdminUsersView;
