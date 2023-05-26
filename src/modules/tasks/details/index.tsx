import { Box } from "@chakra-ui/react";

import { Core, Dashboard } from "@/components";

interface ITaskDetailsProps {}

const breadcrumb = [
  { label: "Waterpark Management", link: "/dashboard" },
  { label: "All Tasks", link: "/tasks" },
  { label: "Task Details" },
];

const taskDetails = {
  title: "Check Clorine Level",
  dueDateAndTime: new Date(),
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  currentStatus: "pending",
  persons: [
    "Salman Aslam",
    "Kamran Khan",
    "Ubaidullah",
    "Adnan Kareem",
    "Tufail Yousufi",
    "Tanveer Arshad",
  ],
};

const TaskDetails: React.FunctionComponent<ITaskDetailsProps> = () => {
  const dropdwonOptions = ["Completed", "Pending", "In Process"];
  const selectOption = (selectedOption: any) => {
    console.log("selectedOption", selectedOption);
  };
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Task Details"
        breadcrumb={breadcrumb}
        dropdwonOptions={dropdwonOptions}
        dropdwonType="filter"
        defaultName="Filter By"
        selectOption={selectOption}
        button={{ name: "Add Task", link: "/tasks/add/" }}
      />
      <Core.TaskDetailsCard taskDetails={taskDetails} />
    </Box>
  );
};

export default TaskDetails;
