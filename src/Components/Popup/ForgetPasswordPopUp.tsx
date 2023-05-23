import React, { useEffect, useRef, useState, Fragment } from "react";
import Image from "next/image";
// import Button from "../button/Button";
import Link from "next/link";
import Button from "../Button";
import { authService } from "../../services/auth.service";
import { toast } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";
import Input from "../Input";
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const ForgetPasswordpopup = ({ onClose }: any) => {
  let [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const onSubmit = async () => {
    // try {
    //   let data = {
    //     userId: props.data
    //   }
    //   setLoading(true)
    //   let resp = await authService.deleteUser(data)
    //   setLoading(false)
    //   if(resp.status==200||resp.status==201){
    //     if(!Object.keys(resp?.data?.data).length){
    //       toast(resp?.data?.message)
    //     }else{
    //       toast('Deleted Successfully !')
    //       props.refetch()
    //     }
    //     props.setstate()
    //   }else{
    //     toast('error occured')
    //   }
    // } catch (error) {
    //   toast('error occured')
    //   setLoading(false)
    //   console.log(error)
    // }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Enter Your Email
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          <div className="mb-[27px] ">
                            <p className="text-white">Email</p>
                            <Input
                              placeholder="Email"
                              styles="at-fieldholder"
                              className="pr-16 bg-white border-2 border-[#F6F6F6] w-full sm:w-full h-2/4"
                              floatingLabel="labelname"
                              labelname="Email"
                              name="email"
                              //   register={register}
                            />
                            {/* {errors.email && (
              <p className="at-error text-red-700 mt-1">
                {errors.email.message}
              </p>
            )} */}
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default ForgetPasswordpopup;
