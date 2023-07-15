import People from "@/components/Contacts/People";
import Navbar from "@/components/Contacts/Navbar/Navbar";
import Image from "next/image";
import Chat from "@/components/Chat/Chat";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div className="border-r-[0.2px] w-[30%] border-r-[#222]">
          <Navbar />
          <People />
        </div>
        <Chat />
      </div>
    </main>
  );
}
