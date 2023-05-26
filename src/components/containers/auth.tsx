import { Box, Container, Flex, HStack, Stack } from "@chakra-ui/react";
import * as React from "react";

interface AuthContainerProps {
  Header?: React.ReactNode;
  Content?: React.ReactNode;
  Footer?: React.ReactNode;
  SideContent?: React.ReactNode;
}
//  maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}
const AuthContainer = ({
  Header,
  Content,
  Footer,
  SideContent,
}: AuthContainerProps) => {
  return (
    <Flex flexDirection="column">
      <HStack width="100wh" height="100vh">
        <Box
          display={{ base: "none", md: "block" }}
          height="100vh"
          flex={1}
          bg="#1f3c71"
        >
          {SideContent}
        </Box>
        <Box
          height="auto"
          flex={1}
          justifyContent="center"
          alignItems={"center"}
          // py={{ base: '12' }}
        >
          <Container maxW="lg" py={{ base: "12" }} px={{ base: "0", sm: "8" }}>
            <Stack spacing="8">
              {Header}
              {Content}
              {Footer}
            </Stack>
          </Container>
        </Box>
      </HStack>
    </Flex>
  );
};

export default React.memo(AuthContainer);
