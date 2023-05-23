import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface Iprops {
  data?: any;
  parentstyle?: string;
  className?: string;
  setFilerKey?: any;
}
export default function Select({
  data,
  className,
  parentstyle,
  setFilerKey,
}: Iprops) {
  const [selected, setSelected] = useState(data[0]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="mt-1 relative pl-5 pr-[0.625rem]  py-3.5 md:pl-5">
              <Listbox.Button
                className={`${className}   bg-[#F9F9F9] flex items-center justify-between relative text-base font-SofiaPro    pb-5  rounded-md shadow-sm px-5  py-3.5 cursor-default focus:outline-none`}
              >
                <span className="block truncate text-black text-base mr-4">
                  {selected.name}
                </span>
                <span className=" inset-y-0 right-0 flex items-center  pointer-events-none">
                  {/* <i className="icon-angle-down text-sm "></i> */}
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 0.999999L7 7L13 1"
                      stroke="#393A38"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`absolute ${parentstyle} z-10 -ml-4 pl-2  w-full AtOptioncolor shadow-lg rounded-md py-2 text-lg bg-white`}
                >
                  {data.map((person: any) => (
                    <Listbox.Option
                      key={person.id}
                      onClick={() => setFilerKey(person.name)}
                      className={({ active }) =>
                        classNames(
                          active ? "text-black bg-graydull " : "text-secondary",
                          "cursor-pointer select-none relative py-2  pl-3  "
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "" : "font-normal  ",
                              "block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
}
