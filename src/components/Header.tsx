'use client'
import { useScroll } from "@/hooks/useScroll";
import Image from "next/image";

export default function Header(){
    const isScrolled = useScroll(20)

    return (
        <div className={`fixed flex top-0 left-0 p-4 w-full transition-all duration-300 justify-between items-center z-50 ${
          isScrolled ? "bg-background shadow-md flex-row" : "bg-transparent flex-col"
        }`}>
            <Image
              className={`flex rounded-full max-w-[446] border-solid border-white border-2 transition-all duration-300 ${
                isScrolled ? "w-[70px]" : "w-[300px] mb-4"
              }`}
              src="/avatar.png"
              alt="Foto de Franco"
              width={446}
              height={427}
              priority
            />
            <span className="flex text-3xl font-medium transition-all duration-300">Franco Mastrantonio</span>
          
        </div>
    )
}