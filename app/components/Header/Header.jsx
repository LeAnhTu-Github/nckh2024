import React from "react";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="w-full h-[80px] rounded-[32px] px-5 py-7 bg-white flex justify-between items-center">
      <p className="text-3xl font-semibold text-[#06080F]">Trang chủ</p>
      <div className="w-[192px] h-6 flex justify-evenly">
        <FaCartShopping size={30} />
        <IoNotifications size={30} />
        <div>
          <Image
            src={"/images/vietnam.jpg"}
            alt="Avatar"
            width={30}
            height={30}
            className=" rounded-full"
          />
        </div>
        <CiLogout size={30} />
      </div>
    </div>
  );
};

export default Header;
