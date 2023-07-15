import Image from "next/image";
import React, { FC, ReactNode } from "react";
import gif from "@/../../public/Gif.gif";

interface Loginprops {
  children: ReactNode;
}

const LoginLayout: FC<Loginprops> = (props) => {
  return (
    <>
      <div className="h-screen w-full gap-10 bg-[#202c33] flex flex-col items-center justify-center">
        <div className="flex items-center gap-8 justify-center">
          <Image src={gif} alt="what-gif" width={250} height={250} />
          <h1 className="text-white text-[3.5em]">WhatsApp</h1>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default LoginLayout;
