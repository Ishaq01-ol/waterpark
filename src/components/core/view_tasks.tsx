import { Box, Flex, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import * as React from "react";

import { Core } from "..";

interface IViewTasksProps {
  allTasks: any;
  // selectedOption?: string;
}

const ViewTasks: React.FunctionComponent<IViewTasksProps> = ({
  allTasks,
  // selectedOption,
}) => {
  const incompletedTasks = allTasks.filter(
    (task: any) => task.currentStatus !== "completed"
  );
  const completedTasks = allTasks.filter(
    (task: any) => task.currentStatus === "completed"
  );
  return (
    // <SimpleGrid
    //   spacing={4}
    //   templateColumns="repeat(auto-fill, minmax(100%, 1fr))"
    // >
    <Flex flexDirection={"column"} rowGap={"20px"}>
      <Box
        p="20px"
        borderWidth={"1px"}
        borderStyle="solid"
        borderColor={"danger.200"}
        borderRadius="5px"
        w={"100%"}
      >
        <Heading size={"md"} as="h3" mb="20px" color={"red"}>
          Incompleted
        </Heading>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(100%, 1fr))"
        >
          {incompletedTasks?.map((task: any, index: any) => {
            return <Core.TaskCard key={index * 5} task={task} />;
          })}
        </SimpleGrid>
      </Box>
      <Spacer />
      <hr />
      <Spacer />
      <Box
        p="20px"
        borderWidth={"1px"}
        borderStyle="solid"
        borderColor={"gree.200"}
        borderRadius="5px"
        w={"100%"}
      >
        <Heading size={"md"} as="h3" mb="20px" color={"green"}>
          Completed
        </Heading>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(100%, 1fr))"
        >
          {completedTasks?.map((task: any, index: any) => {
            return <Core.TaskCard key={index * 5} task={task} />;
          })}
        </SimpleGrid>
      </Box>
    </Flex>

    // </SimpleGrid>
  );
};

export default ViewTasks;
