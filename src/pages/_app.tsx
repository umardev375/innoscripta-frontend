import type { AppProps } from "next/app";
import Layout from "../Components/layout/Layout";
import "../../public/assets/css/icomoon.css"
import "react-toastify/dist/ReactToastify.css";

import { ForgetpasswordComponent } from "../Components/forgetpassword/ForgetpasswordComponent";
import { useState } from "react";
import LoginModule from "../modules/LoginModule/LoginModule";
import ForgetPasswordModule from "../modules/forgetpasswordmodule/forgetpassword";
import { Provider, useSelector ,useDispatch} from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { store, persistor } from "../store";

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <ToastContainer theme="dark" />
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>

  );
}

export default MyApp;
