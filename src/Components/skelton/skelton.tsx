import React from "react";

const Skelton = () => {
  return (
    <div className="inline-block p-4  shadow-md rounded-2xl animate-pulse">
      <div className="h-[15.313rem] bg-[#c9cdd3]"></div>
      <div className="flex gap-4 items-center my-4">
        <div className=" rounded-full h-12 bg-[#c9cdd3] w-12"></div>

      <div className=" h-6 bg-[#c9cdd3] w-1/2"></div>
      </div>
      <div className="flex flex-col justify-between gap-4">
    
        <div className="w-full bg-[#c9cdd3] h-6"></div>
        <div className="w-full bg-[#c9cdd3] h-24 flex justify-between items-center">
        <div className="w-2/5  h-[50%] bg-white ml-4  rounded-sm"></div>
        <div className="w-2/5  h-[70%] bg-white mr-4 rounded-sm"></div>

        </div>

      </div>
    </div>
  );
};

export default Skelton;