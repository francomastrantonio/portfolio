import Image from "next/image";
import projectsJson from '@/projects.json'
import { useEffect } from "react";

export default function ProjectsSection(){
    useEffect(()=>{
    }, [])
    
    return (
        <section id="work-experience-info" className="project-section">
            <span className="section-title mb-4">Proyectos</span>
            <div className="flex flex-row flex-wrap gap-2">
            {
                projectsJson.projects.map((project, index) => (
                    <a
                    key={index}
                    className="project-card"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex flex-col justify-between h-[100%]">
                        <div>
                            <span className="text-xl font-semibold flex">{project.title}</span>
                            <p className="text-parrafo pl-0 mb-2 flex">{project.description}</p>
                        </div>
                        <Image 
                            className="mb-2 flex"
                            src={`/images${project.preview}`}
                            alt={`Imagen de proyecto ${project.title}`}
                            width={939}
                            height={779}
                            priority
                        />
                        <div className="flex flex-row justify-around flex-wrap mt-1">
                            {
                                project.stack.map((tech)=>{
                                    return (
                                        <div className="flex flex-row w-fit items-center mr-2 mb-1" key={tech.id}>
                                            <Image 
                                                className="flex mr-2"
                                                src={`/icons/${tech.id}-icon.svg`}
                                                alt={`icono de ${tech.id}`}
                                                width={20}
                                                height={20}
                                                priority
                                            />
                                            <span className="flex w-auto">{tech.description}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </a>
                ) )
            }
            </div>
        </section>
    )
}