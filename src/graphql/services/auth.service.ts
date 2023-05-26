/* eslint-disable */
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import moment from 'moment-timezone';
import * as jwt from "jsonwebtoken";
import getConfig from "next/config";
import _ from "../../models/user.model";
import Otp from "../../models/otp.model";

moment.tz.setDefault('Asia/Karachi');

export class AuthService {

  create = async (payload: any): Promise<any> => {
    // const getPermissions = () => {
    //   return new Promise(async (resolve, reject) => {
    //     const aaa = payload.operations.map(async (_) => {
    //       const perm = await operation.findById(_.ref);
    //       if (!perm) {
    //         reject("something went wrong");
    //         throw new Error("something went wrong");
    //       }
    //       return { ..._, path: perm?.path, icon: perm?.icon };
    //     });
    //     const results = await Promise.all(aaa);
    //     resolve(results[0]);
    //   });
    // };

    // const operations = await getPermissions();

    // if user is not admin:true
    // we must have to check permissions
    // we must have to check modules and their permissions
    // then we can allow user to create another with same or less permissions what already owned.
    
    return await _.create(payload) as unknown as Promise<IUser>;
  };

  createSuperAdmin = async (payload: any): Promise<IUser> => {
    console.log(payload);
    return await _.create(payload) as unknown as Promise<IUser>;
  };


  login = async (payload: { email: string, password: string }): Promise<String> => {
    const { serverRuntimeConfig } = getConfig();

    const user = await _.findOne({ email: payload.email })
    if (user) {
      const valid = await bcrypt.compare(payload.password, user.password);

      if (valid) {
        if (!user.active) {
          throw new Error('Inactive User')
        }
        return jwt.sign(
          { id: user._id },
          serverRuntimeConfig.JWT_SECRET,
          {
            expiresIn: "24h",
          }
        )
      }
      throw new Error('Invalid Credentials');
    }
    throw new Error('No User Found');
  };

  forgetPassword = async (payload: { email: string }): Promise<String> => {
    const { serverRuntimeConfig } = getConfig();
    try {
      const { email } = payload;
      const user = await _.findOne({ email: email }) as unknown as IUser
      if (!user) {
        throw new Error('No user Found');
      }

      const OTP = Math.floor(100000 + Math.random() * 900000);
      let emailTo = email.replace(/\s/g, "");
      const transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
          user: serverRuntimeConfig.NOTIFICATION_EMAIL,
          pass: serverRuntimeConfig.NOTIFICATION_PASS,
        },
      });

      const options = {
        from: `"Example Team" ${serverRuntimeConfig.NOTIFICATION_EMAIL}`,
        to: emailTo,
        subject: "OTP - Verification",
        html: `<div style="background-color: #1a1a1a; color: #fff; font-family: 'Roboto', sans-serif; font-size: 16px; padding: 20px;">
          <h2 style="font-size: 24px; margin-bottom: 20px;">Your OTP code is:</h2>
          <p style="font-size: 32px; font-weight: bold; margin-bottom: 40px;">${OTP}</p>
          <p style="margin-bottom: 0;">Please use this code to complete your verification process.</p>
          <p style="margin-bottom: 0;">Note: This code is valid for one-time use only and will expire in 10 minutes.</p>
        </div>`,
      };

      transporter.sendMail(options, async (err) => {
        if (err) {
          throw new Error(err.message);
        } else {
          const saveOtp = new Otp({ otp: OTP, validity: moment().add(10, 'minutes').toDate() })

          await saveOtp.save()
            .catch(err => {
              throw new Error(err.message);
            });
        }
      })

      return 'An verification OTP-code is sent to your email check/verify it please.'
    } catch (e: any) {
      throw new Error(e.message)
    }
  }

  verifyOtp = async (payload: { otp: number }): Promise<String> => {
    const { otp } = payload;
    const otpFind = await Otp.findOne({ otp, validity: { $gte: moment().toDate() } }).catch(e => {
      throw new Error(e.message,);
    })
    if (!otpFind) {
      throw new Error("Invalid OTP")
    }

    const updated = await Otp.updateOne({ validity: moment().toDate() })
    if (!updated.matchedCount && !updated.modifiedCount) {
      throw new Error("Something went wrong")
    }
    return 'OTP verified successfully'
  }

  changePassword = async (payload: { email: string, new_password: string }): Promise<String> => {
    const saltRounds = 10;

    try {
      const { email, new_password } = payload;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) throw new Error(err.message);

        bcrypt.hash(new_password, salt, async (error, hash) => {
          if (error) throw new Error(error.message);
          const updated = await _.updateOne({
            email: email
          }, { password: hash }, { new: true },)

          if (!updated.matchedCount && !updated.modifiedCount) {
            throw new Error('Unable to update password');
          }
        });
      });

      return 'Password Updated Successfully'

    } catch (e: any) {
      throw new Error(e.message)
    }
  }
}