import { Box } from "@chakra-ui/react";
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";

import { Core, Dashboard } from "@/components";

const UploaderMainView = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    LineElement,
    RadialLinearScale,
    TimeScale,
    BarController,
    BarElement,
    Title,
    ArcElement,
    Tooltip,
    Legend
  );

  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Dashboard", link: "/dashboard" },
  ];

  const chartsData = [
    {
      chartName: "Bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Poll",
            data: [3, 10, 20, 16, 12, 10, 20, 23, 27, 25, 30, 46],
            // backgroundColor: ["black", "red", "orange", "blue"],
            backgroundColor: "rgba(223, 127, 27,0.8)",
            // borderColor: ["black", "red", "green", "purple"],
            // tension: 0.4,
            // fill: true,
          },
        ],
      },
      options: {},
    },
    {
      chartName: "Line",
      data: {
        labels: ["2023", "2024", "2025", "2026", "2027", "2028"],
        datasets: [
          {
            label: "Poll",
            data: [20, 30, 40, 36, 55, 60],
            // backgroundColor: ["black", "red", "orange", "blue"],
            backgroundColor: "rgba(223, 127, 27,0.8)",
            // borderColor: ["black", "red", "green", "purple"],
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {},
    },
  ];

  const statsData = [
    {
      title: "Monthly Revenue",
      number: "978",
      percentage: "29",
      status: false,
      type: true,
    },
    {
      title: "Admin Users",
      number: "102",
      percentage: "45",
      status: true,
      type: false,
    },
    {
      title: "Sub-Admin Users",
      number: "242",
      percentage: "50",
      status: true,
      type: false,
    },
    {
      title: "Pending Payments",
      number: "43",
      percentage: "20",
      status: false,
      type: true,
    },
  ];

  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader heading="Dashboard" breadcrumb={breadcrumb} />
      <Core.StatsGroup statsData={statsData} />
      <Core.ChartsGroup chartsData={chartsData} />
      <Dashboard.DashboardListing />
    </Box>
  );
};

export default UploaderMainView;
