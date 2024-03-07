import React from "react";
import NavStatis from "./NavStatis";
import UserTable from "./UserTable";

const UserStatis = () => {
  return (
    <div className="w-full h-auto bg-white p-7 rounded-3xl flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-9 rounded-md bg-[#3D8AFF]"></div>
        <p className="text-[#06080F] text-2xl font-semibold">
          Thống kê hoạt động
        </p>
      </div>
      <NavStatis />
      <UserTable />
    </div>
  );
};

export default UserStatis;
