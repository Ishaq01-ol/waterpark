interface IPageConfigurations {
  slug?: string;
  title?: string;
  actionText?: string;
  fields?: IField[];
}

type IField = {
  title: string;
  formName?: string;
  slug: string;
  placeHolder: string;
  key: string;
  secure: boolean | undefined;
  supportSecure?: boolean;
  toggleSecure?: () => void;
  type?: "email" | "password" | "text" | "otp";
};

type IPage =
  | "LOGIN"
  | "FORGET_PASSWORD"
  | "OTP"
  | "NEW_PASSWORD"
  | "ADD_SUB_ADMIN";
type IConfiguration = { [page in Page]: IPageConfigurations };

type IPhone = {
  _id?: string;
  phoneNo: string;
  code: string;
};

// type IOperation = {
//   _id: string;
//   path: string;
//   permissions: string[];
//   ref?: string;
//   sort: number;
//   title: string;
//   icon?: Icon;
//   isRoute: boolean;
// };

interface IPark {
  _id?: string;
  name: string;
  logo: string;
  address: string;
  city: string;
  state: string;
  GPS: string;
  additionalDetails: {};
}
interface ICompany {
  _id?: string;
  park: IPark;
  locations: [IPark];
  subAdmin: boolean;
}
interface IOperation {
  name: string;
  views: string[];
}

interface IModule {
  name: string;
  views: string[];
}

type IIcon = {
  _id: string;
  type: "ICON" | "SOURCE";
  src: string;
};

type IModuleUnit = "BANDWIDTH" | "USAGE" | "DAYS";

type IModuleConfiguration = {
  id: EModules;
  name: string;
  unit: IModuleUnit;
  require_approval: boolean;
  isRoute: boolean;
  permissions: string[];
  widget?: boolean;
};

// type IModule = {
//   _id: string;
//   name: string;
//   module: EModules;
//   ref?: string;
//   package?: string;
//   unit: IModuleUnit;
//   indicator: string;
//   used?: number;
//   available: number;
//   path: string;
//   created_at: string;
//   updated_at: string;
//   sort: number;
//   active: boolean;
//   require_approval?: boolean;
//   isRoute: boolean;
//   icon?: IIcon;
//   permissions: EPermissions[];
// };

type IDiscountType = "PERCENTAGE" | "FIXED";

interface IPackage {
  _id?: string;
  title: string;
  duration: number;
  modules: IFeatureType[];
  cost: number;
  compare_at: number;
  active: boolean;
  discount: number;
  discount_type: DiscountType;
  description: String!;
  number_of_users: Int!;
}

interface IRole {
  _id?: string;
  name: string;
  active: boolean;
  modules: IFeatureType[];
  operations: IFeatureType[];
  user_id?: string;
}

interface IFeatureType {
  name: string;
  views: string[];
}

interface IUser {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  rec_email?: string;
  photo_url?: string;
  phone: IPhone;
  scopes: string[];
  operations: IFeatureType[];
  package: IPackage;
  modules: IFeatureType[];
  role: IRole;
  company: ICompany;
  password: string;
  admin: boolean;
  active: boolean;
}

interface IModuleMethods {
  [key: EModuleMethods]: <T>(arg: Type) => Promise<T>;
}

type IModulePath = {
  path: string;
  title: string;
  icon: IIcon;
};

class Singleton {
  static instance: typeof this;

  public static async getInstance(): typeof this;
}

abstract interface GenericSystem extends Singleton {
  modules: ISystemModules;
  operations: ISystemModules;
  views: IModuleViewsType;
  methods: IModuleMethods;

  init(): GenericSystem;
  invoke<T, P>(value: T): Promise<P>;
  call<T, P>(value: T): Promise<P>;
  getView(id: EModuleViews | EOperationViews): ReactNode;
}

abstract interface GenericModule {
  static getConfiguration(): IModuleConfiguration;

  public intall(user: IUser, amount: number);
  public delete(user: IUser);
  public upgrade(user: IUser, amount: number);
  public downgrade(user: IUser, amount: number);
  public getCurrentStatus(user: IUser);
  public getMethods(): IModuleOperationsType;
  public getModuleSubPages(): IModulePath[];
  public widget(): any;
  public getViews(): IModuleViewsType;
}

type ModuleViewPermissions = Array<{
  name: EModules;
  views: Array<EModuleViews>;
}>;
type OperationViewPermissions = Array<{
  name: EOperations;
  views: Array<EOperationViews>;
}>;

// add here before adding any module and method
type EModules =
  | "email-&-notifications"
  | "report-templates"
  | "tasks"
  | "uploader"
  | "website-contact-form";
type EModuleViews =
  | "email-&-notifications"
  | "email-&-notifications.add"
  | "report-templates"
  | "tasks"
  | "tasks.add"
  | "tasks.track"
  | "tasks.details"
  | "uploader"
  | "website-contact-form"
  | "website-contact-form.details";
type EOperations =
  | "manage-admin"
  | "password-change"
  | "dashboard"
  | "about-us"
  | "eula"
  | "faq"
  | "privacy-policy"
  | "payments"
  | "report-templates"
  | "subadmins"
  | "track-subadmin-payment-record"
  | "update-email";
// views to register
type EOperationViews =
  | "admin.manage-roles"
  | "manage-roles.add"
  | "admin.manage-users"
  | "manage-users.add"
  | "password-change"
  | "dashboard"
  | "about-us.edit"
  | "eula.edit"
  | "faq.edit"
  | "privacy-policy.edit"
  | "payments"
  | "payments.subscription"
  | "subscription.add"
  | "subscription.edit"
  | "report-template"
  | "report-template.edit"
  | "subadmins"
  | "subadmins.add"
  | "subadmins.view"
  | "track-subadmin-payment-record"
  | "payment-records.track"
  | "track.details"
  | "email.update";
// views to register

// methods to register
type EModuleMethods =
  | "tasks.hello_world"
  | "uploader.hello_world"
  | "website-contact-form.hello_world"
  | "email-&-notifications.hello_world"
  | "report-templates.hello_world";
type EOperationMethods =
  | "manage-admin.hello_world"
  | "password.change.hello_world"
  | "dashboard.hello_world"
  | "about-us.hello_world"
  | "eula.hello_world"
  | "faq.hello_world"
  | "privacy-policy.hello_world"
  | "payments.hello_world"
  | "report-template.hello_world"
  | "track-subadmin-payment-record.hello_world"
  | "subadmins.hello_world"
  | "update-email.hello_world";

// methods to register

// add here before adding any module and method

type EPermissions = "Read" | "Write";

type IModuleView = {
  view: unknown;
  permissions: EPermissions[];
};

type IModuleViewsType = {
  [key in EModuleViews | EOperationViews]?: IModuleView;
};

type IModuleOperationsType = {
  [key in EOperationMethods | EModuleMethods]?: {
    generator: <T>(arg: Type) => Promise<T>;
    permissions: EPermissions[];
  };
};

// interface ModuleMethods{
//   [key:]:(params:T)=>Promise<T>;
// }

// Graphql Inputs And ENUMs
enum DiscountType {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
}
interface IPhoneInput {
  code: string;
  phoneNo: string;
}
interface IFindRelatingUsersResponse {
  name: string;
  role: string;
  action: {
    edit: boolean;
    view: boolean;
    delete: boolean;
  };
  active: string;
  createdOn: Date;
}
interface ILoginInput {
  email: string;
  password: string;
  rememberMe: boolean;
}
interface IForgetPasswordInput {
  email: string;
}
interface IVerifyOtpInput {
  otp: number;
}
interface IResetPasswordInput {
  email: string;
  new_password: string;
}
interface IUserInput {
  _id?: any;
  first_name: string;
  last_name: string;
  email: string;
  rec_email?: string;
  photo_url?: string;
  phone?: IPhoneInput;
  active?: boolean;
  scopes?: string[];
  operations?: EOperations[];
  modules?: EModules[];
  package?: IPackage;
  admin?: boolean;
  role?: string;
  password: string;
}
interface PackageInput {
  title: string;
  modules: IFeatureType[];
  cost: number;
  compare_at: number;
  active: boolean;
  discount: number;
  discount_type: DiscountType;
}
interface UpdatePackageInput {
  _id?: string;
  title: string;
  modules: IFeatureType[];
  cost: number;
  compare_at: number;
  active: boolean;
  discount: number;
  discount_type: DiscountType;
}
interface IRoleInput {
  _id?: string;
  name: string;
  active: boolean;
  operations: IFeatureType[];
  modules: IFeatureType[];
  user_id: string;
}
//

type ISystemModules = {
  [key in EModules & EOperations & EOperationViews & EOperationMethods]: [
    module: GenericModule,
    views: IModuleViewsType,
    methods: IModuleMethods
  ];
};

type IOperationConfiguration = {
  id: EOperations;
  name: string;
  permissions: [EPermissions, EPermissions];
  require_approval?: boolean;
};
interface IAlertSuccessData {
  status: boolean;
  title: string;
  description: string;
}

abstract interface GenericOperation {
  static getConfiguration(): IOperationConfiguration;
  public getMethods(): IModuleOperationsType;
  public getViews(): IModuleViewsType;
}
