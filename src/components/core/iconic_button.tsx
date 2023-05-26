/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import { Button as ChakraButton } from "@chakra-ui/react";
import * as React from "react";

import { Icons } from "../icons";

interface IIconicButtonProps {
  button: any;
  name?: string;
  value?: any;
  className?: string;
  size?: string;
  onClick?: any;
  isDisabled?: boolean;
}

const IconicButton: React.FunctionComponent<IIconicButtonProps> = ({
  button,
  className,
  size,
  onClick,
  isDisabled,
  name,
  value
}) => {
  return (
    <ChakraButton
      isDisabled={!!isDisabled}
      className={`"action-buttons" ${className && className}`}
      size={size || "md"}
      colorScheme={
        button.toLowerCase() === "edit" || button.toLowerCase() === "add"
          ? "blue"
          : button.toLowerCase() === "delete" ||
            button.toLowerCase() === "subtract"
          ? "red"
          : ""
      }
      variant={"solid"}
      fontFamily={"Raleway"}
      onClick={onClick}
      name={name}
      value={value}
    >
      {button.toLowerCase() === "edit" ? (
        <Icons.FiEdit2 />
      ) : button.toLowerCase() === "delete" ? (
        <Icons.AiOutlineDelete />
      ) : button.toLowerCase() === "add" ? (
        <Icons.IoMdAdd fontSize={"25px"} />
      ) : button.toLowerCase() === "subtract" ? (
        <Icons.IoMdRemove fontSize={"25px"} />
      ) : button.toLowerCase() === "view" ? (
        <Icons.ImNewTab fontSize={"20px"} color="green" />
      ) : (
        ""
      )}
    </ChakraButton>
  );
};

export default IconicButton;
