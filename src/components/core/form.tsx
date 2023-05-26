import { Box, Button, Text } from "@chakra-ui/react";
import Router from "next/router";
import { memo, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useMutation } from "react-query";
import type {
  ForgetPasswordInput,
  ForgetPasswordMutation,
  LoginInput,
  LoginMutation,
  ResetPasswordInput,
  ResetPasswordMutation,
  VerifyOtpInput,
  VerifyOtpMutation,
} from "src/graphql/generated/graphql";

import { InputsContext } from "@/pages/_app";
import {
  forgetPassword,
  Login,
  ResetPassword,
  VerifyOtp,
} from "@/services/api";
import { theme } from "@/utils/configurations";

import { Core } from "..";

interface FormProps {
  rememberMe?: boolean;
  BottomView?: React.ReactNode;
  OtpFields?: React.ReactNode;
}

const Form = ({
  OtpFields,
  BottomView,
  fields = [],
  actionText = "Not Defined",
  rememberMe,
  slug,
}: FormProps & IPageConfigurations) => {
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState("");
  const [, setCookie] = useCookies(["auth"]);
  const contextData: any = useContext(InputsContext);

  const loginMutation = useMutation<LoginMutation, unknown, LoginInput>(
    (variables) => Login({ loginInput: variables })
  );

  const forgetMutation = useMutation<
    ForgetPasswordMutation,
    unknown,
    ForgetPasswordInput
  >((variables) => forgetPassword({ forgetPasswordInput: variables }));

  const resetPasswordMutation = useMutation<
    ResetPasswordMutation,
    unknown,
    ResetPasswordInput
  >((variables) => ResetPassword({ resetPasswordInput: variables }));

  const verifyOTPMutation = useMutation<
    VerifyOtpMutation,
    unknown,
    VerifyOtpInput
  >((variables) => VerifyOtp({ verifyOtpInput: variables }));

  const actionBtnLink = () => {
    if (slug === "sign_in") return "/dashboard";
    if (slug === "forget_password") return "/auth/otp";
    if (slug === "otp") return "/auth/new-password";
    if (slug === "new_password") return "/auth/login";
    return "/";
  };

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoader(true);
    let result: any = null;
    switch (slug) {
      case "sign_in":
        if (
          !contextData.inputs.email.length ||
          !contextData.inputs.password.length
        ) {
          setError("Enter Username and Password");
          setIsLoader(false);
        } else {
          setError("");
          result = await loginMutation
            .mutateAsync({
              email: contextData.inputs.email,
              password: contextData.inputs.password,
              rememberMe: rememberMe || false,
            })
            .catch((loginError) => {
              setError(loginError?.message?.split(":")[0]);
              setIsLoader(false);
            });
          if (result?.login) {
            setCookie("auth", result?.login, {
              path: "/",
              maxAge: 60 * 60 * 24, // 1 day in seconds
            });
            Router.push(actionBtnLink());
          }
          if (!loginMutation.isLoading) {
            setIsLoader(false);
          }
        }
        break;
      case "forget_password":
        if (!contextData.inputs.email.length) {
          setError("Enter Email");
          setIsLoader(false);
        } else {
          result = await forgetMutation
            .mutateAsync({
              email: contextData.inputs.email,
            })
            .catch((forgetError) => {
              setError(forgetError?.message?.split(":")[0]);
              setIsLoader(false);
            });
          if (result?.forgetPassword) {
            contextData.setInputs({
              ...contextData.inputs,
              openOTPRoute: true,
            });
            Router.push(actionBtnLink());
          }
          if (!forgetMutation.isLoading) {
            setIsLoader(false);
          }
        }
        break;
      case "new_password":
        if (
          contextData.inputs.password === contextData.inputs.confirmPassword
        ) {
          if (
            contextData.inputs.password === "" ||
            contextData.inputs.confirmPassword === ""
          ) {
            setError("Enter Password");
            setIsLoader(false);
          } else {
            result = await resetPasswordMutation
              .mutateAsync({
                email: contextData.inputs.email,
                new_password: contextData.inputs.password,
              })
              .catch((newPasswordError) => {
                setError(newPasswordError?.message?.split(":")[0]);
                setIsLoader(false);
              });
            if (result?.resetPassword) {
              setIsLoader(false);
              Router.push(actionBtnLink());
            }
          }
        }
        break;
      case "otp":
        if (!contextData.inputs.otp.length) {
          setError("Enter OTP Code");
          setIsLoader(false);
        } else {
          result = await verifyOTPMutation
            .mutateAsync({
              otp: Number(contextData.inputs.otp),
            })
            .catch((otpError) => {
              setError(otpError?.message?.split(":")[0]);
              setIsLoader(false);
            });
          if (result?.verifyOtp) {
            setIsLoader(false);
            contextData.setInputs({
              ...contextData.inputs,
              openNewPassword: true,
            });
            Router.push(actionBtnLink());
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      {fields &&
        fields.map((_) => <Core.Field {..._} key={_.key} formName={slug} />)}
      {BottomView}
      {OtpFields}
      <Text
        style={{
          fontSize: "12px",
          color: "red",
          height: "22px",
          marginTop: "-5px",
        }}
      >
        {error && error}
      </Text>
      <Button
        variant="primary"
        backgroundColor={theme.colors.orange}
        textColor={theme.colors.white}
        size="md"
        height="48px"
        width={"100%"}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          submitHandler(e)
        }
      >
        {isLoader ? <Core.BtnSpinner /> : actionText}
      </Button>
    </Box>
  );
};

export default memo(Form);
