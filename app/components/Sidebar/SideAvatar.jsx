import React from "react";
import Avatar from "../Avatar";

const SideAvatar = () => {
  return (
    <div>
      <div className="bg-white w-full h-[240px] rounded-3xl border px-6 py-4 gap-4 mb-4 border-{#DADDE0} flex flex-col items-center">
        <Avatar />
        <div className=" w-full flex flex-col items-center">
          <p className=" text-sm font-bold text-{#06080F}">Phạm Thị Hà Anh</p>
          <p className=" text-xs font-semibold text-{#797D85} opacity-50">
            ptha.dhti15a8hn@sv.uneti.edu.vn
          </p>
        </div>
        <div className="w-12 h-12 bg-blue-300 rounded-2xl flex justify-center items-center">
          <pc className="font-bold text-base text-blue-600">98</pc>
        </div>
      </div>
    </div>
  );
};

export default SideAvatar;
