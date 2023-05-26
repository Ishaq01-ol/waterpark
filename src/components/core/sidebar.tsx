import {
  Box,
  Card,
  CardHeader,
  Flex,
  Progress,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import { Drawer } from "..";

type SideBarProps = {};

const SideBarComponent = React.memo(
  forwardRef<HTMLInputElement, SideBarProps>(() => {
    const [isScreenMax1140] = useMediaQuery("(max-width: 1140px)");
    // const [isScreenMin1141] = useMediaQuery("(min-width: 1141px)");
    // const [isLargeScreen] = useMediaQuery("(min-width: 991px)");
    // const [isMaxScreen991] = useMediaQuery("(max-width: 991px)");

    return (
      <Box h={"100vh"} zIndex={9} className={` duration-300 ease-out `}>
        <Flex
          flexDirection={"column"}
          justify={"space-between"}
          minH={"100vh"}
          h="100%"
          maxW={isScreenMax1140 ? "320px" : "350px"}
          backgroundColor={"blu.100"}
          className={`sidebar-main`}
          zIndex="2"
          pos={"relative"}
          borderRightWidth={"4px"}
          borderRightColor={"transparent"}
        >
          <Drawer.Header />
          <Box
            pr={5}
            pl={5}
            flex={1.8}
            mt={"-30px"}
            maxHeight={"51vh"}
            overflow={"auto"}
            className="scrollbar"
          >
            <Drawer.Navigation />
          </Box>
          <Flex
            mb={2}
            pr={2}
            pl={2}
            flexDirection={"column"}
            justify={"flex-end"}
            flex={1}
            mt={5}
          >
            <Card height={160} backgroundColor={"blu.200"}>
              <CardHeader p={4}>
                <Text fontWeight={"regular"} color={"white"}>
                  Almost there
                </Text>
                <Text mt={2} color={"white"} fontSize={"sm"} opacity={0.7}>
                  Here some more information about your storage usage.
                </Text>
                <Text mt={2} color={"white"} fontSize={"sm"} opacity={0.7}>
                  1000 MB / ∞
                </Text>
                <Progress mt={3} value={80} borderRadius={5} />
              </CardHeader>
            </Card>
          </Flex>
          {/* <HStack mb={4} pr={5} pl={5}  mt={4}>
            <Box  mr={1} borderRadius={25} width={50} height={50} backgroundColor={'red'}>
              <Image borderRadius={25} width={50} height={50} alt={'avatarImage'} src={'https://tinyurl.com/yhkm2ek8'} />
            </Box>
            <Stack>
                <Text lineHeight={.8} fontWeight={'regular'} color={'white'} opacity={.9}>Christoph Winston</Text>
                <Text lineHeight={.8} fontWeight={'regular'} color={'white'} opacity={.7}>chris@octalyte.com</Text>
            </Stack>
          </HStack> */}
        </Flex>
      </Box>
    );
  })
);

SideBarComponent.displayName = "SideBar";

export const SideBar = SideBarComponent;
