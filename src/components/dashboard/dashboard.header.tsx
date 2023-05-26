import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

import { Core } from "..";
import Breadcrumbs from "../core/breadcrumbs";

interface IDashboardHeaderProps {
  heading: string;
  dropdwonOptions?: any;
  dropdwonType?: string;
  defaultName?: string;
  selectOption?: (selectedOption: any) => void;
  breadcrumb?: {
    label: string;
    link?: string;
  }[];
  button?:
    | {
        name: string;
        link: string;
      }
    | undefined;
}

const DashboardHeader: React.FunctionComponent<IDashboardHeaderProps> = ({
  heading,
  dropdwonOptions,
  dropdwonType,
  defaultName,
  selectOption,
  breadcrumb,
  button,
}) => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        pt="0px"
        pb="15px"
      >
        <Box>
          <Breadcrumbs breadcrumb={breadcrumb} />
          <Core.H2>{heading}</Core.H2>
        </Box>
        <Box>
          {dropdwonOptions && (
            <Core.ActionsDropdown
              dropdwonOptions={dropdwonOptions}
              dropdwonType={dropdwonType}
              defaultName={defaultName}
              selectOption={selectOption}
              md
            />
          )}
          &nbsp;&nbsp;
          {button && (
            <Link href={`${button.link}/index.tsx`} as={button.link}>
              <Core.Button button={button.name} btnBlueMd />
            </Link>
          )}
          {/* {button && button == "Add Sub-Admin" && (
            <Link href="/subadmins/add">
              <Core.Button button={button} btnBlueMd />
            </Link>
          )}
          {button && button == "Add Role" && (
            <Link href="/manage-roles/add/index.js" as="/manage-roles/add">
              <Core.Button button={button} btnBlueMd />
            </Link>
          )}
          {button && button == "Add Task" && (
            <Link href="/tasks/add">
              <Core.Button button={button} btnBlueMd />
            </Link>
          )}
          {button && button == "Add User" && (
            <Link href="/manage-users/add/index.js" as="/manage-users/add">
              <Core.Button button={button} btnBlueMd />
            </Link>
          )}
          {button && button == "Add New Package" && (
            // <Link href="/payments/subscription/add">
            <Link href="/subscription/add">
              <Core.Button button={button} btnBlueMd />
            </Link>
          )}
          {button && button == "Add Email or Notifications" && (
            <Link href="/email-&-notifications/add">
              <Core.Button button={button} btnBlueMd />
            </Link>
          )} */}
        </Box>
      </Flex>
    </>
  );
};

export default DashboardHeader;
