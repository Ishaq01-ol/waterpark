/* eslint-disable */
import _ from "../../models/package.model";

export class PackageDBService {
  create = async (payload: any): Promise<IPackage> => {
    return await _.create(payload) as unknown as Promise<IPackage> as any;
  };

  find = async (): Promise<IPackage[]> => {
    return await _.find() as unknown as Promise<IPackage[]>;
  };

  findById = async (id: string): Promise<IPackage> => {
    return await _.findOne({ _id: id }) as unknown as Promise<IPackage>;
  };

  update = async ({ _id, ...payload }: IPackage): Promise<IPackage> => {
    return await _.updateOne({ _id }, { $set: { ...payload } }) as unknown as Promise<IPackage>
  };
}
