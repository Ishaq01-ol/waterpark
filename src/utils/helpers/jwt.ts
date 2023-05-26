import type { JwtPayload } from "jsonwebtoken";
import { verify } from "jsonwebtoken";

export const verifyJWT = (jwt: string): JwtPayload & IUser => {
  return verify(jwt, process.env.JWT_SECRET || "") as JwtPayload & IUser;
};

// export const getUser = async (jwt: string) => {
//   const decodedUser:any = verify(jwt, process.env.JWT_SECRET || "");
//   if (decodedUser) {
//     const user = await userModel.findOne({ _id: decodedUser['_id'] });
//     if (user)
//       return user;
//   }
//   return null
// };
