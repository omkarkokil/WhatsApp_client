import React from "react";

const Messages = ({ content, from }: { content: string; from: string }) => {
  return (
    <>
      <div
        className={`flex w-full px-4 ${
          from === "send" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={` h-fit   w-fit px-6 rounded-lg py-2 ${
            from === "send" ? "bg-[#005c4b]" : "bg-[#202c33]"
          }`}
        >
          <h1 className="text-sm">Hii there {content}</h1>
        </div>
      </div>
    </>
  );
};

export default Messages;
