import React from "react";
import Image from "next/image";
import SideAvatar from "./SideAvatar";
import SideDashboard from "./SideDashboard";
const Sidebar = () => {
  return (
    <div className="w-[312px] h-[1224px] bg-white rounded-3xl p-6">
      <div className="w-full h-12 flex justify-center">
        <div>
          <Image src={"/images/logo.jpeg"} alt="Logo" width={45} height={45} />
        </div>
      </div>
      <SideAvatar />
      <SideDashboard />
    </div>
  );
};

export default Sidebar;
