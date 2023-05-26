import { Box } from "@chakra-ui/react";

import { Dashboard, ManageAdminUsers } from "@/components";

interface UploaderMainViewProps {}

const UploaderMainView = (_props: UploaderMainViewProps) => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Manage Admin Users", link: "/admin/manage-roles" },
    { label: "Manage Users", link: "/admin/manage-users" },
    { label: "Add User", link: "/manage-users/add" },
  ];
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader heading="Add User" breadcrumb={breadcrumb} />
      <Box
        borderRadius="10px"
        padding="20px"
        boxShadow="0px 2px 5px 2px rgba(0,0,0,0.05)"
        backgroundColor="#fff"
      >
        <ManageAdminUsers.AddUserForm />
      </Box>
    </Box>
  );
};

export default UploaderMainView;
