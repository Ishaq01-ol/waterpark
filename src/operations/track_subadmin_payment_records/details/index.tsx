import { Box } from "@chakra-ui/react";

import { Core, Dashboard } from "@/components";

const TrackSubAdminPaymentRecordDetails = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Manage Payment", link: "/payments" },
    {
      label: "Track Records",
      link: "/payment-records/track",
    },
    {
      label: "Details",
      //   link: "/payment-records/track/details",
      link: "/track/details",
    },
  ];

  const columns = ["month", "date", "amount", "method"];
  const data = [
    {
      month: "Jan",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
    {
      month: "Feb",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
    {
      month: "Mar",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
    {
      month: "Apr",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
    {
      month: "May",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
    {
      month: "Jun",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
    {
      month: "July",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
    {
      month: "Aug",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
    {
      month: "Sep",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
    {
      month: "Oct",
      date: "23-5-23",
      amount: "120",
      method: "Visa",
    },
  ];

  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        heading="Record Details"
        breadcrumb={breadcrumb}
      />
      <Core.Table
        data={data}
        columns={columns}
        shadow
        title="Record Details"
        filterBy={["Dates"]}
        clickable
        sortOrderId
        sortUserId
        sortDueDate
        sortRegisteredNo
        sortCreatedOn
        sortPaymentDate
        sortCustomerName
        sortAmount
        sortDate
        sortName
      />
    </Box>
  );
};

export default TrackSubAdminPaymentRecordDetails;
