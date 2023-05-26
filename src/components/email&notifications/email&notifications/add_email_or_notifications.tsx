import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import * as React from "react";

import { Core } from "@/components";

interface IAddEmailOrNotificationFormProps {}

const AddEmailOrNotificationForm: React.FC<
  IAddEmailOrNotificationFormProps
> = () => {
  return (
    <Box>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input placeholder="Title" type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Type</FormLabel>
          <Select placeholder="Type">
            <option value="option1">Email</option>
            <option value="option2">Notification</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Message" rows={4} />
        </FormControl>
      </Flex>

      <Flex columnGap={"10px"} justifyContent="end">
        <Core.Button btnOrangeMd button="Add" />
      </Flex>
    </Box>
  );
};

export default AddEmailOrNotificationForm;
