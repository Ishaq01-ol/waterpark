/* eslint-disable prettier/prettier */
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { useContext } from "react";
import { useCookies } from "react-cookie";

import { UserContext } from "@/pages/_app";
import { theme } from "@/utils/configurations";

import { Icons } from "../icons";

interface HeaderProps {
  onOpen: () => void;
}

const Header = ({ onOpen }: HeaderProps) => {
  // const [isScreenMin768] = useMediaQuery("(min-width: 768px)");
  const userContext = useContext(UserContext);
  const [isScreenMin991] = useMediaQuery("(min-width: 991px)");
  const removeCookie = useCookies(["auth"])[2];
  const LinkHandler = () => {
    removeCookie('auth', { path: '/' })
    userContext?.setUser({})
  }

  return (
    <Flex
      p={1}
      pr={3}
      pl={3}
      alignItems={"center"}
      justify={"space-between"}
      height={"64px"}
      backgroundColor={theme.colors.white}
      shadow={"md"}
      pos={"relative"}
      zIndex={2}
      style={{
        boxShadow: "0px 2px 5px 2px rgba(0,0,0,0.05)",
      }}
    >
      <Flex width={"auto"} alignItems={"center"}>
        <Icon
          display={isScreenMin991 ? "none" : "block"}
          ml={"4px"}
          mr={4}
          fontSize="24"
          cursor={"pointer"}
          color="rgba(0, 0, 0, .6)"
          _hover={{
            color: "rgba(0, 0, 0, 1)",
          }}
          as={Icons.FiMenu}
          onClick={onOpen}
        />
        <Heading as="h5" size="md" fontWeight={"normal"}>
          Welcome{" "}
          <Box
            as="span"
            color="orang.100"
            textTransform="capitalize"
            fontWeight={"bold"}
          >
            {userContext?.user?.first_name || `${userContext?.user?.last_name}` || ""}
          </Box>
          !
        </Heading>
      </Flex>
      <HStack>
        <Menu>
          <MenuButton>
            <Flex justifyContent={"flex-end"} alignItems={"center"}>
              <Stack>
                <Text
                  textAlign={"right"}
                  lineHeight={0.8}
                  fontWeight={"regular"}
                  color={"black"}
                  opacity={0.9}
                >
                  {userContext?.user?.first_name || `${userContext?.user?.last_name}` || ""}
                </Text>
                <Text
                  fontSize={"x-small"}
                  textAlign={"right"}
                  lineHeight={0.8}
                  fontWeight={"regular"}
                  color={"black"}
                  opacity={0.5}
                >
                  {userContext?.user?.admin && "Admin"} 
                </Text>
              </Stack>
              <Box
                alignSelf={"flex-end"}
                mr={5}
                ml={2}
                borderRadius={25}
                width={"40px"}
                height={"40px"}
                backgroundColor={"red"}
              >
                <Image
                  borderRadius={25}
                  width={"40px"}
                  height={"40px"}
                  alt={"avatarImage"}
                  src={"https://tinyurl.com/yhkm2ek8"}
                />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            {/* <MenuGroup title="Profile"> */}
            {/* <MenuItem>My Account</MenuItem> */}
            <Link href="/email/update/main/index.js" as="/email/update">
              <MenuItem>Update Email</MenuItem>
            </Link>
            <Link href="/password/change/main/index.js" as="/password/change">
              <MenuItem>Change Password</MenuItem>
            </Link>
            {/* </MenuGroup> */}
            <MenuDivider />

            <Link href="/auth/login/index.js" as="/auth/login" onClick={LinkHandler}>
              <MenuItem>Logout</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default React.memo(Header);
