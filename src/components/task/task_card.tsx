import {
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

import { Core } from "..";
import { Icons } from "../icons";

interface ITaskCardProps {
  task: any;
}

const TaskCard: React.FunctionComponent<ITaskCardProps> = ({ task }) => {
  const dropdwonOptions = ["Completed", "Pending", "In Process"];

  const selectOption = (selectedOption: any) => {
    console.log("selectedOption", selectedOption);
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  let date = "";
  let time = "";
  const getDate = () => {
    date = `${task?.dueDateAndTime.getUTCDay()} ${
      months[task?.dueDateAndTime.getUTCMonth()]
    } ${task?.dueDateAndTime.getUTCFullYear()}`;
  };
  const getTime = () => {
    time = `${task?.dueDateAndTime.getUTCHours()}:${task?.dueDateAndTime.getUTCMinutes()}`;
  };
  getDate();
  getTime();
  return (
    <Card w={"100%"} maxW={"1100px"} size="sm" p={2}>
      <CardHeader display={"flex"} justifyContent="space-between">
        <Heading size="md">{task?.title}</Heading>
        <Core.Badge status={task?.currentStatus} />
      </CardHeader>
      <CardBody>
        <Text
        // fontSize={'sm'}
        >
          {task?.description}
        </Text>
        <Text
          pt="4"
          fontSize="xs"
          color="danger.100"
          fontWeight={"bold"}
          fontFamily={"Verdana"}
          display={"flex"}
          alignItems={"center"}
          columnGap={"5px"}
        >
          <Icons.BsCalendar2Date />
          {date}
          &nbsp;
          <Icons.BiTimeFive />
          {time}
          {/* {task?.dueDateAndTime} */}
        </Text>
      </CardBody>
      <CardFooter
        justify="space-between"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Core.Button button="View Task Detail" btnBlueMd />
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

export default TaskCard;
