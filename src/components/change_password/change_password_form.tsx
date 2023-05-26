import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as React from "react";

import { Core } from "..";

interface IChangePasswordFormProps {}

const ChangePasswordForm: React.FC<IChangePasswordFormProps> = () => {
  return (
    <Box>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" type="text" />
        </FormControl>
      </Flex>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>Old Password</FormLabel>
          <Input placeholder="Old Password" type="password" />
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

export default ChangePasswordForm;
