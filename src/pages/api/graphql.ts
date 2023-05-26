/* eslint-disable no-underscore-dangle */
import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { compare } from "bcrypt";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "graphql-tools";
import { sign } from "jsonwebtoken";
import { Types } from "mongoose";
import getConfig from "next/config";

import { permissions } from "@/graphql/permissions/permissions";
import Service from "@/graphql/services";
import { typeDefs } from "@/graphql/typedef/typedef";
import operationModel from "@/models/operation.model";
import packageModel from "@/models/package.model";
import userModel from "@/models/user.model";
import { MongoHelper } from "@/utils/helpers/mongodb";
// import * as Resolvers from "@/graphql/resolvers";
// import { ModuleEnum, OperationEnum } from "@/models/user.model";

const resolvers = {
  Query: {
    dogs: () => [{ name: "Bo" }, { name: "Lessie" }],
    // Role
    findRole: async (): Promise<[IRole]> => {
      return (await Service.role.find()) as unknown as Promise<[IRole]>;
    },
    // manageRolesListing: async (_: any, { id }: { id: Types.ObjectId }) => {
    //   return Service.user.manageRolesListing(id);
    // },
    findRolesByUserId: async (
      _: any,
      { id }: { id: Types.ObjectId }
    ): Promise<[IRole]> => {
      return (await Service.role.findRolesByUserId(id)) as unknown as Promise<
        [IRole]
      >;
    },
    // User
    users: async () => {
      return Service.user.find();
    },
    findRelatingUsers: async (_: any, { id }: { id: Types.ObjectId }) => {
      return Service.user.manageUserListing(id);
    },

    userById: async (_: any, { id }: { id: string }) => {
      return Service.user.findById(id);
    },
    // Operation
    operations: async (): Promise<IOperation[]> => {
      return (await operationModel.find()) as unknown as Promise<IOperation[]>;
    },
    // Package
    findAllPackages: async (): Promise<IPackage[]> => {
      return (await packageModel.find()) as unknown as Promise<IPackage[]>;
    },
    findPackageById: async (id: string): Promise<IPackage> => {
      return (await packageModel.findById(
        new Types.ObjectId(id)
      )) as unknown as Promise<IPackage>;
    },
  },
  Mutation: {
    // Package
    addPackage: async (
      _: any,
      { packageInput }: { packageInput: PackageInput },
      _context: any
    ): Promise<IPackage> => {
      return (await packageModel.create(
        packageInput
      )) as unknown as Promise<IPackage>;
    },
    updatePackage: async (
      _: any,
      { updatePackageInput }: { updatePackageInput: UpdatePackageInput },
      _context: any
    ) => {
      const { _id: id, ...updatedInput } = updatePackageInput;
      return (await packageModel.findOneAndUpdate({ _id: id }, updatedInput, {
        new: true,
        upsert: false,
      })) as unknown as Promise<IPackage>;
    },
    // Role
    addRole: async (
      _: any,
      { roleInput }: { roleInput: IRoleInput },
      _context: any
    ): Promise<IRole> => {
      return (await Service.role.create(
        roleInput
      )) as unknown as Promise<IRole>;
    },
    // Auth
    addUserAdmin: async (
      _: any,
      { signupInput }: { signupInput: IUserInput },
      _context: any
    ) => {
      return Service.auth.create(signupInput);
    },
    login: async (
      _: any,
      { loginInput }: { loginInput: ILoginInput },
      _context: any
    ) => {
      const { serverRuntimeConfig } = getConfig();
      const user = await userModel.findOne({ email: loginInput.email });
      if (user) {
        const valid = await compare(loginInput.password, user.password);
        if (valid) {
          if (!user.active) throw new Error("Inactive User");
          return sign({ id: user._id }, serverRuntimeConfig.JWT_SECRET, {
            expiresIn: loginInput.rememberMe ? "14d" : "24h",
          });
        }
      }
      throw new Error("Invalid Credentials");
    },
    createSuperAdmin: async (
      _: any,
      { createSuperAdminInput }: { createSuperAdminInput: IUserInput },
      _context: any
    ) => {
      return Service.auth.createSuperAdmin(createSuperAdminInput);
    },
    forgetPassword: async (
      _: any,
      { forgetPasswordInput }: { forgetPasswordInput: IForgetPasswordInput },
      _context: any
    ) => {
      return Service.auth.forgetPassword(forgetPasswordInput);
    },
    verifyOtp: async (
      _: any,
      { verifyOtpInput }: { verifyOtpInput: IVerifyOtpInput },
      _context: any
    ) => {
      return Service.auth.verifyOtp(verifyOtpInput);
    },
    resetPassword: async (
      _: any,
      { resetPasswordInput }: { resetPasswordInput: IResetPasswordInput },
      _context: any
    ) => {
      return Service.auth.changePassword(resetPasswordInput);
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
// Apply the `permissions` middleware to the schema
const schemaWithMiddleware = applyMiddleware(schema, permissions);

const server = new ApolloServer({ schema: schemaWithMiddleware });

const mongo = new MongoHelper();
mongo.initiateMongoConnection();

export default startServerAndCreateNextHandler(server, {
  context: async (req) => ({ req }),
});
