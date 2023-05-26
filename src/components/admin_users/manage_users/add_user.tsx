import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo, useContext, useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { Core } from "@/components";
import PermissionsList from "@/components/core/permissions_list/permissions_list";
import type {
  AddUserAdminMutation,
  InputUser,
} from "@/graphql/generated/graphql";
import { UserContext } from "@/pages/_app";
import { AddUserAdmin, FindRolesByUserId, UserById } from "@/services/api";

interface IAddUserFormProps {}
interface IPageQuery {
  action: string | undefined;
  uId: string;
}

const AddUserForm: React.FunctionComponent<IAddUserFormProps> = (_props) => {
  const { query } = useRouter();
  const { action, uId } = useMemo(
    () => query as unknown as IPageQuery,
    [query]
  );
  const userContext = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const [actionUserId, setActionUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [modulesAndOperationsForActions, setModulesAndOperationsForActions] =
    useState<{
      modules: Array<IFeatureType>;
      operations: Array<IFeatureType>;
    }>();

  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useQuery(
    ["FindRolesByUserId"],
    () => FindRolesByUserId({ findRolesByUserIdId: userId }),
    {
      onSuccess: (data: any) => {
        setRoles(data.findRolesByUserId);
      },
      // Enable the query when userId is truthy
      enabled: Boolean(userId),
    }
  );
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
  const moduleViewPermissions: ModuleViewPermissions = useMemo(
    () => [
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
    ],
    []
  );
  const operationViewPermissions: OperationViewPermissions = useMemo(
    () => [
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
    ],
    []
  );

  useQuery(
    ["FindRolesByUserId"],
    () => FindRolesByUserId({ findRolesByUserIdId: userId }),
    {
      onSuccess: (data: any) => {
        setRoles(data.findRolesByUserId);
      },
      onError(err) {
        console.log(err);
      },
      // Enable the query when userId is truthy
      enabled: Boolean(userId),
    }
  );
  useQuery(
    ["userListing"],
    () => UserById({ userByIdId: actionUserId }),
    {
      onSuccess: (data: { userById: IUser }) => {
        const { userById } = data;
        const features: {
          modules: Array<IFeatureType>;
          operations: Array<IFeatureType>;
        } = {
          modules: userById?.modules || [],
          operations: userById?.operations || [],
        };
        setFirstName(userById.first_name);
        setLastName(userById.last_name);
        setEmail(userById.email);
        setStatus(userById.active);
        setRole(userById.role._id || "");
        if (features.modules.length || features.operations.length)
          // to check if operations and modules are not empty
          setModulesAndOperationsForActions(features);
      },
      onError(err) {
        console.log(err);
      },
      enabled: Boolean(actionUserId),
    }
    // Enable the query when userId is truthy
  );

  const [success, setSuccess] = useState<IAlertSuccessData>();
  const { isError, isSuccess, error, mutateAsync } = useMutation<
    AddUserAdminMutation,
    unknown,
    InputUser
  >((variables) => AddUserAdmin({ signupInput: variables }));

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
    // Run only for Edit/View Action
    if (modulesAndOperationsForActions?.modules) {
      modulesAndOperationsForActions.modules.forEach((aModule) => {
        tempModulePermissions.forEach((f) => {
          if (f.name.key === aModule.name) {
            f.name.active = true;
            f.views.forEach((v) => {
              if (aModule.views.includes(v.key)) v.active = true;
            });
          }
        });
      });
    }
    // Run only for Edit/View Action
    if (modulesAndOperationsForActions?.operations) {
      modulesAndOperationsForActions.operations.forEach((aOperation) => {
        tempOperationPermissions.forEach((f) => {
          if (f.name.key === aOperation.name) {
            f.name.active = true;
            f.views.forEach((v) => {
              if (aOperation.views.includes(v.key)) v.active = true;
            });
          }
        });
      });
    }

    if (userContext?.user?._id) setUserId(userContext.user._id);
    setModulePermissions(tempModulePermissions);
    setOperationPermissions(tempOperationPermissions);
  }, [userContext?.user?.active, modulesAndOperationsForActions]);
  useEffect(() => {
    if (action && uId) {
      setActionUserId(uId);
    }
  }, [action, uId]);

  const changeHandler = (e: any) => {
    const { value, name } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "role":
        if (value !== "") setRole(value);
        break;
      default:
        break;
    }
  };

  const statusHandler = (value: string) => {
    let bool: boolean = false;
    if (value === "true") bool = true;
    setStatus(bool);
  };

  const submitHandler = async () => {
    setIsDisabled(true);
    setIsLoading(true);
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

    if (userContext?.user?.admin) {
      await mutateAsync({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        active: status,
        modules,
        operations,
        role: role !== "" ? role : null,
      }).catch((e) => console.log({ e }));
      if (isError) {
        setIsDisabled(true);
        setIsDisabled(true);
        console.log("error", error);
      }
      if (isSuccess) {
        setSuccess({
          status: true,
          title: "Added",
          description: "User The user has been added successfully.",
        });
        setIsDisabled(true);
        setIsLoading(true);
      }
    } else {
      console.log("object");
    }
  };

  return (
    <Box>
      <Core.Alert show={success} theme="success" />
      <Core.FormHeading3 title="Add User Details" />
      <Flex columnGap={"10px"} pb="20px" mb="30px" flexWrap={"wrap"}>
        <FormControl isRequired w={"49%"} mb="10px">
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="First Name"
            type="text"
            onChange={changeHandler}
            name="firstName"
            defaultValue={firstName}
          />
        </FormControl>
        <FormControl isRequired w={"49%"} mb="10px">
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder="Last Name"
            type="text"
            onChange={changeHandler}
            name="lastName"
            defaultValue={lastName}
          />
        </FormControl>
        <FormControl isRequired w={"49%"} mb="10px">
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            type="email"
            onChange={changeHandler}
            name="email"
            defaultValue={email}
          />
        </FormControl>
        <FormControl isRequired w={"49%"} mb="10px">
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              onChange={changeHandler}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl w={"49%"} mb="10px">
          <FormLabel>Role</FormLabel>
          <Select
            placeholder="Select"
            name="role"
            value={role} // Set the selected value using the 'role' state variable
            onChange={changeHandler}
          >
            {roles?.map((_: any, index: number) => (
              <option key={index} value={_._id}>
                {_.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Status</FormLabel>
          <RadioGroup
            value={status.toString()}
            onChange={(value) => statusHandler(value)}
          >
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
          button={action ? "Update User" : "Add User"}
          btnOrangeMd
          onClick={submitHandler}
          isLoading={isLoading}
          isDisabled={isDisabled}
        />
      </Flex>
    </Box>
  );
};

export default memo(AddUserForm);
