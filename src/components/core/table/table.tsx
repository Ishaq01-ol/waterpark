import {
  Box,
  Flex,
  Heading,
  Input,
  Table as CharkraTable,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo } from "react";

import { Core } from "../..";
import { Icons } from "../../icons";
import ActivityStatus from "./activity_status";
import HeadingWithSort from "./heading_with_sort";

interface ITableProps {
  data: any[];
  columns: string[];
  tableFoot?: string[];
  shadow?: boolean;
  captionText?: string;
  title?: string | undefined;
  dropdwonOptions?: any;
  dropdwonType?: string;
  defaultName?: string;
  selectOption?: (selectedOption: any) => void;
  selectStatus?: (selectedOption: any) => void;
  filterBy?: string[];
  selectedInterval?: any;
  manageRoles?: boolean;
  clickable?: boolean;
  sortOrderId?: boolean;
  sortDueDate?: boolean;
  sortRegisteredNo?: boolean;
  sortCreatedOn?: boolean;
  sortPaymentDate?: boolean;
  sortUserId?: boolean;
  sortCustomerName?: boolean;
  sortDate?: boolean;
  sortAmount?: boolean;
  sortName?: boolean;
  mt?: string;
  isLoading?: boolean;
}

const Table: React.FunctionComponent<ITableProps> = ({
  data,
  columns,
  shadow,
  captionText,
  tableFoot,
  title,
  dropdwonOptions,
  selectOption,
  filterBy,
  selectedInterval,
  manageRoles,
  sortOrderId,
  sortDueDate,
  sortRegisteredNo,
  sortCreatedOn,
  sortPaymentDate,
  sortUserId,
  sortCustomerName,
  sortDate,
  sortAmount,
  sortName,
  mt,
  isLoading,
}) => {
  const router = useRouter();

  const dropdwonOptionsForIntervals = [
    "Today",
    "Last Week",
    "This Month",
    "This Year",
  ];
  console.log("islOAING", isLoading);
  const [isMobileScreen] = useMediaQuery("(max-width: 640px)");
  const tableHeading = (col: string) => {
    switch (col) {
      case "amount":
        return <HeadingWithSort title="Amount" sortAmount={sortAmount} />;
      case "name":
        return <HeadingWithSort title="Name" sortName={sortName} />;
      case "userId":
        return <HeadingWithSort title="User Id" sortUserId={sortUserId} />;
      case "date":
        return <HeadingWithSort title="Date" sortDate={sortDate} />;
      case "orderId":
        return <HeadingWithSort title="Order Id" sortOrderId={sortOrderId} />;
      case "dueDateAndTime":
        return (
          <HeadingWithSort title="Due Date & Time" sortDueDate={sortDueDate} />
        );
      case "createdOn":
        return (
          <HeadingWithSort title="Created On" sortCreatedOn={sortCreatedOn} />
        );
      case "paymentDate":
        return (
          <HeadingWithSort
            title="Payment Date"
            sortPaymentDate={sortPaymentDate}
          />
        );
      case "registeredNo":
        return (
          <HeadingWithSort
            title="Registered No"
            sortRegisteredNo={sortRegisteredNo}
          />
        );
      case "customerName":
        return (
          <HeadingWithSort
            title="Customer Name"
            sortCustomerName={sortCustomerName}
          />
        );
      case "currentStatus":
        return "Current Status";
      case "nextPayment":
        return "Next Payment";
      case "activeUsers":
        return "Active Users";
      case "organizationName":
        return "Organization Name";
      case "subAdminName":
        return "Sub-Admin Name";
      case "subscriptionAmount":
        return "Subscription Amount";
      case "phoneNo":
        return "Phone No.";
      case "packageType":
        return "Package Type";
      case "timePeriod":
        return "Time Period";
      default:
        return col;
    }
  };
  const tableData = (td: any, col: any) => {
    if (
      td === "completed" ||
      td === "pending" ||
      td === "inprocess" ||
      td === "active"
    )
      return <Core.Badge status={td} />;
    if (col === "active" || col === "Inactive")
      if (td) return <Core.Badge status={"Active"} />;
      else return <Core.Badge status={"Inactive"} />;

    switch (col) {
      case "payment":
        if (td === true) {
          return (
            <Flex color="gree.100" alignItems={"center"} columnGap={"3px"}>
              <Icons.BsCheck2 />
              <Text color="blac.100">Paid</Text>
            </Flex>
          );
        }
        return (
          <Flex color="danger.100" alignItems={"center"} columnGap={"3px"}>
            <Icons.IoMdClose />
            <Text color="blac.100">Unpaid</Text>
          </Flex>
        );

      case "status":
        if (td === true) {
          return <ActivityStatus>Active</ActivityStatus>;
        }
        return <ActivityStatus>In Active</ActivityStatus>;

      case "account":
        if (td === true) {
          return <ActivityStatus>Active</ActivityStatus>;
        }
        return <ActivityStatus>In Active</ActivityStatus>;

      case "viewed":
        if (td === true) {
          return <Icons.BsEyeFill fontSize={"20px"} color="orange" />;
        }
        return <Icons.BsEyeSlashFill fontSize={"20px"} color="red" />;

      case "duration":
        return `${td} days`;

      case "cost":
        return `$${td}`;

      default:
        return td;
    }
  };
  const allFilters = (filter: string[] | undefined) => {
    return (
      <>
        {filter?.map((element: string) => {
          if (
            element === "Name" ||
            element === "Package" ||
            element === "Role" ||
            element === "Organization Name"
          ) {
            return (
              <Input
                key={element}
                variant="outline"
                size="sm"
                maxW={isMobileScreen ? "100%" : "160px"}
                placeholder={element}
              />
            );
          }
          if (element === "Dates") {
            return (
              <div key={element}>
                <Tooltip
                  label={
                    manageRoles ? "Creation Start Date" : "Register Start Date"
                  }
                >
                  <Input
                    variant="outline"
                    size="sm"
                    maxW={isMobileScreen ? "100%" : "46px"}
                    type="date"
                  />
                </Tooltip>
                &nbsp;
                <Tooltip
                  label={
                    manageRoles ? "Creation End Date" : "Register End Date"
                  }
                >
                  <Input
                    variant="outline"
                    size="sm"
                    maxW={isMobileScreen ? "100%" : "46px"}
                    type="date"
                  />
                </Tooltip>
              </div>
            );
          }
          if (element === "Intervals") {
            return (
              <Core.ActionsDropdown
                key={element}
                dropdwonType="filter"
                dropdwonOptions={dropdwonOptionsForIntervals}
                selectOption={selectedInterval}
              />
            );
          }
          if (
            element === "RoleStatus" ||
            element === "TaskStatus" ||
            element === "UserStatus" ||
            element === "PaymentStatus" ||
            element === "MessageStatus" ||
            element === "EmailAndNotificationStatus"
          ) {
            return (
              <Core.ActionsDropdown
                key={element}
                status
                dropdwonOptions={dropdwonOptions}
                selectOption={selectOption}
              />
            );
          }
          return null;
        })}
      </>
    );
  };
  const actionHandler = (selectedOption: any) => {
    const { name, value } = selectedOption.target;

    switch (name) {
      case "edit":
        router.push(
          {
            pathname: `/manage-users/add`,
            query: { action: name, uId: value },
          },
          undefined,
          {
            shallow: true,
          }
        );
        break;
      case "delete":
        router.push(
          {
            pathname: `/manage-users/add`,
            query: { action: name, uId: value },
          },
          undefined,
          {
            shallow: true,
          }
        );
        break;
      case "view":
        router.push(
          {
            pathname: `/manage-users/add`,
            query: { action: name, uId: value },
          },
          undefined,
          {
            shallow: true,
          }
        );
        break;
      default:
        break;
    }
  };
  return (
    <Box
      mt={mt && mt}
      style={
        shadow
          ? {
              borderRadius: "10px",
              padding: "10px 0",
              boxShadow: "0px 2px 5px 2px rgba(0,0,0,0.05)",
            }
          : {}
      }
      backgroundColor="#fff"
    >
      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <Core.H3 ml={"20px"} pt={"7px"} pb={"8px"}>
          {title && title}
        </Core.H3>
        <Flex
          fontFamily={"verdana"}
          paddingRight={"10px"}
          paddingLeft={"10px"}
          paddingBottom="5px"
          flexWrap={"wrap"}
          columnGap="5px"
          rowGap={"3px"}
          alignItems="center"
        >
          {filterBy?.includes("Name") ||
          filterBy?.includes("Package") ||
          filterBy?.includes("Roles") ||
          filterBy?.includes("Dates") ? (
            <Icons.CiFilter fontSize="20px" />
          ) : null}

          {allFilters(filterBy)}

          {filterBy?.includes("name") ||
          filterBy?.includes("package") ||
          filterBy?.includes("Dates") ? (
            <>
              <Core.Button button="Search" btnBlue />
              <Core.Button button="Reset" btnGray />
            </>
          ) : null}
        </Flex>
      </Flex>
      <TableContainer mt={"5px"} fontSize="14px">
        <CharkraTable variant="simple">
          {captionText && <TableCaption>{captionText}</TableCaption>}
          <Thead style={{ backgroundColor: "#f5f5f5" }}>
            <Tr>
              {columns.map((col) => (
                <Th key={col}>{tableHeading(col)}</Th>
              ))}
            </Tr>
          </Thead>
          {isLoading ? (
            ""
          ) : (
            <Tbody>
              {data?.map((row, index) => (
                <Tr key={index * 5}>
                  {columns.map((col) => {
                    if (row[col]?.edit || row[col]?.delete || row[col]?.view) {
                      return (
                        <Td key={col} maxW="200px" overflow={"auto"}>
                          {row[col]?.edit && (
                            <Core.IconicButton
                              button={"Edit"}
                              name="edit"
                              value={row._id}
                              onClick={actionHandler}
                            />
                          )}
                          &nbsp;
                          {row[col]?.delete && (
                            <Core.IconicButton
                              button={"Delete"}
                              name="delete"
                              value={row._id}
                              onClick={actionHandler}
                            />
                          )}
                          &nbsp;
                          {row[col]?.view && (
                            <Core.IconicButton
                              button={"view"}
                              name="view"
                              value={row._id}
                              onClick={actionHandler}
                            />
                          )}
                        </Td>
                      );
                    }
                    return (
                      <Td key={col} maxW="200px" overflow={"auto"}>
                        {col === "subscriptionAmount" || col === "amount"
                          ? "$ "
                          : ""}
                        {tableData(row[col], col)}
                      </Td>
                    );
                  })}
                </Tr>
              ))}
            </Tbody>
          )}
          <Tfoot>
            <Tr>
              {tableFoot?.map((tf) => (
                <Th key={tf}>{tf}</Th>
              ))}
            </Tr>
          </Tfoot>
        </CharkraTable>
      </TableContainer>
      {isLoading ? (
        <Flex
          w={"100%"}
          h={"200px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Core.BtnSpinner size="md" />
        </Flex>
      ) : data.length === 0 ? (
        <Flex
          w={"100%"}
          h={"200px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {" "}
          <Heading color="#aaa">Data not found!</Heading>{" "}
        </Flex>
      ) : (
        ""
      )}

      <Flex justify={"space-between"} alignItems="center" p="0px 20px">
        {data.length > 7 && (
          <Flex alignItems="center" columnGap="5px">
            <Box as="span" fontSize={"12px"}>
              Show
            </Box>
            <Input
              variant="outline"
              size="xs"
              fontSize={"16px"}
              textAlign="center"
              maxW={"50px"}
              borderColor={"graye.200"}
              type="number"
              placeholder="0"
              pt="0"
              pb="2px"
              px="3px"
            />
            <Box as="span" fontSize={"12px"}>
              Entries
            </Box>
          </Flex>
        )}
        {data.length > 7 && <Core.PaginationContainer />}
      </Flex>
    </Box>
  );
};

export default memo(Table);
