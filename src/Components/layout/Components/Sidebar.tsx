import React, { Fragment } from "react";
import { SidebarNavigation } from "../../../data/sidebar-data";
import Link from "next/link";
import { useRouter } from "next/router";
import logout from "../../../../public/assets/svg/sidebar/logout.svg";
import Image from "next/image";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const router = useRouter();

  return (
    <>
      <nav className="w-[12.5rem] flex-1 bg-[#1E2646] px-5 space-y-2] h-[64rem] ">
        {SidebarNavigation.map((item, i) => (
          <div key={item.name}>
            <Link href={item.href}>
              <a
                className={classNames(
                  router.pathname === item.href
                    ? " !border-themecolor bg-[#29303A]   !text-white"
                    : "",
                  "group flex items-center     border-transparent  font-montserrat-regular  text-lg text-white   rounded-xl"
                )}
              >
                <div
                  className={`${
                    item.current && ``
                  } py-4 w-full rounded-md flex items-center`}
                >
                  <span
                    className={classNames(
                      router.pathname === item.href
                        ? "text-white"
                        : "text-[#0A7F3F]",
                      "mr-5 flex-shrink-0 text-xl"
                    )}
                    aria-hidden="true"
                  >
                    {typeof item.icon === "string" ? (
                      <span className={item.icon} />
                    ) : (
                      <img src={item.icon.src} alt="" className="h-4" />
                    )}
                  </span>
                  <span className="font-inter font-normal text-base leading-5 text-white">
                    {item.name}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        ))}
        <div>
          <div className="mt-80 flex items-center cursor-pointer">
            {/* <span className="mr-2">
              <Image src={logout} alt="logout" />
            </span>
            <button className="group flex items-center border-transparent font-montserrat-regular text-lg text-white rounded-xl ml-2">
              Log out
            </button> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
