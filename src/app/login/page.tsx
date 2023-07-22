"use client";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import gif from "@/../../public/Gif.gif";
import { FcGoogle } from "react-icons/fc";
import LoginLayout from "@/components/Layouts/LoginLayout";
import { signIn, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";

const page: FC = () => {
  // const user = useSession();
  // const router = useRouter();

  // if (user?.status === "loading") {
  //   return (
  //     <div className="grid h-screen bg-[#202c33] place-items-center">
  //       <Image src={gif} height={100} width={100} alt={"none"}></Image>
  //     </div>
  //   );
  // }

  // useEffect(() => {
  //   if (user.status === "authenticated") {
  //     router.push("/");
  //   }
  // }, [user?.status, router]);

  return (
    <>
      <LoginLayout>
        <div
          onClick={() => signIn("google")}
          className="flex items-center bg-slate-900 py-3 px-4 rounded-lg cursor-pointer justify-center gap-2 text-lg "
        >
          <FcGoogle />
          <h1>Login with google</h1>
        </div>
      </LoginLayout>
    </>
  );
};
export default page;
