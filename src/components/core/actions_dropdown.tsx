import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import * as React from "react";

import { Icons } from "../icons";

interface IActionsDropdownProps {
  status?: boolean;
  dropdwonOptions?: string[];
  dropdwonType?: string;
  defaultName?: string;
  selectOption?: (selectedOption: any) => void;
  md?: boolean;
}

const ActionsDropdown: React.FunctionComponent<IActionsDropdownProps> = ({
  status,
  dropdwonOptions,
  dropdwonType,
  defaultName,
  selectOption,
  md,
}) => {
  return (
    <Menu>
      <MenuButton
        size={md ? "md" : "sm"}
        variant="outline"
        as={Button}
        rightIcon={
          dropdwonType === "filter" ? (
            <Icons.TbFilter />
          ) : (
            <Icons.ChevronDownIcon />
          )
        }
        fontSize="14px"
        fontFamily={"Raleway"}
      >
        {status ? "Status" : defaultName}
        {dropdwonType === "filter" ? "Filter By" : defaultName}
      </MenuButton>
      <MenuList fontSize={"14px"} fontFamily={"Raleway"}>
        {dropdwonOptions?.map((dropdwonOption: any, index: any) => {
          return (
            <MenuItem
              key={index * 6}
              onClick={() => selectOption?.(dropdwonOption)}
            >
              {dropdwonOption}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ActionsDropdown;
