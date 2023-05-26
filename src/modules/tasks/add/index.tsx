import { Box } from "@chakra-ui/react";

import { Dashboard } from "@/components";
import AddTask from "@/components/task/add_task";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "All Tasks", link: "/all-tasks" },
    { label: "Add Task", link: "/sub-task" },
  ];

  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Add new task"
        breadcrumb={breadcrumb}
      />
      <Box
        mt={"10px"}
        style={{
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 2px 5px 2px rgba(0,0,0,0.05)",
        }}
        backgroundColor="#fff"
      >
        <AddTask />
      </Box>
    </Box>
  );
};

export default UploaderMainView;
