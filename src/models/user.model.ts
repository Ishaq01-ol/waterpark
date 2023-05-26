/* eslint-disable */

import * as bcrypt from "bcrypt";

import type { Model } from "mongoose";
import mongoose from "mongoose";
import { featureSchema } from "./features.model";
const saltRounds = 10;

export enum OperationEnum {
  ManageAdmin = "manage-admin",
  PasswordChange = "password.change",
  Dashboard = "dashboard",
  AboutUs = "about-us",
  Eula = "eula",
  Faq = "faq",
  PrivacyPolicy = "privacy-policy",
  Payments = "payments",
  ReportTemplates = "report-templates",
  Subadmin = "subadmins",
  TrackSubadminPaymentRecord = "track-subadmin-payment-record",
  UpdateEmail = "update-email",
}
export enum ModuleEnum {
  EmailAndNotifications = "email-&-notifications",
  ReportTemplates = "report-templates",
  Tasks = "tasks",
  Uploader = "uploader",
  WebsitContactForm = "website-contact-form",
}

const phoneSchema = new mongoose.Schema<IPhone>({
  code: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
});

const companySchema = new mongoose.Schema<ICompany>({
  locations: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parks",
      }
    ],
    required: false,
    default: []
  },
  park: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Parks",
    required: true,
  },
  subAdmin: {
    type: Boolean,
    required: true,
  },

});

let userSchema = new mongoose.Schema<IUser>(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    rec_email: {
      type: String,
      default: "",
      required: false,
    },
    photo_url: {
      type: String,
      default: ""
    },
    phone: {
      type: phoneSchema,
      require: false
    },
    scopes: [
      {
        type: String,
        required: true,
      },
    ],
    operations: [
      {
        type: featureSchema,
        default: [],
      },
    ],
    modules: [
      {
        type: featureSchema,
        default: [],
      },
    ],
    company: {
      type: companySchema,
      require: false,
    },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserPackage",
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles",
      },
    password: {
      type: String,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (error, hash) => {
      if (error) return next(error);
      this.password = hash;
      next();
    });
  });
});

const MODEL = "User";

export default (mongoose.models[MODEL] ||
  mongoose.model(MODEL, userSchema)) as Model<IUser>;
