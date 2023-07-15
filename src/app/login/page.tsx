import Image from "next/image";
import React from "react";
import gif from "@/../../public/Gif.gif";
import { FcGoogle } from "react-icons/fc";
import LoginLayout from "@/components/Layouts/LoginLayout";

const page = () => {
  return (
    <>
      <LoginLayout>
        <div className="flex items-center bg-slate-900 py-3 px-4 rounded-lg cursor-pointer justify-center gap-2 text-lg ">
          <FcGoogle />
          <h1>Login with google</h1>
        </div>
      </LoginLayout>
    </>
  );
};

export default page;
