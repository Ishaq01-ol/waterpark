import { Box, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react";

import { AuthComponents, Containers, Core, Misc } from "@/components";
import { getPageFormConfiguration } from "@/utils/helpers/form";

interface NewPasswordViewProps {}

const NewPasswordView = (_props: NewPasswordViewProps) => {
  const conf = getPageFormConfiguration("NEW_PASSWORD");

  return (
    <Containers.AuthContainer
      Header={
        <Stack spacing="6">
          <Center
            alignSelf={"center"}
            display={{ base: "block", sm: "block", md: "none" }}
          >
            <Misc.Logo />
          </Center>
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "lg" }}>{conf?.title}</Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Enter your email to get OTP.</Text>
            </HStack>
          </Stack>
        </Stack>
      }
      Content={
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg-surface" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <Core.Form {...conf} />
            </Stack>
          </Stack>
        </Box>
      }
      SideContent={
        <AuthComponents.SideContentView
          heading="Lorem Ipsum is simply dummy text"
          subHeading={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
          brands
        />
      }
    />
  );
};

export default NewPasswordView;
