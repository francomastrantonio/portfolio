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
                    <div className="flex flex-col">
                        <span className="text-xl font-semibold flex">{project.title}</span>
                        <p className="text-detail flex">{project.description}</p>
                        <Image 
                            className="mb-2 flex"
                            src={`/images${project.preview}`}
                            alt={`Imagen de proyecto ${project.title}`}
                            width={939}
                            height={779}
                            priority
                        />
                    </div>
                </a>
                ) )
            }
            </div>
        </section>
    )
}