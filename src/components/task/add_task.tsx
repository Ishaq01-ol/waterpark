import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import * as React from "react";

import { Core } from "..";
import { Icons } from "../icons";

interface IAddTaskProps {}

const AddTask: React.FunctionComponent<IAddTaskProps> = () => {
  // const handle = (e:any)=>{
  //     console.log("event.currentTarget.files",e.currentTarget.files)
  // }
  return (
    <Box
      style={{
        padding: "10px",
      }}
    >
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>User Name</FormLabel>
          <Input placeholder="User Name" type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Deadline</FormLabel>
          <Input type="date" />
        </FormControl>
      </Flex>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired>
          <FormLabel>Task Detail</FormLabel>
          <Textarea placeholder="Type Task Details" />
        </FormControl>
      </Flex>
      <Flex
        columnGap={"10px"}
        pb="20px"
        display={"inline-flex"}
        pos="relative"
        padding="20px"
        color="white"
        style={{
          borderRadius: "10px",
          boxShadow: "0px 2px 5px 2px rgba(0,0,0,0.3)",
        }}
        backgroundColor="blu.200"
      >
        <Icons.BsFillCloudUploadFill
          size={"40px"}
          style={{ paddingRight: "5px" }}
        />
        {/* <form action="" style={{ marginTop: "5px" }}> */}
        <input
          type="file"
          id="myFile"
          name="filename"
          style={{ marginTop: "5px" }}
        />
        {/* </form> */}
      </Flex>

      <Flex columnGap={"10px"} justifyContent="end">
        <Core.Button btnOrangeMd button="Add Task" />
      </Flex>
    </Box>
  );
};

export default AddTask;
