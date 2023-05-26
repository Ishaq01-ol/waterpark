import { Button as ChakraButton } from "@chakra-ui/react";
import * as React from "react";

import { Core } from "..";

interface IButtonProps {
  button: any;
  btnOrange?: any;
  btnGray?: any;
  btnBlue?: any;
  btnGrayMd?: any;
  btnOrangeMd?: any;
  btnBlueMd?: any;
  btnOutline?: any;
  xs?: any;
  onClick?: any;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  button,
  btnGrayMd,
  btnOrange,
  btnOrangeMd,
  btnGray,
  btnBlue,
  btnBlueMd,
  btnOutline,
  xs,
  isDisabled,
  isLoading,
  onClick,
  type,
  className,
}) => {
  return (
    <>
      {btnOutline && (
        <ChakraButton
          className={className && className}
          colorScheme="teal"
          variant="outline"
          size={xs && "xs"}
          onClick={onClick}
          type={type}
        >
          {button}
        </ChakraButton>
      )}
      {btnGray && (
        <ChakraButton
          className={className && className}
          // className="action-buttons"
          size={"sm"}
          backgroundColor={"graye.200"}
          variant={"solid"}
          fontFamily={"Raleway"}
          letterSpacing=".7px"
          onClick={onClick}
        >
          {button}
        </ChakraButton>
      )}
      {btnGrayMd && (
        <ChakraButton
          className={className && className}
          // variant="primary"
          // colorScheme="orange"
          backgroundColor={"graye.200"}
          // textColor="white"
          size="md"
          letterSpacing=".7px"
          width={"200px"}
          mt="15px"
          onClick={onClick}
        >
          {button}
        </ChakraButton>
      )}
      {btnOrange && (
        <ChakraButton
          className={className && className}
          backgroundColor={"orang.100"}
          size="sm"
          letterSpacing=".7px"
          width={"200px"}
          onClick={onClick}
        >
          {button}
        </ChakraButton>
      )}
      {btnOrangeMd && (
        <ChakraButton
          className={className && className}
          // variant="primary"
          // colorScheme="orange"
          backgroundColor={"orang.100"}
          textColor="white"
          _hover={{ bg: "orang.300" }}
          size="md"
          letterSpacing=".7px"
          width={"200px"}
          mt="15px"
          isDisabled={!!isDisabled}
          onClick={onClick}
        >
          {isLoading ? <Core.BtnSpinner /> : button}
        </ChakraButton>
      )}
      {btnBlue && (
        <ChakraButton
          className={className && `${className}action-buttons`}
          size={"sm"}
          letterSpacing=".7px"
          colorScheme={"blue"}
          variant={"solid"}
          fontFamily={"Raleway"}
          onClick={onClick}
        >
          {button}
        </ChakraButton>
      )}
      {btnBlueMd && (
        <ChakraButton
          className={className && `${className}action-buttons`}
          size={"md"}
          letterSpacing=".7px"
          colorScheme={"blue"}
          variant={"solid"}
          fontFamily={"Raleway"}
          onClick={onClick}
        >
          {button}
        </ChakraButton>
      )}
    </>
  );
};

export default Button;
