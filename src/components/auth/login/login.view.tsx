import {
  Box,
  Button,
  Center,
  Checkbox,
  Heading,
  HStack,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

import { AuthComponents, Containers, Core, Misc } from "@/components";
import { getPageFormConfiguration } from "@/utils/helpers/form";

const LoginScreenView = () => {
  const conf = getPageFormConfiguration("LOGIN");
  const [rememberMe, setRememberMe] = useState(false);

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
            <Heading size={{ base: "lg" }}>Log in to your account</Heading>
            {/* <HStack spacing="1" justify="center">
              <Text color="muted">Dont have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack> */}
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
                rememberMe={rememberMe}
                BottomView={
                  <HStack mt={5} mb={5} justify="space-between">
                    <Checkbox
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    >
                      Remember me
                    </Checkbox>
                    <Link href={`/auth/forget`}>
                      <Button variant="link" colorScheme="blue" size="sm">
                        Forgot password?
                      </Button>
                    </Link>
                  </HStack>
                }
              />
            </Stack>
          </Stack>
        </Box>
      }
      SideContent={
        <AuthComponents.SideContentView
          brands
          heading="Lorem Ipsum is simply dummy text"
          subHeading={`Lorem Ipsum is simply dummy text of the printing and typesetting industry..`}
        />
      }
    />
  );
};

export default LoginScreenView;
