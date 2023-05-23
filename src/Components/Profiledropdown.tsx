import { Fragment } from "react";
import { Menu, Switch, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/auth/selector";
import { authActions } from "../store/auth/auth";
import router from "next/router";
import { useDispatch } from "react-redux";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Profiledropdown() {
  const [popup, setPopup] = useState(false);
  const [state, setState] = useState(-1);
  const [btns, showbtn] = useState(false);
  // let user: any = useSelector((state: any) => state);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
    router.push("/login");
  };
  return (
    <>
      <Menu as="div" className="relative inline-block text-left w-full ">
        <div className="flex justify-between items-center  gap-4">
          <Menu.Button className=" border-gray-600">
            <div className="flex gap-5 items-center">
              <div className="sm:block hidden">
                <p className="text-base font-bold text-[#29303A]">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-[#B0B0B0] text-xs text-right">
                  {user?.roles[0]}
                </p>
              </div>
              <figure className="h-14 w-14 relative flex-shrink-0 rounded-full">
                {/* <Image src="/assets/images/chat/pic1.png" layout="fill" objectFit="contain"/> */}
                {/* <Image src={person.image} layout="fill" objectFit="contain"/> */}
                {user?.profileImage ? (
                  <Image
                    src={user?.profileImage}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                ) : (
                  <div className="rounded-full w-[48px] h-[48px] leading-[48px] bg-themecolor">
                    {/* <img src="" alt="" /> */}
                    <span className="w-full block  leading-[48px] h-full rounded-full text-xl text-black1 uppercase">
                      {user?.firstName && user?.firstName[0]}
                      {user?.lastName && user?.lastName[0]}
                    </span>
                  </div>
                )}
              </figure>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 w-[15.25rem] rounded-lg shadow-[0px 0px 50px rgba(0, 0, 0, 0.15)] px-4 py-5 bg-white  divide-y divide-gray-100 focus:outline-none">
            <div className="!border-0">
              <Menu.Item>
                {({ active }) => (
                  <Link href="https://dev-one-of-a-mint.renesistechdemo.com/">
                    <a
                      className={classNames(
                        active ? " !text-themecolor" : "!text-black2",
                        " text-base flex w-full items-center mb-3"
                      )}
                    ></a>
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Link href="/profile">
                    <a
                      className={classNames(
                        active ? " !text-themecolor" : "!text-black2",
                        "text-base  flex w-full items-center mb-3"
                      )}
                    ></a>
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? "!text-black2" : "!text-black2",
                      "text-base  flex w-full items-center mb-3 border-0"
                    )}
                    onClick={() => {
                      setPopup(true);
                      setState(5);
                    }}
                  >
                    <div
                      className=" flex items-center"
                      onClick={() => logout()}
                    >
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4501 0C15.958 0 18.0001 1.985 18.0001 4.425V15.564C18.0001 18.01 15.9528 20 13.4387 20H8.41574C5.90784 20 3.86677 18.015 3.86677 15.575V14.633C3.86677 14.219 4.21226 13.883 4.63795 13.883C5.06365 13.883 5.40914 14.219 5.40914 14.633V15.575C5.40914 17.187 6.75821 18.5 8.41574 18.5H13.4387C15.1035 18.5 16.4577 17.184 16.4577 15.564V4.425C16.4577 2.813 15.1076 1.5 13.4501 1.5H8.42706C6.76335 1.5 5.40914 2.816 5.40914 4.434V5.367C5.40914 5.781 5.06365 6.117 4.63795 6.117C4.21226 6.117 3.86677 5.781 3.86677 5.367V4.434C3.86677 1.989 5.91298 0 8.42706 0H13.4501ZM9.68594 6.553L12.6976 9.46975C12.7221 9.49351 12.7449 9.51885 12.7658 9.5456L12.6976 9.46975C12.7387 9.50912 12.7747 9.55184 12.8051 9.59843C12.8114 9.61011 12.8184 9.62152 12.8251 9.63311C12.8368 9.65102 12.8467 9.67004 12.8558 9.68944C12.8609 9.7032 12.8669 9.71688 12.8724 9.73077C12.8811 9.74977 12.8879 9.76931 12.8939 9.78911C12.8973 9.8047 12.9015 9.82026 12.9051 9.836C12.9107 9.85507 12.9143 9.87425 12.9171 9.89358C12.9172 9.90237 12.9183 9.9116 12.9193 9.92088C12.9235 9.94728 12.9249 9.97358 12.9249 10L12.9174 10.079L12.9165 10.1017L12.9158 10.1068L12.9249 10C12.9249 10.0555 12.9186 10.1105 12.9063 10.1639C12.9015 10.1797 12.8973 10.1953 12.8927 10.2107C12.8879 10.2307 12.8811 10.2502 12.8735 10.2695C12.8669 10.2831 12.8609 10.2968 12.8546 10.3103C12.8467 10.33 12.8368 10.349 12.826 10.3676C12.8184 10.3785 12.8114 10.3899 12.804 10.4011C12.793 10.4202 12.7799 10.4383 12.766 10.4558C12.7566 10.4662 12.7477 10.4768 12.7386 10.4872C12.7262 10.5025 12.7123 10.517 12.6977 10.531L9.68594 13.446C9.53582 13.592 9.33839 13.665 9.142 13.665C8.94457 13.665 8.74612 13.592 8.596 13.444C8.29472 13.15 8.29678 12.676 8.59805 12.384L10.2851 10.75H0.771248C0.345553 10.75 6.10352e-05 10.414 6.10352e-05 10C6.10352e-05 9.586 0.345553 9.25 0.771248 9.25H10.2851L8.59805 7.615C8.29678 7.323 8.29472 6.849 8.596 6.555C8.89727 6.261 9.38466 6.261 9.68594 6.553Z"
                          fill="#29303A"
                        />
                      </svg>
                      <h6 className="ml-3 text-basic font-Circular-Book ">
                        Logout
                      </h6>
                    </div>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
