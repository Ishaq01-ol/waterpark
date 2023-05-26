import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";

import { Core } from "@/components";
import PermissionsList from "@/components/core/permissions_list/permissions_list";
import type { AddRoleMutation, RoleInput } from "@/graphql/generated/graphql";
import { UserContext } from "@/pages/_app";
import { AddRole } from "@/services/api";

interface IAddRoleFormProps {}

const AddRoleForm: React.FunctionComponent<IAddRoleFormProps> = (_props) => {
  const moduleViewPermissions: ModuleViewPermissions = [
    {
      name: "email-&-notifications",
      views: ["email-&-notifications", "email-&-notifications.add"],
    },
    {
      name: "report-templates",
      views: ["report-templates"],
    },
    {
      name: "tasks",
      views: ["tasks", "tasks.add", "tasks.track", "tasks.details"],
    },
    {
      name: "uploader",
      views: ["uploader"],
    },
    {
      name: "website-contact-form",
      views: ["website-contact-form", "website-contact-form.details"],
    },
  ];
  const operationViewPermissions: OperationViewPermissions = [
    {
      name: "manage-admin",
      views: [
        "admin.manage-roles",
        "manage-roles.add",
        "admin.manage-users",
        "manage-users.add",
      ],
    },
    {
      name: "password-change",
      views: ["password-change"],
    },
    {
      name: "dashboard",
      views: ["dashboard"],
    },
    {
      name: "about-us",
      views: ["about-us.edit"],
    },
    {
      name: "eula",
      views: ["eula.edit"],
    },
    {
      name: "faq",
      views: ["faq.edit"],
    },
    {
      name: "privacy-policy",
      views: ["privacy-policy.edit"],
    },
    {
      name: "payments",
      views: ["payments", "payments.subscription", "subscription.add"],
    },
    {
      name: "report-templates",
      views: ["report-template", "report-template.edit"],
    },
    {
      name: "subadmins",
      views: ["subadmins", "subadmins.add", "subadmins.view"],
    },
    {
      name: "track-subadmin-payment-record",
      views: [
        "track-subadmin-payment-record",
        "payment-records.track",
        "track.details",
      ],
    },
    {
      name: "update-email",
      views: ["email.update"],
    },
  ];
  const userContext = useContext(UserContext);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState(false);
  const [success, setSuccess] = useState<IAlertSuccessData>();
  const [errorAddRole, setErrorAddRole] = useState<IAlertSuccessData>();
  const { mutate, isLoading } = useMutation<
    AddRoleMutation,
    unknown,
    RoleInput
  >((variables) => AddRole({ roleInput: variables }), {
    onSuccess: () => {
      setSuccess({
        status: true,
        title: "Added",
        description: "Role added successfully.",
      });
    },
    onError: () => {
      setErrorAddRole({
        status: true,
        title: "Submit Failed",
        description: "Adding Role Failed.",
      });
    },
  });

  const [modulePermissions, setModulePermissions] = useState<
    {
      name: { key: string; active: boolean };
      views: { key: string; active: boolean }[];
    }[]
  >([]);
  const [operationPermissions, setOperationPermissions] = useState<
    {
      name: { key: string; active: boolean };
      views: { key: string; active: boolean }[];
    }[]
  >([]);

  useEffect(() => {
    const tempModulePermissions: {
      name: {
        key: string;
        active: boolean;
      };
      views: {
        key: string;
        active: boolean;
      }[];
    }[] = [];
    const tempOperationPermissions: {
      name: {
        key: string;
        active: boolean;
      };
      views: {
        key: string;
        active: boolean;
      }[];
    }[] = [];

    if (userContext?.user?.admin) {
      // Filter Modules
      moduleViewPermissions.forEach((obj) => {
        tempModulePermissions.push({
          name: { key: String(obj.name), active: false },
          views: obj.views.map((v) => ({ key: v, active: false })),
        });
      });
      // Filter Operations
      operationViewPermissions.forEach((obj) => {
        tempOperationPermissions.push({
          name: { key: String(obj.name), active: false },
          views: obj.views.map((v) => ({ key: v, active: false })),
        });
      });
    } else {
      // Filter Modules
      moduleViewPermissions.forEach(() => {
        const user = userContext?.user;
        user?.modules?.forEach((userModuleObj: any) => {
          if (userModuleObj.name) {
            const views = userModuleObj.views.filter((view: any) => {
              // flatMap => to concat the array
              if (
                moduleViewPermissions.some((module) =>
                  module.views.includes(view.key)
                )
              )
                return false;
              return false;
            });
            tempModulePermissions.push({
              name: { key: String(userModuleObj.name), active: false },
              views,
            });
          }
        });
      });
      // Filter Operations
      operationViewPermissions.forEach(() => {
        const user = userContext?.user;
        user?.operations?.forEach((userOperationsObj: any) => {
          if (userOperationsObj.name) {
            const views = userOperationsObj.views.filter((view: any) => {
              // flatMap => to concat the array
              if (
                operationViewPermissions.some((module) =>
                  module.views.includes(view.key)
                )
              )
                return false;
              return false;
            });
            tempOperationPermissions.push({
              name: { key: String(userOperationsObj.name), active: false },
              views,
            });
          }
        });
      });
    }
    setModulePermissions(tempModulePermissions);
    setOperationPermissions(tempOperationPermissions);
  }, [userContext?.user?.active]);

  const statusHandler = (value: string) => {
    let bool: boolean = false;
    if (value === "true") bool = true;
    setStatus(bool);
  };
  const changeHandler = (e: any) => {
    const { value } = e.target;
    setRole(value);
  };
  const submitHandler = async () => {
    const modules: ModuleViewPermissions = [];
    const operations: OperationViewPermissions = [];

    // Active Modules Filter
    modulePermissions?.forEach((m) => {
      if (m.name.active) {
        const views: EModuleViews[] = [];
        m.views.forEach((view: any) => view.active && views.push(view.key));
        modules.push({
          name: m.name.key as EModules,
          views: views as EModuleViews[],
        });
      }
    });
    // Active Operation Filter
    operationPermissions?.forEach((o) => {
      if (o.name.active) {
        const views: EOperationViews[] = [];
        o.views.forEach((view: any) => view.active && views.push(view.key));
        operations.push({
          name: o.name.key as EOperations,
          views: views as EOperationViews[],
        });
      }
    });
    if (userContext?.user?._id && userContext.user?.admin) {
      mutate({
        name: role,
        active: status,
        modules,
        operations,
        user_id: userContext.user._id,
      });
    } else {
      console.log("userContext?.user?.admin Role -> else");
    }
  };

  return (
    <Box>
      <Core.Alert show={success} theme="success" />
      <Core.Alert show={errorAddRole} theme="error" />
      <Core.FormHeading3 title="Add Role Details" />
      <Flex columnGap={"10px"} pb="20px" mb="30px">
        <FormControl isRequired>
          <FormLabel>Role</FormLabel>
          <Input placeholder="Enter" type="text" onChange={changeHandler} />
        </FormControl>
        <FormControl>
          <RadioGroup
            defaultValue="false"
            onChange={(value) => statusHandler(value)}
            name="status"
          >
            <FormLabel>Status</FormLabel>
            <Stack spacing={5} direction="row" mt="20px">
              <Radio colorScheme="green" value="true">
                Active
              </Radio>
              <Radio colorScheme="red" value="false">
                Inactive
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Flex>
      <Flex justifyContent={"space-between"} columnGap={"20px"}>
        <Box w="50%">
          <Core.FormHeading3 title="Module Permissions" searchBox />
          <PermissionsList
            permissions={modulePermissions}
            setPermissions={setModulePermissions}
          />
        </Box>
        <Box borderLeft={"1px solid #e9e9e9"}></Box>
        <Box w="50%">
          <Core.FormHeading3 title="Operation Permissions" searchBox />
          <PermissionsList
            permissions={operationPermissions}
            setPermissions={setOperationPermissions}
          />
        </Box>
      </Flex>
      <Flex
        columnGap={"10px"}
        justifyContent="end"
        borderTop={"1px solid"}
        borderColor={"graye.100"}
      >
        <Core.Button button={"Cancel"} btnGrayMd />
        <Core.Button
          button={"Add Role"}
          btnOrangeMd
          onClick={submitHandler}
          isLoading={isLoading}
        />
      </Flex>
    </Box>
  );
};

export default AddRoleForm;
