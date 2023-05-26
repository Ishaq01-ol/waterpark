import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

import { getSdk } from "@/graphql/generated/graphql";

const gqlClient = new GraphQLClient(
  `${process.env.FRONT_END_URL}/api/graphql/`
);
export const {
  // QUERY
  getDogs,
  users,
  Login,
  UserById,
  FindRole,
  FindRolesByUserId,
  FindRelatingUsers,
  // MUTATIONS
  forgetPassword,
  ResetPassword,
  VerifyOtp,
  AddUserAdmin,
  FindAllPackages,
  AddPackage,
  AddRole,
} = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
