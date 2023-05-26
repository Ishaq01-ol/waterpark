import { Heading } from "@chakra-ui/react";
import * as React from "react";

interface IH3Props {
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  p?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  children?: string;
  className?: string;
}

const H3: React.FunctionComponent<IH3Props> = ({
  m,
  mt,
  mr,
  mb,
  ml,
  p,
  pt,
  pr,
  pb,
  pl,
  children,
  className,
}) => {
  return (
    <Heading
      as="h5"
      size="md"
      color="#555"
      className={className && className}
      m={m && m}
      mt={mt && mt}
      mr={mr && mr}
      mb={mb && mb}
      ml={ml && ml}
      p={p && p}
      pt={pt && pt}
      pr={pr && pr}
      pb={pb && pb}
      pl={pl && pl}
    >
      {children && children}
    </Heading>
  );
};

export default H3;
