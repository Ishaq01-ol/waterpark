/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import {
  // ChartOptions,
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
import * as React from "react";
import {
  Bar,
  Bubble,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Scatter,
} from "react-chartjs-2";

interface IChartsGroupProps {
  chartsData: any;
}

const ChartsGroup: React.FunctionComponent<IChartsGroupProps> = ({
  chartsData,
}) => {
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
  const [isLargerScreen] = useMediaQuery("(min-width: 991px)");
  return (
    <Flex
      maxW={"100%"}
      flexWrap={"wrap"}
      columnGap={"1%"}
      rowGap={"20px"}
    >
      {chartsData.map((chartData: any, index: any) => {
        return (
          <Box
            key={index * 8}
            w={"49.5%"}
            style={{
              minWidth: isLargerScreen ? "49%" : "100%",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0px 2px 5px 2px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
            }}
          >
            {chartData.chartName === "Bar" ? (
              <Bar
                key={index * 4}
                data={chartData.data}
                options={chartData.options}
              />
            ) : (
              ""
            )}
            {chartData.chartName === "Line" ? (
              <Line
                key={index * 4}
                data={chartData.data}
                options={chartData.options}
              />
            ) : (
              ""
            )}
            {chartData.chartName === "Scatter" ? (
              <Scatter
                key={index * 4}
                data={chartData.data}
                options={chartData.options}
              />
            ) : (
              ""
            )}
            {chartData.chartName === "Bubble" ? (
              <Bubble
                key={index * 4}
                data={chartData.data}
                options={chartData.options}
              />
            ) : (
              ""
            )}
            {chartData.chartName === "Radar" ? (
              <Radar
                key={index * 4}
                data={chartData.data}
                options={chartData.options}
              />
            ) : (
              ""
            )}
            {chartData.chartName === "Doughnut" ? (
              <Doughnut
                key={index * 4}
                data={chartData.data}
                options={chartData.options}
              />
            ) : (
              ""
            )}
            {chartData.chartName === "PolarArea" ? (
              <PolarArea
                key={index * 4}
                data={chartData.data}
                options={chartData.options}
              />
            ) : (
              ""
            )}
            {chartData.chartName === "Pie" ? (
              <Pie
                key={index * 4}
                data={chartData.data}
                options={chartData.options}
              />
            ) : (
              ""
            )}
          </Box>
        );
      })}
    </Flex>
  );
};

export default ChartsGroup;
