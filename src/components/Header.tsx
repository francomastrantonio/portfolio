'use client'
import { useScroll } from "@/hooks/useScroll";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Header(){
  const { isScrolled, scrollProgress } = useScroll(20)
  const scrollProgressValue = useMotionValue(0);
  
  useEffect(()=>{
    scrollProgressValue.set(scrollProgress)
    console.log('scrollProgressValue.get()=',scrollProgressValue.get())
  }, [scrollProgress, scrollProgressValue])
  
  const x = useTransform(scrollProgressValue, [0, 1], ["0%", "30vw"])

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
          isScrolled ? "bg-[#15192c] shadow-md flex-row" : "bg-transparent flex-col"
        }`}>
           <motion.div className={`absolute left-10 rounded-xl top-11 h-3 ${
            scrollProgressValue.get() < 0.035 ? 'bg-transparent' :  'bg-white duration-0'
           }`}
            style={{ width: x }} />
           <motion.img 
            src="/images/avatar.png"
            alt="Foto de Franco"
            className={`flex rounded-full max-w-[446] border-solid border-white border-2 relative z-10 transition-all ${
              scrollProgressValue.get() < 0.035 ? 'duration-300' :  'duration-0'
             }
              ${
              isScrolled ? "w-[70px]" : "w-[200px] mb-4"
            }`}
            style={scrollProgressValue.get() > 0.032 ? { x } : undefined}
      />    
            <span className="flex font-medium transition-all duration-200 text-1xl sm:text-3xl">Franco Mastrantonio</span>
            { !isScrolled && <span>{calculateAge()} años</span> }
        </div>
    )
}