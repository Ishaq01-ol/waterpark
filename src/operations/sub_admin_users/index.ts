import { SubAdminUsersOperations } from "./operations";

export class SubAdminUsersOperation implements GenericOperation {
  conf: IOperationConfiguration = {
    id: "dashboard",
    name: SubAdminUsersOperation.name,
    permissions: ["Read", "Write"],
    require_approval: false,
  };

  getConfiguration(): IOperationConfiguration {
    return this.conf;
  }

  // eslint-disable-next-line class-methods-use-this
  getMethods(): IModuleOperationsType {
    const method: IModuleOperationsType = {
      "dashboard.hello_world": {
        generator: SubAdminUsersOperations.helloWorld,
        permissions: ["Read", "Write"],
      },
    };

    return method;
  }

  // make sure to use import(path) for adding new view, so it only loads when required.
  // eslint-disable-next-line class-methods-use-this
  getViews(): IModuleViewsType {
    const views: IModuleViewsType = {
      subadmins: {
        view: import("./main"),
        permissions: ["Read"],
      },
      "subadmins.add": {
        view: import("./add"),
        permissions: ["Read", "Write"],
      },
      "subadmins.view": {
        view: import("./view"),
        permissions: ["Read"],
      },
    };

    return views;
  }
}
