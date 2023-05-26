import { allow, rule, shield } from "graphql-shield";
import { verify } from "jsonwebtoken";
import getConfig from "next/config";

import Service from "../services";

const { serverRuntimeConfig } = getConfig();

const isAuth = rule()(async (_parent, _args, context) => {
  const bearer = String(context.req?.headers?.authorization).split(" ")[1];
  const cookie = String(context.req?.headers?.cookie)?.split("=")[1];

  if (bearer || cookie) {
    const token: string | undefined = bearer || cookie;
    if (token) {
      const verified = verify(token, serverRuntimeConfig.JWT_SECRET);
      if (typeof verified !== "string") {
        const user = await Service.user.findById(verified.id);
        if (user) {
          return true;
        }
        return false;
      }
      return false;
    }
  }
  return false;
});

export const permissions = shield(
  {
    Query: {
      "*": allow,
    },
    Mutation: {
      "*": isAuth,
      login: allow,
      createSuperAdmin: allow,
      resetPassword: allow,
      verifyOtp: allow,
      forgetPassword: allow,
    },
  },
  { allowExternalErrors: true }
);
