import Image, { StaticImageData } from "next/image";
import React from "react";

const ChatList = ({
  name,
  Avater,
  time,
}: {
  name: string;
  Avater: StaticImageData;
  time: string;
}) => {
  return (
    <>
      <div className="h-[8vh] flex items-center border-b cursor-pointer hover:bg-[#202c33]  border-b-[#333]">
        <div className="px-4">
          <Image
            src={Avater}
            className="rounded-full "
            height={50}
            width={50}
            alt="profile-image"
          />
        </div>
        <div className="w-[60%]">
          <h2 className="text-md">{name}</h2>
          <p className="text-xs text-slate-400">Audio</p>
        </div>
        <div className="flex flex-col items-center justify-end w-[20%] gap-1 ">
          <h1 className="text-xs text-green-300">{time}</h1>
          <p className="bg-green-400 text-[#333] w-fit px-1 text-xs rounded-full">
            3
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatList;
