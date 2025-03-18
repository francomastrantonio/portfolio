'use client'
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { useScroll } from "@/hooks/useScroll";
import ProfileSection from "@/components/ProfileSection";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const { scrollProgress } = useScroll(10)
  const scrollProgressValue = useMotionValue(0);

  useEffect(()=>{
    scrollProgressValue.set(scrollProgress)
  }, [scrollProgress, scrollProgressValue])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-black to-blue-900 flex-grow sm:w-full">
      <Header />
      <main className={`flex flex-col gap-8 row-start-2 max-w-[800px] items-center pb-4 sm:items-start transition-all duration-200 ${
        scrollProgressValue.get() > 0.03? 'mt-40' : 'mt-60'
      }`}>
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
