import { Box, Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { memo } from "react";

import { convertModuleOperationPermissionsIDsToTitleCase } from "@/utils/helpers/functions";

interface IPermissionsListProps {
  permissions: {
    name: { key: string; active: boolean };
    views: { key: string; active: boolean }[];
  }[];
  setPermissions: React.Dispatch<
    React.SetStateAction<
      {
        name: { key: string; active: boolean };
        views: { key: string; active: boolean }[];
      }[]
    >
  >;
}

const PermissionsList: React.FunctionComponent<IPermissionsListProps> = ({
  permissions,
  setPermissions,
}) => {
  const namePermissionsHandler = (
    value: string,
    name: { key: string; active: boolean },
    views: { key: string; active: boolean }[],
    index: number
  ) => {
    console.log({ value }, { name }, { views }, { index });
    let bool: boolean = false;
    if (value === "true") bool = true;
    permissions.splice(index, 1, {
      name: { key: name.key, active: bool },
      views,
    });
    setPermissions(permissions);
  };

  const viewPermissionsHandler = (
    value: string,
    nameIndex: number,
    viewIndex: number
  ) => {
    let bool: boolean = false;
    if (value === "true") bool = true;
    // Create a copy of the permissions array
    const updatedPermissions = [...permissions];
    // Retrieve the existing name object at nameIndex
    const existingNameObject = updatedPermissions[nameIndex];
    if (existingNameObject) {
      // Create a copy of the views array in the existing name object
      const updatedViews = [...existingNameObject.views];
      // Replace the existing view object at the specified viewIndex with the updated view
      updatedViews.splice(viewIndex, 1, {
        key: updatedViews[viewIndex]?.key ?? "",
        active: bool,
      });
      // Create an updated name object with the updated views array
      const updatedNameObject = { ...existingNameObject, views: updatedViews };
      // Replace the existing name object in the permissions array at the specified nameIndex with the updated name object
      updatedPermissions.splice(nameIndex, 1, updatedNameObject);
      // Set the updated permissions array
      setPermissions(updatedPermissions);
    }
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
      rowGap={"10px"}
      pt="10px"
      pb="20px"
      pr="15px"
      maxH={"440px"}
      overflow={"auto"}
      className="modules_and_operations"
    >
      {permissions?.map((perm: any, nameIndex: number) => {
        return (
          <Box
            backgroundColor={"#f3f3f3"}
            borderRadius={"10px"}
            p="10px"
            key={nameIndex}
          >
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              w="100%"
              pb="5px"
              borderBottom={"1px solid #ddd"}
            >
              <Box as="p" fontWeight={"bold"}>
                {convertModuleOperationPermissionsIDsToTitleCase(perm.name.key)}
              </Box>
              <RadioGroup
                id={String(nameIndex)}
                value={perm?.name?.active?.toString()}
                onChange={(value) =>
                  namePermissionsHandler(
                    value,
                    perm.name,
                    perm.views,
                    nameIndex
                  )
                }
              >
                <Stack direction="row">
                  <Radio colorScheme="green" value="true">
                    Enable
                  </Radio>
                  <Radio colorScheme="red" value="false">
                    Disable
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              w="100%"
              pt="5px"
            >
              {perm?.views?.length &&
                perm?.views?.map((view: any, viewIndex: number) => (
                  <Flex
                    key={`${nameIndex}-${viewIndex}`}
                    flexDirection="row"
                    justifyContent="space-between"
                    w="100%"
                    pt="4px"
                  >
                    <Text as="p" fontSize={"sm"} pl="10px">
                      {convertModuleOperationPermissionsIDsToTitleCase(
                        view.key
                      )}
                    </Text>
                    <RadioGroup
                      id={String(viewIndex)}
                      value={view?.active?.toString()}
                      onChange={(value) =>
                        viewPermissionsHandler(value, nameIndex, viewIndex)
                      }
                    >
                      <Stack direction="row">
                        <Radio colorScheme="green" value="true">
                          Enable
                        </Radio>
                        <Radio colorScheme="red" value="false">
                          Disable
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </Flex>
                ))}
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default memo(PermissionsList);
