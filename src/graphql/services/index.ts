import { AuthService } from "./auth.service";
import { ModuleDBService } from "./module.service";
import { OperationDBService } from "./operations.service";
import { PackageDBService } from "./package.service";
import { RoleDBService } from "./role.service";
import { UserDBService } from "./user.service";

const Service = {
  auth: new AuthService(),
  role: new RoleDBService(),
  user: new UserDBService(),
  module: new ModuleDBService(),
  package: new PackageDBService(),
  operation: new OperationDBService(),
};

export default Service;
