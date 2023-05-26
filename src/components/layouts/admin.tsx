import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Router from "next/router";
import { memo, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useQuery } from "react-query";

import { UserContext } from "@/pages/_app";
import { UserById } from "@/services/api";
import { verifyJWT } from "@/utils/helpers/jwt";

import { Core } from "..";

interface AdminLayoutProps {
  meta?: React.ReactNode;
  children?: React.ReactNode;
}

const SidebarContent = ({ ...props }: BoxProps) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("white", "gray.800")}
    borderColor={useColorModeValue("inherit", "gray.700")}
    borderRightWidth="1px"
    w="320px"
    {...props}
  >
    <Core.SideBar />
  </Box>
);

const AdminLayoutView = ({ children }: AdminLayoutProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <SidebarContent display={{ base: "none", lg: "unset" }} />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <Core.SideBar />
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, lg: 80 }} transition=".3s ease">
          <div className="h-screen w-full overflow-auto">
            <Core.Header onOpen={onOpen} />
            {children}
          </div>
        </Box>
      </Box>
    </>
  );
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [cookies] = useCookies(["auth"]);
  const [isVerified, setIsVerified] = useState(false);
  const [userId, setUserId] = useState("");
  const userContext = useContext(UserContext);
  useQuery(["UserById"], () => UserById({ userByIdId: userId }), {
    onSuccess: (data: any) => {
      userContext?.setUser(data?.userById as IUser);
    },
    onError(err) {
      console.log(err);
    },
    // Enable the query when userId is truthy
    enabled: Boolean(userId),
  });

  useEffect(() => {
    const redirectToLogin = () => Router.replace(`/auth/login`);
    if (!cookies?.auth) {
      redirectToLogin();
    } else {
      const verified = verifyJWT(cookies?.auth);
      if (verified) {
        setUserId(verified.id);
        setIsVerified(true);
      } else {
        redirectToLogin();
      }
    }
    // }, [cookies?.auth, user1]);
  }, [cookies?.auth]);

  return !cookies?.auth || !isVerified ? null : (
    <AdminLayoutView>{children}</AdminLayoutView>
  );
};
export default memo(AdminLayout);
