// import { Box, Flex, Radio, RadioGroup, Stack } from "@chakra-ui/react";
// import * as React from "react";

// interface IPermissionProps {
//   permission: string;
//   value: string;
//   setPermissions: React.Dispatch<React.SetStateAction<{
//     key: string;
//     value: string;
//   }[]>>
// }

// const Permission: React.FunctionComponent<IPermissionProps> = ({
//   permission,
//   setPermissions,
//   value,

// }) => {

//   const permissionHandler = (e: any) => {
//     setPermissions(permission)
//   }

//   return (
//     <Flex flexDirection={"row"} justifyContent={"space-between"} w={"100%"}>
//       <Box as="p">{value}</Box>

//       <RadioGroup defaultValue="false" onChange={(e) => permissionHandler(e)} >
//         <Stack direction="row">
//           <Radio colorScheme="green" value='true'>Enable</Radio>
//           <Radio colorScheme="red" value='false'>Disable</Radio>
//         </Stack>
//       </RadioGroup>
//     </Flex>
//   );
// };

// export default Permission;
