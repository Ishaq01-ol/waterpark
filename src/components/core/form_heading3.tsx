/* eslint-disable react/no-children-prop */
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import * as React from "react";

import { Icons } from "../icons";

interface IFormHeading3Props {
  title: string;
  searchBox?: any;
}

const FormHeading3: React.FunctionComponent<IFormHeading3Props> = ({
  title,
  searchBox,
}) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={"1px solid"}
      borderColor={"graye.100"}
      mb="15px"
    >
      <Heading pb="15px" as="h4" size="md" color="#555">
        {title}
      </Heading>
      {searchBox && (
        <InputGroup
          // size="sm"
          maxW={"230px"}
          pb="15px"
        >
          <InputLeftElement
            pointerEvents="none"
            children={<Icons.ImSearch />}
          />
          <Input type="text" placeholder="Search" />
        </InputGroup>
      )}
    </Flex>
  );
};

export default FormHeading3;
