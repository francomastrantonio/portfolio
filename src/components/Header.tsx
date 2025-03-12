'use client'
import { useScroll } from "@/hooks/useScroll";
import Image from "next/image";

export default function Header(){
    const isScrolled = useScroll(20)

    const calculateAge = () => {
      const today = new Date();
      const birth = new Date('07/07/1993')
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
          age--;
      } 
      return age;
    }

    return (
        <div className={`header-container ${
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
            { !isScrolled && <span>{calculateAge()} años</span> }
        </div>
    )
}