/* eslint-disable prettier/prettier */

import { Box, Flex, Spacer, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import * as React from "react";

import logo from "../../assets/logo/logo.png";

// interface LoadingComponentProps {}

const LoadingComponent = () =>
// props: LoadingComponentProps
{
  return (
    <Box
      w="100%"
      minH={"100vh"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      h="100%"
    >
      <Flex flexDirection={"column"} alignItems="center">
        <Spinner
          size="xl"
          thickness="6px"
          // speed='0.65s'
          speed="0.80s"
          style={{ width: "40px", height: "40px" }}
          color="orang.100"
          emptyColor="blu.100"
          mt={"-20px"}
        />
        <Spacer />
        {/* <img
          src={logo.src}
          alt="logo"
          style={{
            width: "140px",
          }}
        /> */}
        <Box width="140px">
          <Image src={logo} alt="logo" />
        </Box>
      </Flex>
    </Box>
  );
};

export default React.memo(LoadingComponent);
