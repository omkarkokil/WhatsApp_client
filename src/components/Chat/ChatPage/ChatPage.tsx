import React  from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";
import { FiPaperclip } from "react-icons/fi";
import Image from "next/image";
import mask from "@/img/mask.jpg";
import Messages from "./Messages/Messages";

interface Chats {
  content: string;
  from: string;
}

const ChatPage = () => {
  const arr: Chats[] = [
    {
      content: "Hello bro1",
      from: "recieve",
    },
    {
      content: "Hello bro2",
      from: "send",
    },
    {
      content: "Hello bro1",
      from: "recieve",
    },
    {
      content: "hey there",
      from: "send",
    },
    {
      content: "Hello bro1",
      from: "recieve",
    },
    {
      content: "Hello bro1",
      from: "send",
    },
  ];

  return (
    <>
      <div className={"image-bg h-[93vh] "}>
        <div className={`h-[82vh] flex justify-end flex-col gap-3`}>
          {arr.map((ele, index) => (
            <Messages key={index} {...ele} />
          ))}

          {/* <div className=" h-fit w-fit px-6 rounded-3xl py-2">
            <h1 className="text-sm">Hii there</h1>
          </div> */}
        </div>

        <div className="absolute bottom-0 right-0 left-[30%] flex-col">
          <div className="h-[10vh] text-slate-400  flex items-center gap-4 w-full bg-[#202c33]">
            <div className="flex items-center pl-4  justify-center gap-6 text-2xl ">
              <BsEmojiLaughing />
              <FiPaperclip />
            </div>
            <div className="w-[85%]">
              <input
                className="w-full text-sm bg-[#2a3942] py-3 px-2 rounded-lg border-none outline-none"
                placeholder="Type a message"
                type="text"
              />
            </div>
            <div className="text-2xl">
              <AiFillAudio />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
