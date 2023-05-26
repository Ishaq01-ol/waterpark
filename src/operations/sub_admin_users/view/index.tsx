import { Box } from "@chakra-ui/react";

import { Core, Dashboard } from "@/components";

const UploaderMainView = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Sub Admin", link: "/sub-admin" },
    { label: "Add Sub Admin", link: "/add-sub-admin" },
  ];
  const tabsDetail = {
    tabsName: ["Basic Details", "Parks/Branches", "Subscription History"],
    tabsContent: [
      {
        informations: {
          data: [
            {
              title: "name",
              value: "Ammar Qureshi",
            },
            {
              title: "email",
              value: "abc@gmail.com",
            },
            {
              title: "contact number",
              value: "0323 0000000",
            },
          ],
        },
      },
      {
        informations: {
          data: [
            {
              title: "Total Locations",
              value: "Lorem ipsum dolor ",
            },
            {
              title: "Total Parks",
              value: "Lorem ipsum dolor ",
            },
          ],
        },
        table: {
          columns: ["name", "location", "registeredNo", "action"],
          rowsData: [
            {
              name: "Abc Water Park",
              location: "Kharadar, Karachi",
              registeredNo: "28826387",
              action: {
                edit: true,
                delete: true,
              },
            },
            {
              name: "Kids Water Park",
              location: "Sakkur, Sindh",
              registeredNo: "28826387",
              action: {
                edit: true,
                delete: true,
              },
            },
            {
              name: "Child Water Park",
              location: "Kharadar, Karachi",
              registeredNo: "28826387",
              action: {
                edit: true,
                delete: true,
              },
            },
            {
              name: "Abc Water Park",
              location: "Kharadar, Karachi",
              registeredNo: "28826387",
              action: {
                edit: true,
                delete: true,
              },
            },
          ],
        },
      },
    ],
  };
  return (
    <Box w="100%" p={4} h="100%">
      <Dashboard.DashboardHeader
        heading="Add Sub-Admin User"
        breadcrumb={breadcrumb}
      />
      <Box
        style={{
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 2px 5px 2px rgba(0,0,0,0.05)",
        }}
        backgroundColor="#fff"
        h="100%"
      >
        <Core.Tabb tabsDetail={tabsDetail} />
      </Box>
    </Box>
  );
};

export default UploaderMainView;
