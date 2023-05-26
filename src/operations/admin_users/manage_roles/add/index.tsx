import { Box } from "@chakra-ui/react";

import { Dashboard, ManageAdminUsers } from "@/components";

interface UploaderMainViewProps {}

const UploaderMainView = (_props: UploaderMainViewProps) => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Manage Users", link: "/manage-roles" },
    { label: "Manage Roles", link: "/manage-roles" },
    { label: "Add New Role", link: "/manage-roles/add" },
  ];

  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Add New Roles"
        breadcrumb={breadcrumb}
      />
      <Box
        style={{
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 2px 5px 2px rgba(0,0,0,0.05)",
        }}
        backgroundColor="#fff"
      >
        <ManageAdminUsers.AddRoleForm />
      </Box>
    </Box>
  );
};

export default UploaderMainView;
