/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import {
  Box,
  Flex,
  Spacer,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  useMediaQuery,
} from "@chakra-ui/react";

import { Icons } from "@/components/icons";

interface IStatsProps {
  title: string;
  number: number;
  percentage?: number;
  status?: boolean;
  type?: boolean;
}

const Stats: React.FunctionComponent<IStatsProps> = ({
  title,
  number,
  percentage,
  status,
  type,
}) => {
  const [isLargerScreen] = useMediaQuery("(min-width: 991px)");
  return (
    <Stat
      style={{
        display: "inline-block",
        backgroundColor: "#fff",
        borderRadius: "10px",
        // borderBottom:"3px solid #1f3c71",
        // borderBottomWidth:"3px",
        // borderBottomStyle:"solid",
        // borderBottomColor:"blu.100",
        padding: "10px",
        boxShadow: "0px 2px 5px 2px rgba(0,0,0,0.05)",
        minWidth: isLargerScreen ? "auto" : "49%",
        maxWidth: "350px",
      }}
    >
      <Flex>
        <Box>
          <StatLabel
            style={{
              color: "#aaa",
              fontWeight: "bold",
            }}
          >
            {title}
          </StatLabel>
          <StatNumber
            color={"orang.100"}
            fontSize="26px"
            fontFamily={"Verdana"}
          >
            {type ? "$" : ""}
            {number}
          </StatNumber>
          <StatHelpText fontFamily={"Verdana"}>
            {percentage && (
              <StatArrow type={status ? "increase" : "decrease"} />
            )}
            {percentage} {percentage ? "%" : ""}
          </StatHelpText>
        </Box>
        <Spacer />
        <Box
          w="35px"
          h="35px"
          borderRadius="50%"
          backgroundColor={"blu.100"}
          color="#fff"
          fontSize="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {title === "Earning" ||
          title === "Pending Payments" ||
          title === "Monthly Revenue" ||
          title === "Daily Amount" ||
          title === "Monthly Amount" ||
          title === "Yearly Amount" ? (
            <Icons.MdOutlineAttachMoney />
          ) : title === "Admin Users" || title === "Sub-Admin Users" ? (
            <Icons.HiUser />
          ) : title === "Users" ||
            title === "Sub-Admins" ||
            title === "Active Users" ||
            title === "In Active Users" ? (
            <Icons.HiUsers />
          ) : title === "Clients" ? (
            <Icons.RiCustomerService2Fill />
          ) : title === "Roles" || title === "No. of Roles" ? (
            <Icons.FaTasks />
          ) : title === "Total Packages" ? (
            <Icons.MdNumbers />
          ) : title === "Admin Packages" ? (
            <Icons.MdNumbers />
          ) : title === "Custom Packages" ? (
            <Icons.MdNumbers />
          ) : (
            ""
          )}
        </Box>
      </Flex>
    </Stat>
  );
};

export default Stats;
