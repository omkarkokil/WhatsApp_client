import LoginLayout from "@/components/Layouts/LoginLayout";
import Image from "next/image"; 
import React from "react";
import Avatar from "@/../../public/default_avatar.png";

const page = () => {
  return (
    <>
      <LoginLayout>
        <div className="flex flex-col justify-center gap-4 items-center ">
          <h1 className="text-xl">Create your profile</h1>
          <div className="flex gap-4">
            <form className="flex flex-col items-center gap-4">
              <div>
                <h1 className="text-[#00de8f]">Display Name</h1>
                <input
                  type="text"
                  className="pl-2 mt-2 py-5 rounded-lg h-6 bg-[#2a3941] border-none outline-none"
                />
              </div>
              <div>
                <h1 className="text-[#00de8f]">About</h1>
                <input
                  type="text"
                  className="pl-2 mt-2 py-5 rounded-lg h-6 bg-[#2a3941] border-none outline-none"
                />
              </div>
              <button className="flex items-center bg-slate-900 py-3 px-2 w-[80%] rounded-lg cursor-pointer justify-center gap-2 text-sm">
                Create Profile
              </button>
            </form>
            <div>
              <Image src={Avatar} height={200} width={200} alt="Default" />
            </div>
          </div>
        </div>
      </LoginLayout>
    </>
  );
};

export default page;
