import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import { Core } from "..";

interface IAddSubAdminFormProps {}

const AddSubAdminForm: React.FC<IAddSubAdminFormProps> = () => {
  return (
    <Box>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Account Type</FormLabel>
          <Select placeholder="Select country">
            <option>Payed</option>
            <option>Unpayed</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter Email" type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input placeholder="Enter Password" type="password" />
        </FormControl>
      </Flex>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>Registration Date</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Package</FormLabel>
          <Select placeholder="Select Package">
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex columnGap={"10px"}>
        <FormControl isRequired>
          <FormLabel>Company name</FormLabel>
          <Input placeholder="Company name" type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Company address</FormLabel>
          <Input placeholder="Company address" type="text" />
        </FormControl>
      </Flex>
      <Flex columnGap={"10px"} justifyContent="end">
        <Core.Button btnOrangeMd button="Add User" />
      </Flex>
    </Box>
  );
};

export default AddSubAdminForm;
