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

import { Core } from "@/components";
import { Icons } from "@/components/icons";

interface IWebsiteContactFormDetailsProps {
  contactFormDetails: {
    senderName: string;
    dueDateAndTime: Date;
    description: string;
    currentStatus: string;
    email: string;
    phoneNo: string;
  };
}

const WebsiteContactFormDetails: React.FC<IWebsiteContactFormDetailsProps> = ({
  contactFormDetails,
}) => {
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
        <Heading size="md"> {contactFormDetails?.senderName} </Heading>
        <Core.Badge status={"new"} />
      </CardHeader>
      <CardBody>
        <Heading as="h6" size="sm" pb="2">
          Description
        </Heading>
        <Text fontSize={"sm"}>{contactFormDetails?.description}</Text>

        <Flex mt="12" columnGap={"7%"}>
          <Box w="65%">
            <Heading as="h6" size="sm" mb="2">
              Email
            </Heading>
            <Text>{contactFormDetails.email}</Text>
          </Box>
          <Box w="65%">
            <Heading as="h6" size="sm" mb="2">
              Phone No.
            </Heading>
            <Text>{contactFormDetails.phoneNo}</Text>
          </Box>
          <Box w="35%">
            <Heading as="h6" size="sm" mb="2">
              Date Submitted
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
        </Flex>
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
          <Button variant="outline" colorScheme="blue" size="sm">
            Acknowledge
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default WebsiteContactFormDetails;
