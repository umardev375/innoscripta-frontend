import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { authService } from "../../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateloginForm } from "../../schemas/user.schema";
import { authActions } from "../../store/auth/auth";
import Router from "next/router";
import Button from "../Button";
import Input from "../Input";
// import mainLogo from "../../../public/assets/svg/loginComponent/mainLogo.svg";
import { HttpService } from "../../services/base.service";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import ForgetPasswordpopup from "../Popup/ForgetPasswordPopUp";
import Popups from "../Popup/poups";
import { toast } from "react-toastify";

export const LoginComponent = () => {
  let token: any = useSelector((state: any) => state.auth.access_token);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [popup, setPopup] = useState(false);
  const [state, setState] = useState(-1);
  const [eye, setEye] = useState(false);
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateloginForm),
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      setLoading1(true);
      const user = await authService.login(data);
      if (user.status === 200 || user.status == 201) {
        if (user?.data?.token) {
          HttpService.setToken(user?.data?.token);
          dispatch(authActions.login(user?.data?.user));
          Router.push({
            pathname: "/newYorkTimes",
          });
        }
      }
      setLoading1(false);
    } catch (error: any) {
      setLoading(false);
      if (error?.response?.data?.message?.message) {
        toast(error.response.data.message.message);
      } else if (error?.response?.data?.message) {
        toast.error("Invalid credentials");
      } else {
        toast.error("Invalid credentials");
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center  h-[80vh]  xl:-ml-[20.625rem]">
      <h2 className="lg:text-[35px] font-Circular-Medium text-black">
        InnoScripta Sign In{" "}
      </h2>

      <form className="mt-[1rem]" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[27px] ">
          <p className="text-black">Email</p>
          <Input
            placeholder="Email"
            styles="at-fieldholder"
            className="pr-16 bg-white border-2 border-[#F6F6F6] pb-2 w-full sm:w-full h-2/4"
            floatingLabel="labelname"
            labelname=""
            name="email"
            register={register}
          />
          {errors.email && (
            <p className="at-error text-red-700 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-[30px] ">
          <div className="relative mb-6">
            <p className="text-black">Password</p>
            <Input
              register={register}
              name="password"
              className="pr-16 bg-white border-2 border-[#F6F6F6] pb-2 sm:w-full h-2/4"
              styles="at-fieldholder"
              floatingLabel="labelname"
              labelname=""
              placeholder={"Password"}
              icon="svgicon right-5 top-2/4 translate-y-[-50%] cursor-pointer"
              type={eye ? "text" : "password"}
              onIconClick={() => setEye(!eye)}
              svgicon={
                eye ? (
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.3504 3.22899C20.6557 3.53431 20.6557 4.02928 20.3504 4.3346L3.91323 20.7707C3.76109 20.9239 3.56102 21 3.36095 21C3.16087 21 2.9608 20.9239 2.80866 20.7707C2.50334 20.4654 2.50334 19.9715 2.80866 19.6662L4.86352 17.6126C3.39026 16.265 2.14052 14.4485 1.22278 12.3096C1.13733 12.1116 1.13733 11.8886 1.22278 11.6916C2.2867 9.22824 3.78516 7.18896 5.55664 5.79575C8.98791 3.08024 13.4989 2.9361 17.0693 5.40533L19.2459 3.22899C19.5512 2.92367 20.0451 2.92367 20.3504 3.22899ZM19.9647 8.25268C20.7191 9.25409 21.3818 10.4118 21.9352 11.6893C22.0217 11.8873 22.0217 12.1124 21.9352 12.3094C19.751 17.3706 15.8798 20.3914 11.5793 20.3914C10.6029 20.3914 9.63176 20.2331 8.69392 19.9215C8.28439 19.785 8.06244 19.3421 8.19895 18.9326C8.33545 18.522 8.77624 18.3042 9.18785 18.4376C9.96625 18.6971 10.7707 18.8284 11.5793 18.8284C15.1515 18.8284 18.4162 16.2837 20.3638 11.9999C19.8886 10.9589 19.3353 10.0158 18.7163 9.1926C18.4568 8.84769 18.5256 8.35689 18.8705 8.09742C19.2144 7.83795 19.7052 7.90881 19.9647 8.25268ZM6.52469 7.02328C5.02832 8.20079 3.74348 9.91599 2.79522 12.0022C3.62202 13.8283 4.70823 15.3683 5.96986 16.5056L8.19754 14.2782C7.74434 13.6113 7.50046 12.8251 7.50046 12.0017C7.50046 9.75093 9.33029 7.92006 11.579 7.92006C12.3949 7.92006 13.193 8.16849 13.8575 8.6175L15.9432 6.53195C12.9704 4.61019 9.35227 4.7855 6.52469 7.02328ZM14.9527 11.8173C15.3779 11.8934 15.6603 12.2998 15.5842 12.7249C15.2852 14.3849 13.9701 15.702 12.3112 16.0042C12.2643 16.0126 12.2163 16.0167 12.1705 16.0167C11.8006 16.0167 11.4713 15.7521 11.4025 15.3748C11.3254 14.9507 11.6067 14.5433 12.0319 14.4662C13.0531 14.2807 13.8617 13.47 14.0451 12.4477C14.1222 12.0236 14.5286 11.7444 14.9527 11.8173ZM11.579 9.48313C10.1921 9.48313 9.06353 10.6127 9.06353 12.0017C9.06353 12.4033 9.15807 12.791 9.33629 13.1391L12.7184 9.7566C12.3702 9.57916 11.9785 9.48313 11.579 9.48313Z"
                      fill="#29303A"
                    />
                  </svg>
                ) : (
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.003 0.000488281C14.139 0.00348828 17.853 2.90249 19.939 7.75649C20.021 7.94549 20.021 8.15949 19.939 8.34849C17.854 13.2035 14.139 16.1025 10.003 16.1055H9.99699C5.86099 16.1025 2.14699 13.2035 0.0609941 8.34849C-0.0200059 8.15949 -0.0200059 7.94549 0.0609941 7.75649C2.14699 2.90249 5.86199 0.00348828 9.99699 0.000488281H10.003ZM9.99999 1.50049C6.56399 1.50149 3.42999 3.94449 1.56999 8.05249C3.42999 12.1615 6.56299 14.6045 9.99999 14.6055C13.437 14.6045 16.57 12.1615 18.43 8.05249C16.57 3.94449 13.437 1.50149 9.99999 1.50049ZM9.99969 4.14129C12.1567 4.14129 13.9117 5.89629 13.9117 8.05329C13.9117 10.2093 12.1567 11.9633 9.99969 11.9633C7.84269 11.9633 6.08869 10.2093 6.08869 8.05329C6.08869 5.89629 7.84269 4.14129 9.99969 4.14129ZM9.99969 5.64129C8.66969 5.64129 7.58869 6.72329 7.58869 8.05329C7.58869 9.38229 8.66969 10.4633 9.99969 10.4633C11.3297 10.4633 12.4117 9.38229 12.4117 8.05329C12.4117 6.72329 11.3297 5.64129 9.99969 5.64129Z"
                      fill="#29303A"
                    />
                  </svg>
                )
              }
            />
            {errors.password && (
              <p className="at-error text-red-700 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Button
            className=" bg-themecolor w-[100%] sm:w-[30.625rem] text-white rounded-full"
            type="submit"
            disabled={loading}
            isLoading={loading1}
          >
            SIGN IN
          </Button>
        </div>
      </form>
      <div>
        <p className="mt-[30px] mb-[66px] text-[#6D92CA] cursor-pointer">
          Forgot Password?
        </p>

        {showModal && <ForgetPasswordpopup />}
      </div>
      <Button
        className="mt-8 text-white cursor-pointer"
        isLoading={loading}
        onClick={() => {
          setPopup(true);
          setState(1);
        }}
      >
        SignUp
        <svg
          className="inline"
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5.2C0.558172 5.2 0.2 5.55817 0.2 6C0.2 6.44183 0.558172 6.8 1 6.8L1 5.2ZM16.5657 6.56569C16.8781 6.25327 16.8781 5.74674 16.5657 5.43432L11.4745 0.343147C11.1621 0.0307273 10.6556 0.0307273 10.3431 0.343147C10.0307 0.655566 10.0307 1.1621 10.3431 1.47452L14.8686 6L10.3431 10.5255C10.0307 10.8379 10.0307 11.3444 10.3431 11.6569C10.6556 11.9693 11.1621 11.9693 11.4745 11.6569L16.5657 6.56569ZM1 6.8L16 6.8L16 5.2L1 5.2L1 6.8Z"
            fill="#0A7F3F"
          />
        </svg>
      </Button>
      {state && (
        <Popups
          show={popup}
          hide={setPopup}
          state={state}
          setstate={setState}
        />
      )}
    </div>
  );
};
