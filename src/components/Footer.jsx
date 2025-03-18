import Image from "next/image";
export default function Footer(){
    return (
        <footer className="row-start-4 items-center justify-center h-[150px] sm:h-auto">
          <div className="flex flex-col sm:flex-row border-t-2 pt-4 gap-3">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/franco-mastrantonio-33ab41185/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                className="invert-[0.5] brightness-0"
                src="/icons/brand-linkedin.svg"
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
                src="/icons/brand-github.svg"
                alt="Github icon"
                width={16}
                height={16}
              />
              Github
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/docs/franco_mastrantonio_cv.pdf"
              download="Franco Mastrantonio - CV"
            >
              <Image
                aria-hidden
                className="invert-[0.5] brightness-0"
                src="/icons/file.svg"
                alt="Email icon"
                width={16}
                height={16}
              />
              Descargar CV
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="mailto:francomastrantonio@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                className="invert-[0.5] brightness-0"
                src="/icons/mail-icon.svg"
                alt="Email icon"
                width={18}
                height={18}
              />
              francomastrantonio@hotmail.com
            </a>
          </div>
        </footer>   
    )
}