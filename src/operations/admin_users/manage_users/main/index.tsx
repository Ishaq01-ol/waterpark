import { Box } from "@chakra-ui/react";

import { Core, Dashboard, ManageAdminUsers } from "@/components";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Manage Admin Users", link: "/admin/manage-roles" },
    { label: "Manage Users", link: "/admin/manage-users" },
  ];
  const statsData = [
    {
      title: "Users",
      number: "1208",
      percentage: "43",
      status: false,
      type: false,
    },
    {
      title: "Active Users",
      number: "1200",
      percentage: "57",
      status: true,
      type: false,
    },
    {
      title: "In Active Users",
      number: "8",
      percentage: "2",
      status: false,
      type: false,
    },
  ];

  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Manage Users"
        breadcrumb={breadcrumb}
        button={{ name: "Add User", link: "/manage-users/add" }}
      />
      <Core.StatsGroup statsData={statsData} />
      <ManageAdminUsers.UserListing />
    </Box>
  );
};

export default UploaderMainView;
