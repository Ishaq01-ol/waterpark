import { Flex } from "@chakra-ui/react";
import * as React from "react";

import Person from "./person";

interface IPersonsGroupProps {
  persons: string[];
}

const PersonsGroup: React.FunctionComponent<IPersonsGroupProps> = ({
  persons,
}) => {
  return (
    <Flex
      alignItems={"center"}
      columnGap={"20px"}
      rowGap={"5px"}
      flexWrap={"wrap"}
    >
      {persons.map((person: any, index: any) => {
        return <Person key={index + 14} person={person} />;
      })}
      {/* <Core.IconicButton button={"add"}  /> */}
    </Flex>
  );
};

export default PersonsGroup;
