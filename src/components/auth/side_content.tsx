import {
  Avatar,
  AvatarGroup,
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Misc } from "@/components";

interface SideContentViewProps {
  heading?: string;
  subHeading?: string;
  brands?: boolean;
  watermark?: boolean;
}

const SideContentView = ({
  heading = "Unavailable",
  subHeading = "Unavailable",
  brands,
}: SideContentViewProps) => {
  return (
    <Stack
      height={"100%"}
      spacing="8"
      py={{ base: "10", md: "10" }}
      px={{ base: "8", sm: "8" }}
    >
      <Stack justifyContent={"flex-start"} alignItems={"flex-start"} flex={1}>
        <Misc.Logo />
      </Stack>
      <Stack flex={1}>
        <Heading
          maxWidth={"sm"}
          noOfLines={3}
          color={"white"}
          size={{ base: "3xl", sm: "2xl", md: "3xl" }}
        >
          {heading}
        </Heading>
        <Text color={"white"} maxWidth={"sm"}>
          {subHeading}
        </Text>
        <Spacer />
        {brands && (
          <HStack>
            <AvatarGroup size="md" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            <Text color={"white"} maxWidth={"sm"}>
              Join 100+ Top Brands
            </Text>
          </HStack>
        )}
        <Spacer />
        <Text color={"white"} maxWidth={"sm"}>
          © 2023 Waterpark UI. All rights reserved.
        </Text>
      </Stack>
    </Stack>
  );
};
export default SideContentView;
