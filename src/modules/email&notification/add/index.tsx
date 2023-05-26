import { Box } from "@chakra-ui/react";

import { Dashboard, EmailAndNotification } from "@/components";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Email & Notifications", link: "/email-&-notifications" },
    { label: "Add Email or Notifications", link: "/email-&-notifications/add" },
  ];

  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Add Email or Notifications"
        breadcrumb={breadcrumb}
      />
      <Box
        borderRadius="10px"
        padding="20px"
        boxShadow="0px 2px 5px 2px rgba(0,0,0,0.05)"
        backgroundColor="#fff"
      >
        <EmailAndNotification.AddEmailOrNotificationForm />
      </Box>
    </Box>
  );
};

export default UploaderMainView;
