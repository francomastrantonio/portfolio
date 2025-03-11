export default function ProfileSection(){
    return (
        <section id="profile-info" className="flex flex-col items-center w-12/12">
            <span className="text-lg font-light w-10/12 mt-4 whitespace-pre-line text-center">
              Soy un desarrollador Frontend apasionado por crear experiencias interactivas, dinámicas y optimizadas. 
              Me especializo en tecnologías modernas como React.js y React Native. 
              Tengo experiencia en la construcción de interfaces intuitivas y responsivas. 
              Me encanta enfrentar desafíos técnicos, escribir código limpio y mantenerme actualizado con las últimas tendencias de desarrollo.
              <br></br>Siempre estoy buscando mejorar mis habilidades y trabajar en proyectos que me permitan innovar y aprender. 🚀
              <p className="text-xl mt-4">Graduado de Analista de sistemas<span className="text-sm"> - <a
                      className="items-center gap-2 hover:underline hover:underline-offset-4"
                      href="https://davinci.edu.ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Da Vinci Escuela de arte multimedial (Agosto 2018 - Febrero 2025)
                    </a>
                  </span>
              </p>
            </span>
        </section>
    )
}