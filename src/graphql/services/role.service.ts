/* eslint-disable */
import { Types } from "mongoose";
import _ from "../../models/role.model";

export class RoleDBService {

  create = async (input: IRole): Promise<IRole> => {
    return await _.create(input) as unknown as Promise<IRole>
  };
  find = async (): Promise<[IRole]> => {
    return await _.find() as unknown as Promise<[IRole]>
  };
  findRolesByUserId = async (id: Types.ObjectId): Promise<[IRole]> => {
    return await _.find({ user_id: id, active: true }) as unknown as Promise<[IRole]>
  };
  manageRolesListing = async (id: Types.ObjectId): Promise<[IRole]> => {
    return await _.find({ user_id: id, active: true }) as unknown as Promise<[IRole]>
  };

}