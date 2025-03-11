'use client'
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { useScroll } from "@/hooks/useScroll";
import ProfileSection from "@/components/ProfileSection";

export default function Home() {
  const isScrolled = useScroll(20)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm: font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-black to-blue-900 flex-grow">
      <Header />
      <main className={`flex flex-col gap-8 row-start-2 items-center pb-4 sm:items-start ${
        isScrolled ? 'mt-40' : 'mt-80'
      }`}>
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
