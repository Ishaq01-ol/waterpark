import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import * as React from "react";

import attachment1 from "../../assets/task-attachments/level-tester.jpg";
import attachment2 from "../../assets/task-attachments/notes.jpg";
import attachment3 from "../../assets/task-attachments/remove-wrappers.jpg";
import { Core } from "..";
import { Icons } from "../icons";

interface ITaskDetailsCardProps {
  taskDetails: {
    title: string;
    dueDateAndTime: Date;
    description: string;
    currentStatus: string;
    persons: string[];
  };
}

const TaskDetailsCard: React.FC<ITaskDetailsCardProps> = ({ taskDetails }) => {
  const dropdwonOptions = ["Completed", "Pending", "In Process"];

  const selectOption = (selectedOption: any) => {
    console.log("selectedOption", selectedOption);
  };

  const attachments = [attachment1, attachment2, attachment3];
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];
  // let date = "";
  // let time = "";
  // const getDate = () => {
  //   date =
  //     task?.dueDateAndTime.getUTCDay() +
  //     " " +
  //     months[task?.dueDateAndTime.getUTCMonth()] +
  //     " " +
  //     task?.dueDateAndTime.getUTCFullYear();
  // };
  // const getTime = () => {
  //   time =
  //     task?.dueDateAndTime.getUTCHours() +
  //     ":" +
  //     task?.dueDateAndTime.getUTCMinutes();
  // };
  // getDate();
  // getTime();
  return (
    <Card w={"100%"} maxW={"1100px"} size="sm" p={2}>
      <CardHeader display={"flex"} justifyContent="space-between">
        <Heading size="md"> {taskDetails?.title} </Heading>
        <Core.Badge status={taskDetails?.currentStatus} />
      </CardHeader>
      <CardBody>
        <Heading as="h6" size="sm" pb="2">
          Description
        </Heading>
        <Text fontSize={"sm"}>{taskDetails?.description}</Text>

        <Flex mt="12" columnGap={"7%"}>
          <Box w="35%">
            <Heading as="h6" size="sm" mb="2">
              Due Date
            </Heading>
            <Text
              fontSize="xs"
              color="danger.100"
              fontWeight={"bold"}
              fontFamily={"Verdana"}
              display={"flex"}
              alignItems={"center"}
              columnGap={"5px"}
            >
              <Icons.BsCalendar2Date />
              {/* {date} */}date &nbsp;
              <Icons.BiTimeFive />
              {/* {time} */}time
              {/* {task?.dueDateAndTime} */}
            </Text>
          </Box>
          <Box w="65%">
            <Heading as="h6" size="sm" mb="2">
              Assigned to
            </Heading>
            <Core.PersonsGroup persons={taskDetails?.persons} />
          </Box>
        </Flex>

        <Heading as="h6" size="sm" mt="12" mb="3">
          Attached Files
        </Heading>
        <Core.AttachmentGroup attachments={attachments} />
      </CardBody>
      <CardFooter
        justifyContent={"flex-end"}
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Flex columnGap={"5px"}>
          <Core.ActionsDropdown
            status
            dropdwonOptions={dropdwonOptions}
            selectOption={selectOption}
          />
          <Button
            variant="ghost"
            colorScheme="blue"
            leftIcon={<Icons.FiEdit2 />}
            size="sm"
          >
            Edit
          </Button>
          <Button
            variant="ghost"
            colorScheme="red"
            leftIcon={<Icons.AiOutlineDelete />}
            size="sm"
          >
            Delete
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default TaskDetailsCard;
