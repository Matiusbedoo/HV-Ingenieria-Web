import { About } from "./About"
import { Profile } from "./Profile"
import { ProgressBar } from "./ProgressBar"
import { Skills } from "./Skills"
import { PiSubtractSquareDuotone } from 'react-icons/pi';


const SideBarIzq = () => {
    return (
        <aside className="bg-white w-1/4 p-4">

            <div className=" flex flex-col items-center gap-3">
                <div className="pt-4">
                    <Profile Name="Mateo Bedoya Ospina" Rol="Aux. Soporte Técnico" />
                </div>

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <div className="flex flex-col w-[220px]">
                    <About Title="Edad:" Description="25" />
                    <About Title="Residencia:" Description="Colombia, Bello" />
                    <About Title="Cargo:" Description="Aux. Soporte técnico" />
                    <About Title="Dirección:" Description="Cra. 66BB #55-51" />
                </div>

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <div className="w-full">
                    <span className="font-semibold h-[1.5px]"> Idiomas</span>
                    <ProgressBar Title="Spanish" Percentage="90" />
                    <ProgressBar Title="English" Percentage="45" />
                </div>

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <div className="w-full">
                    <span className="font-semibold h-[1.5px]">Lemguajes de programación</span>
                    <ProgressBar Title="Kotlin" Percentage="40" />
                    <ProgressBar Title="Java" Percentage="40" />
                    <ProgressBar Title="Javascript" Percentage="25" />
                    <ProgressBar Title="CSS" Percentage="30" />
                    <ProgressBar Title="HTML" Percentage="30" />
                </div>

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <div className="w-full">
                    <span className="font-semibold h-[1.5px]">Habilidades Extras</span>
                    <Skills IconComponent={PiSubtractSquareDuotone} skill="Trabajo en equipo"/>
                </div>

            </div>
        </aside>
    )
}

export { SideBarIzq }