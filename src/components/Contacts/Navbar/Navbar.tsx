import Image from "next/image";
import React, { FC } from "react";
import mask from "@/../../public/mask.jpg";
import { MdMessage } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
const Navbar: FC = () => {
  return (
    <>
      <nav className="flex h-[7vh] sticky top-0 left-0 right-[30%] bg-[#202c33] ">
        <div className="w-full flex items-center justify-between ">
          <Image
            src={mask}
            className="rounded-full ml-5"
            height={40}
            width={40}
            alt="none"
          />
          <div className="flex gap-4 text-xl items-center">
            <div className="cursor-pointer">
              <MdMessage />
            </div>

            <div className="cursor-pointer">
              <CiMenuKebab />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
