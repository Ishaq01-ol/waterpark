import { Box, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { AuthComponents, Containers, Core, Misc } from "@/components";
import { OtpPinInputFieldView } from "@/components/auth/otp_pin_input_field";
import { InputsContext } from "@/pages/_app";
import { getPageFormConfiguration } from "@/utils/helpers/form";

const OtpScreenView = () => {
  const conf = getPageFormConfiguration("OTP");

  const contextData: any = useContext(InputsContext);
  const changeHandler = (value: string) => {
    contextData.setInputs({ ...contextData.inputs, otp: value });
  };
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
              <Text color="muted">OTP has been sent to your email.</Text>
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
              <Core.Form
                {...conf}
                OtpFields={
                  <Center>
                    <OtpPinInputFieldView changeHandler={changeHandler} />
                  </Center>
                }
              />
            </Stack>
          </Stack>
        </Box>
      }
      SideContent={
        <AuthComponents.SideContentView
          heading="Lorem Ipsum is simply dummy text"
          subHeading={`Lorem Ipsum is simply dummy text of the printing and typesetting industry..`}
          brands
        />
      }
    />
  );
};

export default OtpScreenView;
