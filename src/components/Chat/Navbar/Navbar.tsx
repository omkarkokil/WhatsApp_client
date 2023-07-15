import Image from "next/image";
import React, { FC } from "react";
import mask from "@/../../public/mask.jpg";
import { MdMessage } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCameraVideoFill, BsThreeDotsVertical } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
const Navbar: FC = () => {
  return (
    <>
      <nav className="flex h-[7vh] sticky top-0 left-0 right-[30%] bg-[#202c33] ">
        <div className="w-full flex items-center gap-5  ">
          <Image
            src={mask}
            className="rounded-full ml-5"
            height={40}
            width={40}
            alt="none"
          />
          <div className="w-[70%]">
            <h2 className="text-md">Legendary</h2>
            <p className="text-xs text-slate-400">online</p>
          </div>

          <div className="w-[20%] justify-end flex gap-8 text-xl items-center">
            <div className="cursor-pointer">
              <IoCall />
            </div>
            <div className="cursor-pointer">
              <BsFillCameraVideoFill />
            </div>
            <div className="cursor-pointer">
              <AiOutlineSearch />
            </div>
            <div className="cursor-pointer">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
