import React from "react";
import Image from "next/image";
const Avatar = () => {
  return(
  <Image src={"/images/avatar.jpeg"} alt="Avatar" width={60} height={60} className=" rounded-full" />
  )
};

export default Avatar;
