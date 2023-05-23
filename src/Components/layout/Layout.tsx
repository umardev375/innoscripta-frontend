import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React, { Children, Fragment, useEffect, useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Image from "next/image";
import { useSelector } from "react-redux";
import { HttpService } from "../../services/base.service";
import mainLogo from "../../../public/assets/svg/loginComponent/mainLogo.svg";
export default function Layout({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const token: any = useSelector((state: any) => state.auth.access_token);

  useEffect(() => {
    if (token) {
      HttpService.setToken(token);
    }
  }, [token]);
  useEffect(() => {
    let url = window.location.href;
    let urlarray = url.split("/");
    if (urlarray[urlarray.length - 1] == "login") {
      setIsLoginPage(true);
    } else {
      setIsLoginPage(false);
    }
  });

  return (
    <>
      {!isLoginPage && (
        <>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 flex z-40 xl:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-[#E5E5E5] bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex-1 flex flex-col w-[23rem]">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center bg-black  justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/*  mobile sidebar */}
                  <div className="w-[12.5rem] flex items-center justify-center flex-shrink-0  bg-[#1E2646]">
                    <figure className="leading-none  px-10 py-6 flex-shrink-0 index-20 flex items-center justify-center  bg-[#1E2646]">
                      <Image
                        className="mt-7"
                        src={mainLogo}
                        alt=""
                        width={85}
                        height={71}
                        layout="fixed"
                        objectFit="contain"
                      ></Image>
                    </figure>
                  </div>
                  <div className="flex-grow flex flex-col overflow-y-auto">
                    <Sidebar />
                  </div>
                </div>
              </Transition.Child>

              <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
            </Dialog>
          </Transition.Root>

          <div className="hidden xl:flex bg-white xl:flex-col xl:fixed md:inset-y-0 w-[12.5rem] ">
            <figure className="leading-none  px-10 py-6 flex-shrink-0 index-20 flex items-center justify-center  bg-[#1E2646]">
              <Image
                className="mt-7"
                src={mainLogo}
                alt=""
                width={85}
                height={71}
                layout="fixed"
                objectFit="contain"
              ></Image>
            </figure>
            <div className="flex flex-col flex-grow overflow-y-auto">
              <div className="flex-grow flex flex-col">
                <Sidebar />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="xl:pl-[12.5rem] flex flex-col flex-1">
        {!isLoginPage && <Header handleOpen={setSidebarOpen} />}
        <main className="bg-[#F9F9F9] ">{children}</main>
      </div>
    </>
  );
}
