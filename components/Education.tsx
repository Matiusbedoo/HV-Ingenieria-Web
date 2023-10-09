import { CardEducation } from "./CardEducation"
import { SectionDescription } from "./sectionDescription"

const Education = () => {
    return (
        <div className="flex flex-col gap-2">

            <SectionDescription title="Mis conocimientos" description="En esta sección se muestran los conocimientos y/o habilidades
                    que he adquirido a lo largo de mi formación universitaría, así como
                    tambien conocimientos adquiridos por experiencia laboral."/>

            <div className="bg-white w-full p-3 gap-2">
                <CardEducation
                    institute="Institución Universitaria Marco Fidel Suárez"
                    rol="Estudiante"
                    date="Junio 2013 - Diciembre 2014"
                    qualification="Técnico"
                    description="Capacidad en la resolución de problemas y el mantenimiento de equipos informáticos,
                    con habilidades técnicas que permiten solucionar eficazmente gran varidad de problemas relacionados con harware y software en computadoras
                    y dispositivos relacionados" />

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <CardEducation
                    institute="Universidad de Antioquia"
                    rol="Estudiante"
                    date="Febrero 2015 - En curso"
                    qualification="Profesional"
                    description="Pendiente" />
            </div>
        </div>
    )
}

export { Education }