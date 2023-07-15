import React from "react";
import Navbar from "./Navbar/Navbar";
import ChatPage from "./ChatPage/ChatPage";

const Chat = () => {
  return (
    <>
      {/* <div className="h-[100vh] w-[70%] bg-[#202c33]"></div> */}
      <div className="h-[100vh] w-[70%]">
        <Navbar />
        <ChatPage />
      </div>
    </>
  );
};

export default Chat;
