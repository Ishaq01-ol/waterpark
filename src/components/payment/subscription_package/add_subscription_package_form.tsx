import { Box, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";

import { Core } from "@/components";
import PermissionsList from "@/components/core/permissions_list/permissions_list";
import type { PackageInput } from "@/graphql/generated/graphql";
import { DiscountType } from "@/graphql/generated/graphql";
import { UserContext } from "@/pages/_app";
import { AddPackage } from "@/services/api";

import { validationSchema } from "./package.validator";

interface IAddSubscriptionPackageFormProps {}

const AddSubscriptionPackageForm: FC<IAddSubscriptionPackageFormProps> = () => {
  const { replace } = useRouter();
  const userContext = useContext(UserContext);
  const [success, setSuccess] = useState<IAlertSuccessData>();
  const [errorSuscriptionPackage, setErrorSuscriptionPackage] =
    useState<IAlertSuccessData>();

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

  const [modulePermissions, setModulePermissions] = useState<
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

    if (userContext?.user?.admin) {
      moduleViewPermissions.forEach((obj) => {
        tempModulePermissions.push({
          name: { key: String(obj.name), active: false },
          views: obj.views.map((v) => ({ key: v, active: false })),
        });
      });
    } else {
      moduleViewPermissions.forEach(() => {
        const user = userContext?.user;
        user?.modules?.forEach((userModuleObj: any) => {
          if (userModuleObj.name) {
            const views = userModuleObj.views.filter((view: any) => {
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
    }
    setModulePermissions(tempModulePermissions);
  }, []);

  const timePeriod = [
    {
      name: "--",
      value: "",
    },
    {
      name: "3 Months",
      value: "90",
    },
    {
      name: "6 months",
      value: "180",
    },
    {
      name: "1 year",
      value: "360",
    },
    {
      name: "1.5 year",
      value: "540",
    },
    {
      name: "2 year",
      value: "720",
    },
  ];

  const mutation = useMutation(AddPackage, {
    onSuccess: () => {
      setSuccess({
        status: true,
        title: "Added",
        description: "Role added successfully.",
      });
      replace("/payments/subscription");
    },
    onError: (errorr: any) => {
      console.log(
        "ERROR",
        errorr?.response?.errors[0]?.message || "Adding Package Failed"
      );
      setErrorSuscriptionPackage({
        status: true,
        title: "Submit Failed",
        description: "Adding Package Failed.",
      });
    },
  });

  const { handleSubmit, handleChange, values, errors, touched, isSubmitting } =
    useFormik<PackageInput>({
      initialValues: {
        active: true,
        cost: 0,
        discount: 0,
        discount_type: DiscountType.Fixed,
        modules: [],
        title: "",
        description: "",
        duration: Number(timePeriod[0]?.value),
        number_of_users: 0,
      },
      onSubmit: (inputValues) => {
        const subscriptionModules: ModuleViewPermissions = [];
        modulePermissions?.forEach((module) => {
          if (module.name.active) {
            const views: EModuleViews[] = [];
            module.views.forEach(
              (view: any) => view.active && views.push(view.key)
            );
            subscriptionModules.push({
              name: module.name.key as EModules,
              views: views as EModuleViews[],
            });
          }
        });
        mutation.mutate({
          packageInput: {
            ...inputValues,
            modules: subscriptionModules,
            duration: Number(inputValues.duration),
          },
        });
      },
      validationSchema,
    });

  return (
    <Box>
      <Core.Alert show={success} theme="success" />
      <Core.Alert show={errorSuscriptionPackage} theme="error" />
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired isInvalid={!!errors.title && touched.title}>
          <FormLabel>Package Name</FormLabel>
          <Core.Input
            name="title"
            placeholder="Package Name"
            type="text"
            onChange={handleChange}
            value={values.title}
            errorBorderColor="red.300"
            error={errors.title}
            touched={touched.title}
          />
        </FormControl>
        <FormControl
          isRequired
          isInvalid={!!errors.duration && touched.duration}
        >
          <FormLabel>Time Period</FormLabel>
          <Core.Select
            name="duration"
            textTransform="capitalize"
            onChange={handleChange}
            value={values.duration}
            list={timePeriod}
            errorBorderColor="red.300"
            error={errors.duration}
            touched={touched.duration}
          />
        </FormControl>
      </Flex>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl isRequired isInvalid={!!errors.cost && touched.cost}>
          <FormLabel>Price</FormLabel>
          <Core.Input
            name="cost"
            placeholder="Price"
            type="number"
            min="1000"
            max="100000"
            step="500"
            onChange={handleChange}
            value={values.cost}
            error={errors.cost}
            touched={touched.cost}
          />
        </FormControl>
        <FormControl
          isRequired
          isInvalid={!!errors.number_of_users && touched.number_of_users}
        >
          <FormLabel>Number of app & web users</FormLabel>
          <Core.Input
            name="number_of_users"
            placeholder="Number of app & web users"
            type="number"
            min="0"
            max="100000"
            step="5"
            onChange={handleChange}
            value={values.number_of_users}
            error={errors.number_of_users}
            touched={touched.number_of_users}
          />
        </FormControl>
      </Flex>
      <Flex columnGap={"10px"} pb="20px">
        <FormControl
          isRequired
          isInvalid={!!errors.description && touched.description}
        >
          <FormLabel>Decription</FormLabel>
          <Core.Textarea
            name="description"
            placeholder="Decription"
            rows={4}
            onChange={handleChange}
            value={values.description}
            errorBorderColor="red.300"
            error={errors.description}
            touched={touched.description}
          />
        </FormControl>
      </Flex>
      <Box>
        <Core.FormHeading3 title="Module Permissions" searchBox />
        <PermissionsList
          permissions={modulePermissions}
          setPermissions={setModulePermissions}
        />
      </Box>
      <Flex columnGap={"10px"} justifyContent="end">
        <Core.Button
          btnOrangeMd
          type="submit"
          button="Add Package"
          onClick={handleSubmit}
          isLoading={isSubmitting}
          isDisabled={isSubmitting}
        />
      </Flex>
    </Box>
  );
};

export default AddSubscriptionPackageForm;
