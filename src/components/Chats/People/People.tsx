import React, { FC } from "react";
import mask from "@/img/mask.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import ChatList from "./ChatList/ChatList";
import { StaticImageData } from "next/image";

interface Item {
  name: string;
  Avater: StaticImageData;
  time: string;
}

const People = () => {
  const arr: Item[] = [
    {
      name: "Common1",
      Avater: mask,
      time: "10:40",
    },
    {
      name: "Common1",
      Avater: mask,
      time: "10:40",
    },
    {
      name: "Common2",
      Avater: mask,
      time: "10:40",
    },
    {
      name: "Common3",
      Avater: mask,
      time: "10:40",
    },
    {
      name: "Common4",
      Avater: mask,
      time: "10:40",
    },
    {
      name: "Common5",
      Avater: mask,
      time: "10:40",
    },
    {
      name: "Common6",
      Avater: mask,
      time: "10:40",
    },
  ];

  return (
    <>
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
        {arr.map((ele, index) => (
          <ChatList key={index} {...ele} />
        ))}
      </div>
    </>
  );
};

export default People;
