/* eslint-disable */
import { ReportTemplates } from "./operations";

export class ReportTemplate implements GenericModule {
  conf: IModuleConfiguration = {
    unit: "USAGE",
    id: "report-templates",
    name: ReportTemplate.name,
    permissions: ["Write", "Read"],
    require_approval: false,
    isRoute: true,
    widget: false,
  };

  getConfiguration(): IModuleConfiguration {
    return this.conf;
  }

  widget() {
    throw new Error("Method not implemented.");
  }

  upgrade(user: IUser, amount: number) {
    throw new Error("Method not implemented." + user + amount);
  }

  downgrade(user: IUser, amount: number) {
    throw new Error("Method not implemented." + user + amount);
  }

  getCurrentStatus(user: IUser) {
    throw new Error("Method not implemented." + user);
  }

  delete(user: IUser) {
    throw new Error("Method not implemented." + user);
  }

  intall(user: IUser, amount: number) {
    // check if user already have this installed use: getCurrentStatus(user)
    throw new Error("Method not implemented." + user + amount);
  }

  getModuleSubPages(): IModulePath[] {
    return [];
  }

  getMethods(): IModuleOperationsType {
    const method: IModuleOperationsType = {
      "report-templates.hello_world": {
        generator: ReportTemplates.helloWorld,
        permissions: ["Read", "Write"],
      },
    };

    return method;
  }

  getViews(): IModuleViewsType {
    const views: IModuleViewsType = {
      "report-templates": {
        view: import("./main"),
        permissions: ["Read"],
      },
    };

    return views;
  }
}
