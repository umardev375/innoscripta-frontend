import React, { useEffect } from "react";
import Button from "../Button";

const Rejectpopup = (props: any) => {
  return (
    <div className="px-16 pt-6 pb-6 ">
      <h3 className="text-center mb-4">Reason</h3>
      <textarea name="" id=""  className="h-[12rem] w-[25rem] xs:w-full resize-none px-5 pt-2 border border-[#D8D8D8] outline-none rounded-md"></textarea>
      <div className="flex gap-6  justify-center   xs:block mt-10">
        <Button className="px-12 xs:w-full py-4 text-base font-Circular-Medium bg-[#D8D8D8]">
          send
        </Button>

        <a>
          <Button className="px-12 py-4 text-base  xs:w-full text-black font-Circular-Medium mt-0 xs:mt-3">
            cancel
          </Button>
        </a>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Rejectpopup;
