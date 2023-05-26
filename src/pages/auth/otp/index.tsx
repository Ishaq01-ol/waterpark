import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { Auth } from "@/components";
import { InputsContext } from "@/pages/_app";

const ScreenComponent = () => {
  const router = useRouter();
  const contextData: any = useContext(InputsContext);
  useEffect(() => {
    if (!contextData.inputs.openOTPRoute) {
      router.replace(`/dashboard`);
    }
  }, [contextData.inputs.openOTPRoute]);

  return !contextData.inputs.openOTPRoute ? null : <Auth.OtpScreenView />;
};
export default ScreenComponent;
