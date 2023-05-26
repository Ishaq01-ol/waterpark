export const typeDefs = `
  #ENUMS---
  enum EUnits {
    Kilogram
    Pound
    }
  enum EPermission {
    Read
    Write
  }
  enum EIconType {
    Icon
    Source
  }
  enum DiscountType {
    FIXED
    PERCENTAGE
  }
  scalar Date

  input InputPhone {
    code: String!
    phoneNo: String!
  }
  input InputIcon {
    type: EIconType!
    src: String!
  }

  input IntModule {
    name: String!
    views: [String]
  }
  
  input IntOperation {
    name: String!
    views: [String]
  }
  
  #Park---
  type Park {
    name: String!
    logo: String!
    address: String!
    city: String!
    state: String!
    GPS: String!
    additionalDetails: AdditionalDetails
  }
  input InputPark {
    name: String!
    logo: String!
    address: String!
    city: String!
    state: String!
    GPS: String!
    additionalDetails: InputAdditionalDetails
  }
  input InputAdditionalDetails {
    name: String
  }
  type AdditionalDetails {
    name: String
  }
  
  #Auth---
  input InputUser {
    first_name: String!
    last_name: String!
    email: String!
    rec_email: String
    photo_url: String
    phone: InputPhone
    active: Boolean
    scopes: [String]
    role: ID
    company: CompanyInput
    operations: [IntOperation]
    modules: [IntModule]
    password: String!
  }

  input CompanyInput {
    park: ID
    locations: [ID]
    subAdmin: Boolean
  }
  type Company {
    park: ID
    locations: [ID]
    subAdmin: Boolean
  }

  input LoginInput {
    email: String!
    password: String!
    rememberMe: Boolean!
  }

  input ForgetPasswordInput {
    email: String!
  }

  input VerifyOTPInput {
    otp: Int!
  }

  input ResetPasswordInput {
    email: String!
    new_password: String!
  }

  type Phone {
    phoneNo: String!
    code: String!
  }

  type User {
    _id: String!
    first_name: String!
    last_name: String!
    email: String!
    rec_email: String!
    photo_url: String
    phone: Phone
    scopes: [String]
    package: [String]
    operations: [InOperation]
    modules: [InOperation]
    role: Role
    company: Company
    password: String!
    admin: Boolean!
    active: Boolean!
  }
  
  type ActionType {
    edit: Boolean
    view: Boolean
    delete: Boolean
  }

  type FindRelatingUsersResponse {
    _id: ID
    name: String,
    role: String,
    createdOn: Date,
    active: String,
    action: ActionType,
  }
  
  type InOperation {
    name: String!
    views: [String]
  }  

  #Dogs----
  type Dog {
    name: String!
  }

  #Operation---
  type Icon {
    _id: ID
    type: EIconType!
    src: String!
    }
    type Operation {
    _id: ID
    path: String!
    title: String!
    permissions: [EPermission!]!
    icon: Icon!
    }
    
    input InputOperation {
    path: String!
    title: String!
    permissions: [EPermission!]!
    icon: InputIcon!
    }
  
#Package---
input PackageInput {
  title: String!
  modules: [IntModule!]!
  duration: Int!
  cost: Float!
  compare_at: Float
  active: Boolean!
  discount: Float!
  discount_type: DiscountType!
  description: String!
  number_of_users: Int!
  }

input UpdatePackageInput {
  _id: String!
  title: String!
  modules: [IntModule!]!
  duration: Int!
  cost: Float!
  compare_at: Float
  active: Boolean!
  discount: Float!
  discount_type: DiscountType!
  description: String!
  number_of_users: Int!
  }

type Package {
  _id: ID
  title: String!
  modules: [InOperation]
  cost: Float!
  duration: Int!
  compare_at: Float
  active: Boolean!
  discount: Float!
  discount_type: DiscountType!
  description: String!
  number_of_users: Int!
}

#Roles---
input RoleInput {
  name: String!
  active: Boolean!
  operations: [IntOperation]
  modules: [IntModule]
  user_id: ID!
}
type Role {
  _id: ID
  name: String!
  active: Boolean!
  operations: [InOperation]
  modules: [InOperation]
  user_id: ID!
}

#----------------------
type Query {
  operations: [Operation!]!
    users: [User!]!
    userById(id: String!): User
    findRelatingUsers(id: ID!): [FindRelatingUsersResponse!]!
    
    findRole: [Role!]!
    findRolesByUserId(id: ID!): [Role!]!
    
    findAllPackages: [Package!]!
    findPackageById(PackageId: ID!): Package!
    
    dogs: [Dog!]!
  }
#----------------------
  type Mutation {
    addOperation(input: InputOperation!): Operation
    
    addUserAdmin(signupInput: InputUser!): User
    createSuperAdmin(createSuperAdminInput: InputUser!): User
    login(loginInput: LoginInput!): String
    forgetPassword(forgetPasswordInput: ForgetPasswordInput!): String
    verifyOtp(verifyOtpInput: VerifyOTPInput!): String
    resetPassword(resetPasswordInput: ResetPasswordInput!): String
    
    addPackage(packageInput: PackageInput!): Package!
    updatePackage(updatePackageInput: UpdatePackageInput!): Package!
    
     addRole(roleInput: RoleInput!): Role
  }
`;
