/* eslint-disable */
import { Types } from "mongoose";
import _ from "../../models/user.model";

export class UserDBService {

  find = async (): Promise<[IUser]> => {
    return await _.find() as unknown as Promise<[IUser]>
  };

  findById = async (id: string): Promise<IUser> => {
    return  await _.findById(new Types.ObjectId(id)).populate('role') as unknown as Promise<IUser>
    

  };

  manageUserListing = async (id: Types.ObjectId): Promise<[IFindRelatingUsersResponse]> => {
    const loggedUser = await _.findById(id) as unknown as IUser
    if (loggedUser.admin || !loggedUser?.company) {
      const users = await _.aggregate([
        {
          $match: {
            _id: { $ne: loggedUser._id },
            // package: { $exists: true }
          }
        },
        {
          $lookup: {
            from: "roles",  // Assuming the collection name for roles is "roles"
            localField: "role",
            foreignField: "_id",
            as: "role"
          }
        },
        {
          $unwind: '$role'
        },
        {
          $project: {
            _id: 1,
            name: { $concat: ["$first_name", " ", "$last_name"] },
            role: "$role.name",
            active: {
              $cond: { if: { $eq: ["$active", true] }, then: "active", else: "Inactive" }
            },
            createdOn: "$createdAt",
            action: {
              $literal: {
                edit: true,
                delete: true,
                view: true,
              }
            }
          }
        }
      ])

      return users as unknown as Promise<[IFindRelatingUsersResponse]>
    }
    else if (loggedUser?.company) { //if company do not exists
      const users = await _.aggregate([
        {
          $match: {
            _id: { $ne: loggedUser._id },
            package: { $exists: true },
            // from relative company if company.subadmin is false
            //else for subadmin, bring from all parks of subadmin 
          }
        },
        {
          $lookup: {
            from: "roles",  // Assuming the collection name for roles is "roles"
            localField: "role",
            foreignField: "_id",
            as: "role"
          }
        },
        {
          $unwind: '$role'
        },
        {
          $project: {
            _id: 1,
            name: { $concat: ["$first_name", " ", "$last_name"] },
            role: "$role.name",
            active: {
              $cond: { if: { $eq: ["$active", true] }, then: "active", else: "Inactive" }
            },
            createdOn: "$createdAt",
            action: {
              $literal: {
                edit: true,
                delete: true,
                view: true,
              }
            }
          }
        }
      ])
      return users as unknown as Promise<[IFindRelatingUsersResponse]>
    }
    //ruff
    throw new Error("Users not found")
  };

}