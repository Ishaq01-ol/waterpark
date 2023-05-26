import type { GraphQLClient } from "graphql-request";
import type * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type ActionType = {
  __typename?: "ActionType";
  delete?: Maybe<Scalars["Boolean"]>;
  edit?: Maybe<Scalars["Boolean"]>;
  view?: Maybe<Scalars["Boolean"]>;
};

export type AdditionalDetails = {
  __typename?: "AdditionalDetails";
  name?: Maybe<Scalars["String"]>;
};

export type Company = {
  __typename?: "Company";
  locations?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  park?: Maybe<Scalars["ID"]>;
  subAdmin?: Maybe<Scalars["Boolean"]>;
};

export type CompanyInput = {
  locations?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  park?: InputMaybe<Scalars["ID"]>;
  subAdmin?: InputMaybe<Scalars["Boolean"]>;
};

export enum DiscountType {
  Fixed = "FIXED",
  Percentage = "PERCENTAGE",
}

export type Dog = {
  __typename?: "Dog";
  name: Scalars["String"];
};

export enum EIconType {
  Icon = "Icon",
  Source = "Source",
}

export enum EPermission {
  Read = "Read",
  Write = "Write",
}

export enum EUnits {
  Kilogram = "Kilogram",
  Pound = "Pound",
}

export type FindRelatingUsersResponse = {
  __typename?: "FindRelatingUsersResponse";
  _id?: Maybe<Scalars["ID"]>;
  action?: Maybe<ActionType>;
  active?: Maybe<Scalars["String"]>;
  createdOn?: Maybe<Scalars["Date"]>;
  name?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
};

export type ForgetPasswordInput = {
  email: Scalars["String"];
};

export type Icon = {
  __typename?: "Icon";
  _id?: Maybe<Scalars["ID"]>;
  src: Scalars["String"];
  type: EIconType;
};

export type InOperation = {
  __typename?: "InOperation";
  name: Scalars["String"];
  views?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type InputAdditionalDetails = {
  name?: InputMaybe<Scalars["String"]>;
};

export type InputIcon = {
  src: Scalars["String"];
  type: EIconType;
};

export type InputOperation = {
  icon: InputIcon;
  path: Scalars["String"];
  permissions: Array<EPermission>;
  title: Scalars["String"];
};

export type InputPark = {
  GPS: Scalars["String"];
  additionalDetails?: InputMaybe<InputAdditionalDetails>;
  address: Scalars["String"];
  city: Scalars["String"];
  logo: Scalars["String"];
  name: Scalars["String"];
  state: Scalars["String"];
};

export type InputPhone = {
  code: Scalars["String"];
  phoneNo: Scalars["String"];
};

export type InputUser = {
  active?: InputMaybe<Scalars["Boolean"]>;
  company?: InputMaybe<CompanyInput>;
  email: Scalars["String"];
  first_name: Scalars["String"];
  last_name: Scalars["String"];
  modules?: InputMaybe<Array<InputMaybe<IntModule>>>;
  operations?: InputMaybe<Array<InputMaybe<IntOperation>>>;
  password: Scalars["String"];
  phone?: InputMaybe<InputPhone>;
  photo_url?: InputMaybe<Scalars["String"]>;
  rec_email?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  scopes?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type IntModule = {
  name: Scalars["String"];
  views?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type IntOperation = {
  name: Scalars["String"];
  views?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  rememberMe: Scalars["Boolean"];
};

export type Mutation = {
  __typename?: "Mutation";
  addOperation?: Maybe<Operation>;
  addPackage: Package;
  addRole?: Maybe<Role>;
  addUserAdmin?: Maybe<User>;
  createSuperAdmin?: Maybe<User>;
  forgetPassword?: Maybe<Scalars["String"]>;
  login?: Maybe<Scalars["String"]>;
  resetPassword?: Maybe<Scalars["String"]>;
  updatePackage: Package;
  verifyOtp?: Maybe<Scalars["String"]>;
};

export type MutationAddOperationArgs = {
  input: InputOperation;
};

export type MutationAddPackageArgs = {
  packageInput: PackageInput;
};

export type MutationAddRoleArgs = {
  roleInput: RoleInput;
};

export type MutationAddUserAdminArgs = {
  signupInput: InputUser;
};

export type MutationCreateSuperAdminArgs = {
  createSuperAdminInput: InputUser;
};

export type MutationForgetPasswordArgs = {
  forgetPasswordInput: ForgetPasswordInput;
};

export type MutationLoginArgs = {
  loginInput: LoginInput;
};

export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};

export type MutationUpdatePackageArgs = {
  updatePackageInput: UpdatePackageInput;
};

export type MutationVerifyOtpArgs = {
  verifyOtpInput: VerifyOtpInput;
};

export type Operation = {
  __typename?: "Operation";
  _id?: Maybe<Scalars["ID"]>;
  icon: Icon;
  path: Scalars["String"];
  permissions: Array<EPermission>;
  title: Scalars["String"];
};

export type Package = {
  __typename?: "Package";
  _id?: Maybe<Scalars["ID"]>;
  active: Scalars["Boolean"];
  compare_at?: Maybe<Scalars["Float"]>;
  cost: Scalars["Float"];
  description: Scalars["String"];
  discount: Scalars["Float"];
  discount_type: DiscountType;
  duration: Scalars["Int"];
  modules?: Maybe<Array<Maybe<InOperation>>>;
  number_of_users: Scalars["Int"];
  title: Scalars["String"];
};

export type PackageInput = {
  active: Scalars["Boolean"];
  compare_at?: InputMaybe<Scalars["Float"]>;
  cost: Scalars["Float"];
  description: Scalars["String"];
  discount: Scalars["Float"];
  discount_type: DiscountType;
  duration: Scalars["Int"];
  modules: Array<IntModule>;
  number_of_users: Scalars["Int"];
  title: Scalars["String"];
};

export type Park = {
  __typename?: "Park";
  GPS: Scalars["String"];
  additionalDetails?: Maybe<AdditionalDetails>;
  address: Scalars["String"];
  city: Scalars["String"];
  logo: Scalars["String"];
  name: Scalars["String"];
  state: Scalars["String"];
};

export type Phone = {
  __typename?: "Phone";
  code: Scalars["String"];
  phoneNo: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  dogs: Array<Dog>;
  findAllPackages: Array<Package>;
  findPackageById: Package;
  findRelatingUsers: Array<FindRelatingUsersResponse>;
  findRole: Array<Role>;
  findRolesByUserId: Array<Role>;
  operations: Array<Operation>;
  userById?: Maybe<User>;
  users: Array<User>;
};

export type QueryFindPackageByIdArgs = {
  PackageId: Scalars["ID"];
};

export type QueryFindRelatingUsersArgs = {
  id: Scalars["ID"];
};

export type QueryFindRolesByUserIdArgs = {
  id: Scalars["ID"];
};

export type QueryUserByIdArgs = {
  id: Scalars["String"];
};

export type ResetPasswordInput = {
  email: Scalars["String"];
  new_password: Scalars["String"];
};

export type Role = {
  __typename?: "Role";
  _id?: Maybe<Scalars["ID"]>;
  active: Scalars["Boolean"];
  modules?: Maybe<Array<Maybe<InOperation>>>;
  name: Scalars["String"];
  operations?: Maybe<Array<Maybe<InOperation>>>;
  user_id: Scalars["ID"];
};

export type RoleInput = {
  active: Scalars["Boolean"];
  modules?: InputMaybe<Array<InputMaybe<IntModule>>>;
  name: Scalars["String"];
  operations?: InputMaybe<Array<InputMaybe<IntOperation>>>;
  user_id: Scalars["ID"];
};

export type UpdatePackageInput = {
  _id: Scalars["String"];
  active: Scalars["Boolean"];
  compare_at?: InputMaybe<Scalars["Float"]>;
  cost: Scalars["Float"];
  description: Scalars["String"];
  discount: Scalars["Float"];
  discount_type: DiscountType;
  duration: Scalars["Int"];
  modules: Array<IntModule>;
  number_of_users: Scalars["Int"];
  title: Scalars["String"];
};

export type User = {
  __typename?: "User";
  _id: Scalars["String"];
  active: Scalars["Boolean"];
  admin: Scalars["Boolean"];
  company?: Maybe<Company>;
  email: Scalars["String"];
  first_name: Scalars["String"];
  last_name: Scalars["String"];
  modules?: Maybe<Array<Maybe<InOperation>>>;
  operations?: Maybe<Array<Maybe<InOperation>>>;
  package?: Maybe<Array<Maybe<Scalars["String"]>>>;
  password: Scalars["String"];
  phone?: Maybe<Phone>;
  photo_url?: Maybe<Scalars["String"]>;
  rec_email: Scalars["String"];
  role?: Maybe<Role>;
  scopes?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type VerifyOtpInput = {
  otp: Scalars["Int"];
};

export type AddUserAdminMutationVariables = Exact<{
  signupInput: InputUser;
}>;

export type AddUserAdminMutation = {
  __typename?: "Mutation";
  addUserAdmin?: {
    __typename?: "User";
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    admin: boolean;
    active: boolean;
  } | null;
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;

export type LoginMutation = { __typename?: "Mutation"; login?: string | null };

export type ForgetPasswordMutationVariables = Exact<{
  forgetPasswordInput: ForgetPasswordInput;
}>;

export type ForgetPasswordMutation = {
  __typename?: "Mutation";
  forgetPassword?: string | null;
};

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;

export type ResetPasswordMutation = {
  __typename?: "Mutation";
  resetPassword?: string | null;
};

export type VerifyOtpMutationVariables = Exact<{
  verifyOtpInput: VerifyOtpInput;
}>;

export type VerifyOtpMutation = {
  __typename?: "Mutation";
  verifyOtp?: string | null;
};

export type AddPackageMutationVariables = Exact<{
  packageInput: PackageInput;
}>;

export type AddPackageMutation = {
  __typename?: "Mutation";
  addPackage: {
    __typename?: "Package";
    _id?: string | null;
    title: string;
    cost: number;
    compare_at?: number | null;
    active: boolean;
    discount: number;
    discount_type: DiscountType;
    modules?: Array<{
      __typename?: "InOperation";
      name: string;
      views?: Array<string | null> | null;
    } | null> | null;
  };
};

export type UpdatePackageMutationVariables = Exact<{
  updatePackageInput: UpdatePackageInput;
}>;

export type UpdatePackageMutation = {
  __typename?: "Mutation";
  updatePackage: {
    __typename?: "Package";
    _id?: string | null;
    title: string;
    cost: number;
    compare_at?: number | null;
    active: boolean;
    discount: number;
    discount_type: DiscountType;
    modules?: Array<{
      __typename?: "InOperation";
      name: string;
      views?: Array<string | null> | null;
    } | null> | null;
  };
};

export type AddRoleMutationVariables = Exact<{
  roleInput: RoleInput;
}>;

export type AddRoleMutation = {
  __typename?: "Mutation";
  addRole?: {
    __typename?: "Role";
    _id?: string | null;
    name: string;
    active: boolean;
    user_id: string;
  } | null;
};

export type GetDogsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDogsQuery = {
  __typename?: "Query";
  dogs: Array<{ __typename?: "Dog"; name: string }>;
};

export type FindAllPackagesQueryVariables = Exact<{ [key: string]: never }>;

export type FindAllPackagesQuery = {
  __typename?: "Query";
  findAllPackages: Array<{
    __typename?: "Package";
    _id?: string | null;
    title: string;
    cost: number;
    duration: number;
    compare_at?: number | null;
    active: boolean;
    discount: number;
    discount_type: DiscountType;
    modules?: Array<{
      __typename?: "InOperation";
      name: string;
      views?: Array<string | null> | null;
    } | null> | null;
  }>;
};

export type FindPackageByIdQueryVariables = Exact<{
  packageId: Scalars["ID"];
}>;

export type FindPackageByIdQuery = {
  __typename?: "Query";
  findPackageById: {
    __typename?: "Package";
    _id?: string | null;
    title: string;
    cost: number;
    duration: number;
    compare_at?: number | null;
    active: boolean;
    discount: number;
    discount_type: DiscountType;
    modules?: Array<{
      __typename?: "InOperation";
      name: string;
      views?: Array<string | null> | null;
    } | null> | null;
  };
};

export type FindRoleQueryVariables = Exact<{ [key: string]: never }>;

export type FindRoleQuery = {
  __typename?: "Query";
  findRole: Array<{
    __typename?: "Role";
    name: string;
    active: boolean;
    user_id: string;
    _id?: string | null;
    modules?: Array<{
      __typename?: "InOperation";
      name: string;
      views?: Array<string | null> | null;
    } | null> | null;
    operations?: Array<{
      __typename?: "InOperation";
      name: string;
      views?: Array<string | null> | null;
    } | null> | null;
  }>;
};

export type FindRolesByUserIdQueryVariables = Exact<{
  findRolesByUserIdId: Scalars["ID"];
}>;

export type FindRolesByUserIdQuery = {
  __typename?: "Query";
  findRolesByUserId: Array<{
    __typename?: "Role";
    _id?: string | null;
    name: string;
  }>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "User";
    first_name: string;
    last_name: string;
    email: string;
    rec_email: string;
    photo_url?: string | null;
    scopes?: Array<string | null> | null;
    admin: boolean;
    active: boolean;
    phone?: { __typename?: "Phone"; code: string; phoneNo: string } | null;
  }>;
};

export type UserByIdQueryVariables = Exact<{
  userByIdId: Scalars["String"];
}>;

export type UserByIdQuery = {
  __typename?: "Query";
  userById?: {
    __typename?: "User";
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    rec_email: string;
    photo_url?: string | null;
    scopes?: Array<string | null> | null;
    password: string;
    admin: boolean;
    active: boolean;
    operations?: Array<{
      __typename?: "InOperation";
      name: string;
      views?: Array<string | null> | null;
    } | null> | null;
    modules?: Array<{
      __typename?: "InOperation";
      name: string;
      views?: Array<string | null> | null;
    } | null> | null;
    role?: {
      __typename?: "Role";
      _id?: string | null;
      name: string;
      active: boolean;
      user_id: string;
    } | null;
  } | null;
};

export type FindRelatingUsersQueryVariables = Exact<{
  findRelatingUsersId: Scalars["ID"];
}>;

export type FindRelatingUsersQuery = {
  __typename?: "Query";
  findRelatingUsers: Array<{
    __typename?: "FindRelatingUsersResponse";
    _id?: string | null;
    name?: string | null;
    role?: string | null;
    active?: string | null;
    createdOn?: any | null;
    action?: {
      __typename?: "ActionType";
      edit?: boolean | null;
      view?: boolean | null;
      delete?: boolean | null;
    } | null;
  }>;
};

export const AddUserAdminDocument = gql`
  mutation AddUserAdmin($signupInput: InputUser!) {
    addUserAdmin(signupInput: $signupInput) {
      _id
      first_name
      last_name
      email
      admin
      active
    }
  }
`;
export const LoginDocument = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput)
  }
`;
export const ForgetPasswordDocument = gql`
  mutation forgetPassword($forgetPasswordInput: ForgetPasswordInput!) {
    forgetPassword(forgetPasswordInput: $forgetPasswordInput)
  }
`;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($resetPasswordInput: ResetPasswordInput!) {
    resetPassword(resetPasswordInput: $resetPasswordInput)
  }
`;
export const VerifyOtpDocument = gql`
  mutation VerifyOtp($verifyOtpInput: VerifyOTPInput!) {
    verifyOtp(verifyOtpInput: $verifyOtpInput)
  }
`;
export const AddPackageDocument = gql`
  mutation AddPackage($packageInput: PackageInput!) {
    addPackage(packageInput: $packageInput) {
      _id
      title
      modules {
        name
        views
      }
      cost
      compare_at
      active
      discount
      discount_type
    }
  }
`;
export const UpdatePackageDocument = gql`
  mutation UpdatePackage($updatePackageInput: UpdatePackageInput!) {
    updatePackage(updatePackageInput: $updatePackageInput) {
      _id
      title
      modules {
        name
        views
      }
      cost
      compare_at
      active
      discount
      discount_type
    }
  }
`;
export const AddRoleDocument = gql`
  mutation AddRole($roleInput: RoleInput!) {
    addRole(roleInput: $roleInput) {
      _id
      name
      active
      user_id
    }
  }
`;
export const GetDogsDocument = gql`
  query getDogs {
    dogs {
      name
    }
  }
`;
export const FindAllPackagesDocument = gql`
  query FindAllPackages {
    findAllPackages {
      _id
      title
      modules {
        name
        views
      }
      cost
      duration
      compare_at
      active
      discount
      discount_type
    }
  }
`;
export const FindPackageByIdDocument = gql`
  query FindPackageById($packageId: ID!) {
    findPackageById(PackageId: $packageId) {
      _id
      title
      modules {
        name
        views
      }
      cost
      duration
      compare_at
      active
      discount
      discount_type
    }
  }
`;
export const FindRoleDocument = gql`
  query FindRole {
    findRole {
      name
      active
      user_id
      _id
      modules {
        name
        views
      }
      operations {
        name
        views
      }
    }
  }
`;
export const FindRolesByUserIdDocument = gql`
  query FindRolesByUserId($findRolesByUserIdId: ID!) {
    findRolesByUserId(id: $findRolesByUserIdId) {
      _id
      name
    }
  }
`;
export const UsersDocument = gql`
  query users {
    users {
      first_name
      last_name
      email
      rec_email
      photo_url
      phone {
        code
        phoneNo
      }
      scopes
      admin
      active
    }
  }
`;
export const UserByIdDocument = gql`
  query UserById($userByIdId: String!) {
    userById(id: $userByIdId) {
      _id
      first_name
      last_name
      email
      rec_email
      photo_url
      scopes
      operations {
        name
        views
      }
      modules {
        name
        views
      }
      role {
        _id
        name
        active
        user_id
      }
      password
      admin
      active
    }
  }
`;
export const FindRelatingUsersDocument = gql`
  query FindRelatingUsers($findRelatingUsersId: ID!) {
    findRelatingUsers(id: $findRelatingUsersId) {
      _id
      name
      role
      action {
        edit
        view
        delete
      }
      active
      createdOn
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    AddUserAdmin(
      variables: AddUserAdminMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<AddUserAdminMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddUserAdminMutation>(
            AddUserAdminDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "AddUserAdmin",
        "mutation"
      );
    },
    Login(
      variables: LoginMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<LoginMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoginMutation>(LoginDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Login",
        "mutation"
      );
    },
    forgetPassword(
      variables: ForgetPasswordMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ForgetPasswordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ForgetPasswordMutation>(
            ForgetPasswordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "forgetPassword",
        "mutation"
      );
    },
    ResetPassword(
      variables: ResetPasswordMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ResetPasswordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ResetPasswordMutation>(
            ResetPasswordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "ResetPassword",
        "mutation"
      );
    },
    VerifyOtp(
      variables: VerifyOtpMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<VerifyOtpMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<VerifyOtpMutation>(VerifyOtpDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "VerifyOtp",
        "mutation"
      );
    },
    AddPackage(
      variables: AddPackageMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<AddPackageMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddPackageMutation>(AddPackageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "AddPackage",
        "mutation"
      );
    },
    UpdatePackage(
      variables: UpdatePackageMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdatePackageMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdatePackageMutation>(
            UpdatePackageDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "UpdatePackage",
        "mutation"
      );
    },
    AddRole(
      variables: AddRoleMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<AddRoleMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddRoleMutation>(AddRoleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "AddRole",
        "mutation"
      );
    },
    getDogs(
      variables?: GetDogsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetDogsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetDogsQuery>(GetDogsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getDogs",
        "query"
      );
    },
    FindAllPackages(
      variables?: FindAllPackagesQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FindAllPackagesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FindAllPackagesQuery>(
            FindAllPackagesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "FindAllPackages",
        "query"
      );
    },
    FindPackageById(
      variables: FindPackageByIdQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FindPackageByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FindPackageByIdQuery>(
            FindPackageByIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "FindPackageById",
        "query"
      );
    },
    FindRole(
      variables?: FindRoleQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FindRoleQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FindRoleQuery>(FindRoleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "FindRole",
        "query"
      );
    },
    FindRolesByUserId(
      variables: FindRolesByUserIdQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FindRolesByUserIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FindRolesByUserIdQuery>(
            FindRolesByUserIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "FindRolesByUserId",
        "query"
      );
    },
    users(
      variables?: UsersQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UsersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UsersQuery>(UsersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "users",
        "query"
      );
    },
    UserById(
      variables: UserByIdQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UserByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UserByIdQuery>(UserByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "UserById",
        "query"
      );
    },
    FindRelatingUsers(
      variables: FindRelatingUsersQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FindRelatingUsersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FindRelatingUsersQuery>(
            FindRelatingUsersDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "FindRelatingUsers",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
