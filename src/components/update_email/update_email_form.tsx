import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as React from "react";

import { Core } from "..";

interface IUpdateEmailFormProps {}

const UpdateEmailForm: React.FC<IUpdateEmailFormProps> = () => {
  return (
    <Box>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>Current Email</FormLabel>
          <Input placeholder="Current Email" type="text" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input placeholder="Password" type="password" />
        </FormControl>
      </Flex>

      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>New Email</FormLabel>
          <Input placeholder="New Email" type="text" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>New Password</FormLabel>
          <Input placeholder="New Password" type="password" />
        </FormControl>
      </Flex>

      <Flex columnGap={"10px"} justifyContent="end">
        <Core.Button btnOrangeMd button="Submit" />
      </Flex>
    </Box>
  );
};

export default UpdateEmailForm;
