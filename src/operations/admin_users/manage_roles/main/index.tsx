import { Box } from "@chakra-ui/react";

import { Core, Dashboard, ManageAdminUsers } from "@/components";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Manage Admin Users", link: "/admin/manage-roles" },
    { label: "Manage Roles", link: "/admin/manage-roles" },
  ];
  const statsData = [
    {
      title: "No. of Roles",
      number: "26",
      percentage: "12",
      status: false,
    },
  ];
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Manage Roles"
        breadcrumb={breadcrumb}
        button={{ name: "Add Role", link: "/manage-roles/add/" }}
      />
      <Core.StatsGroup statsData={statsData} />
      <ManageAdminUsers.RoleListing />
    </Box>
  );
};

export default UploaderMainView;
