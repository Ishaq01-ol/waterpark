import { Box } from "@chakra-ui/react";

import { Core, Dashboard } from "@/components";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "All Tasks", link: "/all-tasks" },
    { label: "Track Tasks", link: "/track-tasks" },
  ];

  const data = [
    {
      Title: "Check Clorine Level",
      dueDateAndTime: "2-3-23, 7:04pm",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      currentStatus: "pending",
    },
    {
      Title: "Clean all Pools",
      dueDateAndTime: "12-7-23, 3:12pm",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      currentStatus: "completed",
    },
    {
      Title: "Check the slides",
      dueDateAndTime: "6-4-23, 9:04am",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      currentStatus: "inprocess",
    },
    {
      Title: "Check Clorine Level",
      dueDateAndTime: "2-3-23, 7:04pm",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      currentStatus: "pending",
    },
    {
      Title: "Clean all Pools",
      dueDateAndTime: "12-7-23, 3:12pm",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      currentStatus: "completed",
    },
    {
      Title: "Check the slides",
      dueDateAndTime: "6-4-23, 9:04am",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      currentStatus: "inprocess",
    },
  ];
  const columns = ["Title", "dueDateAndTime", "Description", "currentStatus"];
  const filterByTaskStatusOptions = ["Completed", "Pending", "InProcess"];
  const selectOption = (selectedOption: any) => {
    console.log("selectedOption", selectedOption);
  };
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Track Tasks"
        breadcrumb={breadcrumb}
      />
      <Core.Table
        data={data}
        columns={columns}
        shadow
        title="Task Tracking"
        dropdwonOptions={filterByTaskStatusOptions}
        selectOption={selectOption}
        filterBy={["TaskStatus"]}
      />
    </Box>
  );
};

export default UploaderMainView;
