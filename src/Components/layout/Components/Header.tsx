import React, { useEffect, useState } from "react";
import {
  MenuAlt2Icon,
  BellIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import Input from "../../Input";
import { useDispatch, useSelector } from "react-redux";
import { HttpService } from "../../../services/base.service";
import { authActions } from "../../../store/auth/auth";
import router from "next/router";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const Header = ({ handleOpen }: any) => {
  const token: any = useSelector((state: any) => state.auth.access_token);
  const user: any = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (token) {
      HttpService.setToken(token);
    }
  }, [token]);

  useEffect(() => {}, [user]);

  const handleSearch = () => {
    // Perform search logic with searchQuery
    console.log("Search Query:", searchQuery);
  };

  const logout = () => {
    dispatch(authActions.logout());
    router.push("/");
  };

  return (
    <div className="flex flex-col">
      <Disclosure
        as="nav"
        className="bg-[#11172D] py-2 border-b-2 border-gray-500 "
      >
        {({ open }) => (
          <>
            <div className="px-2 sm:px-4 ">
              <div className="relative flex items-center justify-end h-16">
                <div className="flex items-center px-2">
                  <div className="flex-shrink-0">
                    <p className="font-inter font-bold text-base leading-5 text-white">
                      Welcome Back!
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex justify-end"></div>

                <div className="flex lg:hidden">
                  <Disclosure.Button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => handleOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:block lg:ml-4">
                  <div className="flex items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                      <div>
                        <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src="" alt="" />
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
