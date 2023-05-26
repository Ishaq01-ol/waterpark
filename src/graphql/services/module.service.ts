/* eslint-disable */
import _ from "../../models/user_package_modules.model";

export class ModuleDBService {
  create = (payload: IModule): Promise<any> => {
    return _.create(payload) as unknown as Promise<IModule>;
  };
  find = async (): Promise<any> => {
    return _.find() as unknown as Promise<IModule[]>;
  };
}
