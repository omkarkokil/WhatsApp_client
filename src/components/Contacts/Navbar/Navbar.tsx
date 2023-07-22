"use client";

import Image from "next/image";
import React, { FC, useEffect } from "react";
import mask from "@/../../public/mask.jpg";
import { MdMessage } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import gif from "@/../../public/Gif.gif";

const Navbar = () => {
  const router = useRouter();
  const user = useSession();

  useEffect(() => {
    if (user.status === "unauthenticated") {
      router.push("/login");
    }
  }, [user.status, router]);

  // if (user?.status === "loading") {
  //   return (
  //     <div className="grid h-screen w-screen bg-[#202c33] place-items-center">
  //       <Image src={gif} height={100} width={100} alt={"none"}></Image>
  //     </div>
  //   );
  // }

  return (
    <>
      <nav className="flex h-[7vh] sticky top-0 left-0 right-[30%] bg-[#202c33] ">
        <div className="w-full flex items-center justify-between ">
          <Image
            src={user.data?.user?.image as string}
            className="rounded-full ml-5"
            height={40}
            width={40}
            alt="none"
          />
          <div className="flex gap-4 text-xl items-center">
            <div className="cursor-pointer">
              <MdMessage />
            </div>

            <div
              className="cursor-pointer mr-2"
              onClick={() => {
                router.push("/login");
                signOut();
              }}
            >
              <BiLogOut />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
