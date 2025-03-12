import {PrimaryButton, SecondaryButton} from "./Buttons";

export default function ExperienceSection(){
    return (
        <section id="work-experience-info" className="flex flex-col rounded-md items-start w-12/12 border-t-2 p-4 hover:shadow-lg shadow-blue-900 transition-transform duration-300 hover:-translate-y-2 sm:w-full">
            <span className="section-title">Experiencia laboral</span>
            <p className="text-xl">Lider técnico en KNH S.R.L. <span className="text-sm">- (Junio 2021 - Actualidad)</span></p>
            <p className="text-lg font-light w-full mt-4 text-left pl-4">
              Liderando el desarrollo del proyecto de <span className="font-medium">+Pagos Nación</span>, una solución de cobros con plataformas Web, Mobile y Android SmartPos destinada a los pequeños y medianos comercios.
            </p>
            <p className="text-parrafo">
              Desarrollo en plataforma low-code con integraciones C++ y Javascript con versionado en Gitlab. Adoptando nuevos features de la misma para acompañar el crecimiento dando feedback de su uso.
            </p>
            <p className="text-parrafo">
              Gestión de requerimientos del cliente para la planificación con el equipo de las tareas a realizar en el sprint llevando el seguimiento en Jira.
            </p>
            <p className="text-parrafo">
              Crecimiento constante de la solución incorporando nuevos features y mejorando los productivos tanto desde el código como desde la usabilidad.
            </p>
            <p className="text-parrafo">
              Velar por el uso de buenas practicas y documentación al día.
            </p>
            <div className="flex flex-row self-center pt-4 gap-2">
              <PrimaryButton url={"https://play.google.com/store/apps/details?id=ar.com.maspagos&hl=es_419"}>
                Ir a Google Play
              </PrimaryButton>
              <SecondaryButton url={"https://micomercio.maspagos.com.ar/"}>
                Ir a la web
              </SecondaryButton>
          </div>
        </section>
    )
}