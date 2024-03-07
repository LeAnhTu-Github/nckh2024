import React from "react";
import Avatar from "../Avatar";

const NavInfo = () => {
  return (
    <div className="w-[65%] h-full bg-white p-5 rounded-3xl flex flex-col">
      <div className="h-1/2 w-full flex gap-4 pt-4">
        <div>
          <Avatar />
        </div>
        <div className="flex flex-col justify-start pt-2 gap-1">
          <p className=" text-sm font-bold text-{#06080F}">Phạm Thị Hà Anh</p>
          <p className=" text-xs font-semibold text-{#797D85} opacity-50">
            ptha.dhti15a8hn@sv.uneti.edu.vn
          </p>
        </div>
      </div>
      <div className="w-full h-3/5 flex gap-2 py-4">
        <div className="w-1/3 h-full bg-nav1 bg-auto bg-center bg-repeat rounded-[35px] p-5 flex flex-col">
          <p className="text-[#797D85] text-sm font-medium">
            Number of activities
          </p>
          <p className="text-[#06080F] text-2xl font-semibold pt-2">20</p>
        </div>
        <div className="w-1/3 h-full bg-nav2 bg-auto bg-center bg-repeat rounded-[35px] p-5 flex flex-col">
          <p className="text-[#797D85] text-sm font-medium">Spend</p>
          <p className="text-[#06080F] text-2xl font-semibold pt-2">20</p>
        </div>
        <div className="w-1/3 h-full bg-nav3 bg-auto bg-center bg-repeat rounded-[35px] p-5 flex flex-col">
          <p className="text-[#797D85] text-sm font-medium">Order Number</p>
          <p className="text-[#06080F] text-2xl font-semibold pt-2">124</p>
        </div>
      </div>
    </div>
  );
};

export default NavInfo;
