/* eslint-disable no-param-reassign */

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Spinner,
} from "@chakra-ui/react";
// import { useRouter } from "__mocks__/next/router";
import React, { memo, useContext, useEffect, useState } from "react";

import { UserContext } from "@/pages/_app";
import { theme } from "@/utils/configurations";

import { Icons } from "../icons";
import type {
  LinkItemProps,
  NavItemProps,
  SidebarNavGroupProps,
} from "./drawer.types";

// interface DrawerNavigationProps {}

const NavItem = ({ icon, active, path, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        // mx="1"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: theme.colors.lightPurple,
          color: "blu.400",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr={2}
            color={active ? "whit" : "nav.100"}
            fontSize="14px"
            _groupHover={{
              color: "blu.400",
            }}
            // color="orang.100"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const SidebarNavGroup = (props: SidebarNavGroupProps & any) => {
  // const { toggleIcon, toggleText, children, title, icon } = props;
  const { children, title, icon } = props;

  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          _expanded={{ bg: "blu.300", color: "white" }}
          fontSize="14px"
          _hover={{
            bg: theme.colors.lightPurple,
            color: "blu.400",
          }}
          borderRadius="10px 10px 0 0"
          padding={"10px 16px 7px 16px"}
        >
          <HStack width={"100%"}>
            {icon && (
              <Icon
                // mr="7px"
                fontSize="14px"
                _groupHover={{
                  color: "blu.400",
                }}
                color="nav.100"
                // color="orang.100"
                as={icon}
              />
            )}
            <Box color={"nav.100"} as="span" flex="1" textAlign="left">
              {title}
            </Box>
          </HStack>
          <AccordionIcon color={"nav.100"} />
        </AccordionButton>
      </h2>
      <AccordionPanel
        px="15px"
        py="5px"
        backgroundColor={"blu.300"}
        borderRadius="0 0 10px 10px"
      >
        <ul className="nav-group-items list-unstyled">{children}</ul>
      </AccordionPanel>
    </AccordionItem>
  );
};
const DrawerNavigation = () => {
  const [linkItems, setLinkItems] = useState<LinkItemProps[]>([
    {
      id: "dashboard",
      name: "Dashboard",
      icon: Icons.RiDashboard2Line,
      type: "single",
      path: "/dashboard/",
      active: false,
    },
    {
      id: "manage-admin",
      name: "Admin Users",
      icon: Icons.MdManageAccounts,
      type: "group",
      active: false,
      links: [
        {
          id: "admin.manage-roles",
          name: "Manage Roles",
          icon: Icons.FiUser,
          type: "single",
          path: "/admin/manage-roles/",
          active: false,
        },
        {
          id: "manage-roles.add",
          name: "Add Role",
          icon: Icons.MdAddTask,
          type: "single",
          path: "/manage-roles/add/",
          active: false,
        },
        {
          id: "admin.manage-user",
          name: "Manage Users",
          icon: Icons.FaUsers,
          type: "single",
          path: "/admin/manage-users/",
          active: false,
        },
        {
          id: "manage-users.add",
          name: "Add User",
          icon: Icons.BsPersonFillAdd,
          type: "single",
          path: "/manage-users/add/",
          active: false,
        },
      ],
    },
    {
      id: "subadmins",
      name: "Sub-Admin Users",
      icon: Icons.MdManageAccounts,
      type: "group",
      active: false,
      links: [
        {
          id: "subadmins",
          name: "Sub-Admins",
          icon: Icons.MdAdminPanelSettings,
          type: "single",
          path: "/subadmins/",
          active: false,
        },
        {
          id: "subadmins.add",
          name: "Add Sub-Admin",
          icon: Icons.MdPersonAddAlt,
          type: "single",
          path: "/subadmins/add/",
          active: false,
        },
      ],
    },
    {
      id: "task",
      name: "Tasks",
      icon: Icons.VscTasklist,
      type: "group",
      active: false,
      links: [
        {
          id: "task",
          name: "Tasks",
          icon: Icons.VscTasklist,
          type: "single",
          path: "/tasks/",
          active: false,
        },
        {
          id: "tasks.add",
          name: "Add Tasks",
          icon: Icons.MdAddTask,
          type: "single",
          path: "/tasks/add/",
          active: false,
        },
      ],
    },
    {
      id: "report-templates",
      name: "Report Templates",
      icon: Icons.TbFileSettings,
      type: "single",
      path: "/report-templates",
      active: false,
    },
    {
      id: "payments",
      name: "Manage Payments",
      icon: Icons.AiOutlineDollarCircle,
      type: "group",
      active: false,
      links: [
        {
          id: "payments",
          name: "Payments",
          icon: Icons.AiOutlineDollarCircle,
          type: "single",
          path: "/payments/",
          active: false,
        },
        {
          id: "payments.subscription",
          name: "Subscription Packages",
          icon: Icons.GoPackage,
          type: "single",
          path: "/payments/subscription/",
          active: false,
        },
        {
          id: "subscription.add",
          name: "Add Subscription Packages",
          icon: Icons.GoPackage,
          type: "single",
          path: "/subscription/add/",
          active: false,
        },
        {
          id: "payment-records.track",
          name: "Track Records",
          icon: Icons.FiFileText,
          type: "single",
          path: "/payment-records/track/",
          active: false,
        },
      ],
    },
    {
      id: "email-&-notifications",
      name: "Email & Notification",
      icon: Icons.IoMdNotificationsOutline,
      type: "group",
      active: false,
      links: [
        {
          id: "email-&-notifications",
          name: "Email & Notification",
          icon: Icons.IoMdNotificationsOutline,
          type: "single",
          path: "/email-&-notifications/",
          active: false,
        },
        {
          id: "email-&-notifications.add",
          name: "Add New",
          icon: Icons.BiCommentAdd,
          type: "single",
          path: "/email-&-notifications/add/",
          active: false,
        },
      ],
    },
    {
      id: "edit-content",
      name: "Edit Content",
      icon: Icons.FiEdit,
      type: "group",
      active: false,
      links: [
        {
          id: "privacy-policy.edit",
          name: "Privacy Policy",
          icon: Icons.FiEdit2,
          type: "single",
          path: "/privacy-policy/edit",
          active: false,
        },
        {
          id: "eula.edit",
          name: "EULA",
          icon: Icons.FiEdit2,
          type: "single",
          path: "/eula/edit/",
          active: false,
        },
        {
          id: "about-us",
          name: "About Us",
          icon: Icons.FiEdit2,
          type: "single",
          path: "/about-us/edit/",
          active: false,
        },
        {
          id: "faq.edit",
          name: "FAQ's",
          icon: Icons.FiEdit2,
          type: "single",
          path: "/faq/edit/",
          active: false,
        },
      ],
    },
    {
      id: "website-contact-form",
      name: "Website Contact Form",
      icon: Icons.FiEdit,
      type: "single",
      path: "/website-contact-form/",
      active: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  const filterSideBarItems = (item: LinkItemProps) => {
    if (user) {
      if (user.admin) {
        return item;
      }

      if (user.modules) {
        const matchingModule = user.modules.find(
          (module) => module.name === item.id
        );
        if (matchingModule && item.links) {
          const matchingViews = matchingModule.views.filter((view) =>
            item.links?.some((link) => link.id === view)
          );
          const filteredLinks = item.links.filter((link) =>
            matchingViews.includes(link.id)
          );
          item.links = filteredLinks;
          return { ...item };
        }
      }

      if (user.operations) {
        const matchingOperation = user.operations.find(
          (operation) => operation.name === item.id
        );
        if (matchingOperation && item.links) {
          const matchingViews = matchingOperation.views.filter((view) =>
            item.links?.some((link) => link.id === view)
          );
          const filteredLinks = item.links.filter((link) =>
            matchingViews.includes(link.id)
          );
          item.links = filteredLinks;
          return { ...item };
        }
      }

      return false;
    }

    return false;
  };

  const filterLinks = () => {
    if (user) {
      const links = linkItems.filter(filterSideBarItems);
      setLinkItems(links);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user && Object.keys(user).length) {
      filterLinks();
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <>
          <Flex flexDirection={"column"} alignItems="center" w={"100%"}>
            <Spinner
              size="md"
              thickness="6px"
              speed="0.80s"
              style={{ width: "40px", height: "40px" }}
              color="orang.100"
              emptyColor="#fff"
            />
          </Flex>
        </>
      ) : (
        <Accordion
          borderColor={theme.colors.purple}
          // defaultIndex={[20]}
          // allowMultiple
          allowToggle
        >
          {linkItems.map((link) => {
            return link.type === "single" ? (
              <NavItem
                key={link.name}
                color={link.active ? "whit" : "nav.100"}
                fontSize="14px"
                fontWeight={"normal"}
                // height={"40px"}
                padding={"10px 16px 7px 16px"}
                path={link.type === "single" ? link.path : undefined}
                icon={link.icon}
                active={link.active && link.active}
              >
                {link.name}
              </NavItem>
            ) : (
              <SidebarNavGroup
                icon={link.icon}
                title={link.name}
                key={link.name}
              >
                {link?.links?.map((lin) => (
                  <NavItem
                    key={lin.name}
                    padding="8px 16px"
                    fontWeight={"normal"}
                    fontSize="13px"
                    color={"nav.100"}
                    path={lin.path}
                    icon={lin.icon}
                  >
                    {lin.name}
                  </NavItem>
                ))}
              </SidebarNavGroup>
            );
          })}
        </Accordion>
      )}
    </>
  );
};

export default memo(DrawerNavigation);
