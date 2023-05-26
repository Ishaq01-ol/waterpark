import { Box } from "@chakra-ui/react";

import { Dashboard, EmailAndNotification } from "@/components";

interface TaskMainViewProps {}

const breadcrumb = [
  { label: "Waterpark Management", link: "/dashboard" },
  { label: "Email & Notifications", link: "/email-&-notifications" },
];

const TaskMainView = (_props: TaskMainViewProps) => {
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Email & Notifications"
        breadcrumb={breadcrumb}
        button={{
          name: "Add Email or Notifications",
          link: "/email-&-notifications/add/",
        }}
      />
      <EmailAndNotification.EmailOrNotificationsListing />
    </Box>
  );
};

export default TaskMainView;
