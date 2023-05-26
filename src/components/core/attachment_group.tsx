import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

// Here we have used react-icons package for the icons
import { Core } from "..";
import { Icons } from "../icons";

interface AttachmentGroupProps {
  attachments: any[];
}

const AttachmentGroup: React.FunctionComponent<AttachmentGroupProps> = ({
  attachments,
}) => {
  // console.log("attachments", attachments);
  return (
    <Flex columnGap={"8px"}>
      {attachments.map((attachment, index) => {
        return <Core.AttachmentCard key={index * 15} attachment={attachment} />;
      })}

      <Box p={4}>
        <Flex
          w="6rem"
          h="6rem"
          justifyContent={"center"}
          alignItems={"center"}
          p={3}
          rounded="md"
          backgroundColor={"graye.100"}
          cursor={"pointer"}
          _hover={{
            boxShadow: useColorModeValue(
              "0 4px 6px rgba(160, 174, 192, 0.6)",
              "0 4px 6px rgba(9, 17, 28, 0.4)"
            ),
          }}
        >
          <Icons.IoMdAdd fontSize={"50px"} color="gray" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default AttachmentGroup;
