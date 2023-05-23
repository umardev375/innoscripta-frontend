import React from "react";
import { ImSpinner9 } from "react-icons/im";

interface Iprops {
  className?: string;
  children: any;
  type?: any;
  onClick?: any;
  disabled?: boolean;
  isLoading?: boolean;
  iconClass?: string;
  isBlack?: any;
}
const Button = ({
  children,
  className,
  type,
  disabled,
  isLoading,
  iconClass,
  isBlack,
  ...rest
}: Iprops) => {
  return (
    <>
      <button
        className={` inline-flex font-Circular-Medium items-center justify-center px-11 py-4 rounded-lg bg-gradient-to-r from-[#0B8140] to-[#0A5129] relative text-black2  , ${
          isLoading &&
          "relative !text-transparent hover:!text-transparent !cursor-wait !transition-none"
        }, ${className ? className : ""}`}
        type={type ? type : "button"}
        disabled={disabled ? true : false}
        {...rest}
      >
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <ImSpinner9
              className={
                isBlack == true
                  ? `animate-spin text-2xl text-black ${iconClass}`
                  : `animate-spin text-2xl text-white ${iconClass}`
              }
            />
          </div>
        )}
        {children}
      </button>
    </>
  );
};

export default Button;
