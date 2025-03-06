import Image from "next/image";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm: font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-black to-blue-900 flex-grow">
      <main className="flex flex-col gap-8 row-start-2 items-center pb-4 sm:items-start">
        <section id="profile-info" className="flex flex-col items-center w-12/12">
          <Image
            className="rounded-full w-1/2 self-center sm:w-3/12 border-solid border-white border-2 mb-4"
            src="/avatar.png"
            alt="Foto de Franco"
            width={446}
            height={427}
            priority
          />
            <span className="flex text-3xl font-medium">Franco Mastrantonio</span>
            <span className="flex text-2xl">Analista de sistemas</span>
            <span className="flex text-lg font-light w-10/12 mt-4 whitespace-pre-line text-center">
              Soy un desarrollador Frontend apasionado por crear experiencias interactivas, dinámicas y optimizadas. 
              Me especializo en tecnologías modernas como React.js y React Native. 
              Tengo experiencia en la construcción de interfaces intuitivas y responsivas. 
              Me encanta enfrentar desafíos técnicos, escribir código limpio y mantenerme actualizado con las últimas tendencias de desarrollo.
              <br></br>Siempre estoy buscando mejorar mis habilidades y trabajar en proyectos que me permitan innovar y aprender. 🚀
            </span>
        </section>
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        {
          /**
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>   
           */
        }
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center border-t-2 pt-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/franco-mastrantonio-33ab41185/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="invert-[0.5] brightness-0"
            src="/brand-linkedin.svg"
            alt="Linkedin icon"
            width={16}
            height={16}
          />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/fmastrantoniodv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="invert-[0.5] brightness-0"
            src="/brand-github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Github
        </a>
      </footer>   
    </div>
  );
}
