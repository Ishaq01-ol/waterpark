/* eslint-disable */
import { PaymentsOperations } from "./operations";

export class PaymentsOperation implements GenericOperation {
  conf: IOperationConfiguration = {
    id: "payments",
    name: PaymentsOperation.name,
    permissions: ["Read", "Write"],
    require_approval: false,
  };

  getConfiguration(): IOperationConfiguration {
    return this.conf;
  }

  getMethods(): IModuleOperationsType {
    const method: IModuleOperationsType = {
      "payments.hello_world": {
        generator: PaymentsOperations.helloWorld,
        permissions: ["Read", "Write"],
      },
    };

    return method;
  }

  // make sure to use import(path) for adding new view, so it only loads when required.
  getViews(): IModuleViewsType {
    const views: IModuleViewsType = {
      payments: {
        view: import("./payments/main"),
        permissions: ["Read"],
      },
      "payments.subscription": {
        view: import("./subscription_packages/main"),
        permissions: ["Read"],
      },
      // 'payments.subscription.add': {
      "subscription.add": {
        view: import("./subscription_packages/add"),
        permissions: ["Read", "Write"],
      },
      "subscription.edit": {
        view: import("./subscription_packages/add"),
        permissions: ["Read", "Write"],
      },
    };

    return views;
  }
}
