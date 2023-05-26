/* eslint-disable */
// @ts-nocheck
import * as Modules from '../modules';
import * as Operations from '../operations';
import * as jwt from "jsonwebtoken";
import { EModule, EOperation } from '@/pages/api/graphql';


interface IUser {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  rec_email?: string;
  photo_url?: string;
  phone?: IPhone;
  scopes?: string[];
  operations?: IOperation[];
  package?: IPackage;
  modules?: IModule[];
  role?: IRole;
  admin?: boolean;
  active?: boolean;
}
export class System implements GenericSystem {

  modules: ISystemModules;
  operations: ISystemModules;

  views: IModuleViewsType = {};
  methods: IModuleMethods = {};

  static instance: any;

  public static getInstance(user: IUser | undefined): System {
    this.instance = new System();
    return this.instance.init(user);
  }

  init(user: IUser): GenericSystem {
    let _modules = [
      new Modules.TaskOperation(),
      new Modules.UploaderModule(),
      new Modules.ReportTemplate(),
      new Modules.WebsiteContactFormOperation(),
      new Modules.Email_and_NotificationsOperation(),
    ].filter((md) =>
      user.admin === true ? md : user.modules?.filter((module) => {
        return module.name === md.getConfiguration().id
      }).length > 0
    );

    let _operations = [
      new Operations.DashboardOperation(),
      new Operations.SubAdminUsersOperation,
      new Operations.ManageUsersOperation,
      new Operations.PaymentsOperation,
      new Operations.TrackSubadminPaymentRecordsOperation,
      new Operations.ChangePasswordOperation,
      new Operations.UpdateEmailOperation,
      new Operations.PrivacyPolicyOperation,
      new Operations.EulaOperation,
      new Operations.AboutUsOperation,
      new Operations.FaqOperation,
    ].filter((op) => {
      return user.admin === true ? op : user.operations?.filter((operation) => {
        return operation.name === op.getConfiguration().id
      }).length > 0;
    }
    );

    _operations.map((_) => {
      const filteredViews = Object.fromEntries(Object.entries(_.getViews()).filter(([key, value]) => {
        return user.operations.filter((module) => {
          return module.name === _.getConfiguration().id && module.views.includes(key);
        }).length > 0;
      }))
      const views = user.admin ? _.getViews() : filteredViews
      this.operations = {
        ...this.operations,
        [_.getConfiguration().id]: {
          module: _,
          views: views,
          methods: _.getMethods(),
        },
      };

      this.views = { ...this.views, ...views };
      this.methods = { ...this.methods, ..._.getMethods() };
    });

    _modules.map((_) => {
      const filteredViews = Object.fromEntries(Object.entries(_.getViews()).filter(([key, value]) => {
        return user.modules.filter((module) => {
          return module.name === _.getConfiguration().id && module.views.includes(key);
        }).length > 0;
      }))
      const views = user.admin ? _.getViews() : filteredViews
      this.modules = {
        ...this.modules,
        [_.getConfiguration().id]: {
          module: _,
          views: views,
          methods: _.getMethods(),
        },
      };
      this.views = { ...this.views, ...views };
      this.methods = { ...this.methods, ..._.getMethods() };
    });

    return this;
  }

  // this will invoke method of a module
  invoke<T, P>(value: T): Promise<P> {
    throw new Error('Method not implemented.');
  }

  // this will invoke method of a operation
  call<T, P>(value: T): Promise<P> {
    throw new Error('Method not implemented.');
  }

  async getView(id: EModuleViews | EOperationViews) {
    if (this.views[id]) {
      return this.views[id]?.view
    } else {
      return import('./not_available');

    }

  }
}
