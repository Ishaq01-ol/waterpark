import { Box } from "@chakra-ui/react";

import { Core, Dashboard } from "@/components";

interface TaskMainViewProps {}

const breadcrumb = [
  { label: "Waterpark Management", link: "/dashboard" },
  { label: "All Tasks", link: "/tasks" },
];

const allTasks = [
  {
    title: "Check Clorine Level",
    dueDateAndTime: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    currentStatus: "pending",
  },
  {
    title: "Clean all Pools",
    dueDateAndTime: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    currentStatus: "completed",
  },
  {
    title: "Check the slides",
    dueDateAndTime: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    currentStatus: "inprocess",
  },
  {
    title: "Check Clorine Level",
    dueDateAndTime: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    currentStatus: "pending",
  },
  {
    title: "Clean all Pools",
    dueDateAndTime: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    currentStatus: "completed",
  },
  {
    title: "Check the slides",
    dueDateAndTime: new Date(),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    currentStatus: "inprocess",
  },
];

const TaskMainView = (_props: TaskMainViewProps) => {
  const dropdwonOptions = ["Completed", "Pending", "In Process"];
  const selectOption = (selectedOption: any) => {
    console.log("selectedOption", selectedOption);
  };

  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="All Tasks"
        breadcrumb={breadcrumb}
        dropdwonOptions={dropdwonOptions}
        dropdwonType="filter"
        defaultName="Filter By"
        selectOption={selectOption}
        button={{ name: "Add Task", link: "/tasks/add/" }}
      />
      <Core.ViewTasks allTasks={allTasks} />
    </Box>
  );
};

export default TaskMainView;
