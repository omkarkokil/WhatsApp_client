import React, { FC } from "react";
import mask from "@/../../public/mask.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import ChatList from "./ChatList/ChatList";
import { StaticImageData } from "next/image";
import getUsers from "@/actions/getUsers";
import Navbar from "./Navbar/Navbar";

const People = async () => {
  const users = await getUsers();

  return (
    <>
      <Navbar />
      <div className="w-full h-[93vh] bg-[#111b21]">
        <div className="flex px-5 h-14 justify-between items-center ">
          <div className="flex items-center justify-center w-[90%] text-sm px-2 py-1 rounded-md  bg-[#202c33] ">
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Search for new chat"
              className="w-full pl-2 h-6 bg-transparent border-none outline-none"
            />
          </div>
          <div className="text-lg">
            <IoFilter />
          </div>
        </div>
        {users.map((ele, index) => (
          <ChatList key={index} items={ele} />
        ))}
      </div>
    </>
  );
};

export default People;
