import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Tb3DCubeSphere} from 'react-icons/tb'
import {CiUser} from 'react-icons/ci'
import { MdPayment,MdOutlinePayments } from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";
const SideDashboard = () => {
  return (
    <div>
      <div className="bg-white w-full h-[336px] px-6 py-4">
            <div className="w-full h-1/6 flex justify-start items-center rounded-2xl px-4 py-5 bg-[#EFF6FF]">
                <FaHome size={20} className="fill-[#3D8AFF]"/>
                <p className="text-base text-[#3D8AFF] font-medium pl-4">Dashboard</p>
            </div>
            <div className="w-full h-1/6 flex justify-start items-center rounded-2xl px-4 py-5 ">
                <Tb3DCubeSphere size={20} className="fill-[#797D85]"/>
                <p className="text-base text-[#797D85] font-medium pl-4">Service</p>
            </div>
            <div className="w-full h-1/6 flex justify-start items-center rounded-2xl px-4 py-5 ">
                <CiUser size={20} className="fill-[#797D85]"/>
                <p className="text-base text-[#797D85] font-medium pl-4">Profile</p>
            </div>
            <div className="w-full h-1/6 flex justify-start items-center rounded-2xl px-4 py-5 ">
                <MdPayment size={20} className="fill-[#797D85]"/>
                <p className="text-base text-[#797D85] font-medium pl-4">Payment</p>
            </div>
            <div className="w-full h-1/6 flex justify-start items-center rounded-2xl px-4 py-5 ">
                <MdOutlinePayments size={20} className="fill-[#797D85]"/>
                <p className="text-base text-[#797D85] font-medium pl-4">Affiliate</p>
            </div>
            <div className="w-full h-1/6 flex justify-start items-center rounded-2xl px-4 py-5 ">
                <RiQuestionnaireLine size={20} className="fill-[#797D85]"/>
                <p className="text-base text-[#797D85] font-medium pl-4">FAQ</p>
            </div>
      </div>
    </div>
  )
}

export default SideDashboard
