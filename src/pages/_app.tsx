import "../styles/global.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { CookiesProvider } from "react-cookie";
import { Hydrate, QueryClientProvider } from "react-query";

import { Misc } from "@/components";
import { queryClient } from "@/services";
import {
  theme1,
  // ,theme2
} from "@/utils/AppConfig";

interface IUser {
  _id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  rec_email?: string;
  photo_url?: string;
  phone?: IPhone;
  scopes?: string[];
  operations?: IFeatureType[];
  package?: IPackage;
  modules?: IFeatureType[];
  role?: IRole;
  admin?: boolean;
  active?: boolean;
}

const initialUser: IUser = {};
export const InputsContext = createContext({});
export const UserContext = createContext<{
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
} | null>(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: any) => page);
  const [inputs, setInputs] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
    openOTPRoute: false,
    openNewPassword: false,
  });

  const [user, setUser] = useState<IUser>(initialUser);

  return (
    <>
      <CookiesProvider>
        <InputsContext.Provider value={{ inputs, setInputs }}>
          <UserContext.Provider value={{ user, setUser }}>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehyderatedState}>
                <ChakraProvider theme={theme1}>
                  <Misc.Fonts />
                  {getLayout(<Component {...pageProps} />)}
                </ChakraProvider>
              </Hydrate>
            </QueryClientProvider>
          </UserContext.Provider>
        </InputsContext.Provider>
      </CookiesProvider>
    </>
  );
};

export default MyApp;
