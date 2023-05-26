import { Box } from "@chakra-ui/react";

import { Dashboard, UpdateEmail } from "@/components";

const UpdateEmailView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Email Update", link: "/email/update" },
  ];
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Change Password"
        breadcrumb={breadcrumb}
      />
      <Box
        borderRadius="10px"
        padding="20px"
        boxShadow="0px 2px 5px 2px rgba(0,0,0,0.05)"
        backgroundColor="#fff"
      >
        <UpdateEmail.UpdateEmailForm />
      </Box>
    </Box>
  );
};

export default UpdateEmailView;
