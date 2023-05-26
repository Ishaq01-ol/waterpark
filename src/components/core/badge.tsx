/* eslint-disable prettier/prettier */
import { Badge as Badg } from "@chakra-ui/react";
import * as React from "react";

interface IBadgeProps {
  status: string;
}

const Badge: React.FunctionComponent<IBadgeProps> = (status) => {
  const colorScheme = (statuss: IBadgeProps) => {
    if (statuss.status === "completed" || statuss.status === "acknowledge") {
      return "green";
    }
    if (statuss.status === "pending") {
      return "red";
    }
    if (statuss.status === "inprocess") {
      return "orange";
    }
    if (statuss.status === "new") {
      return "blue";
    }

    return "";
  };
  return (
    <Badg
      pt={"3.3px"}
      px={3}
      borderRadius="15px"
      variant="subtle"
      textTransform={"capitalize"}
      fontFamily={"Raleway"}
      colorScheme={colorScheme(status)}
    >
      {status.status}
    </Badg>
  );
};

export default Badge;
