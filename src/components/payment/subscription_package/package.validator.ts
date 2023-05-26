import * as Yup from "yup";

export const validationSchema = Yup.object({
  discount: Yup.number(),
  discount_type: Yup.string(),
  active: Yup.string().required(),
  number_of_users: Yup.number()
    .min(1, "Enter the number of users")
    .required("Number of users are required"),
  title: Yup.string().required("Package Name is required"),
  cost: Yup.string().required("Package amount is required"),
  // modules: Yup.array().required("Modules are required").min(1),
  description: Yup.string().required("Package description is required"),
  duration: Yup.number()
    .min(90, "Time Period is Required")
    .required("Timeperiod is required"),
});
