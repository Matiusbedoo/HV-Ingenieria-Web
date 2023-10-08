import { About } from "./About"
import { Profile } from "./Profile"
import { ProgressBar } from "./ProgressBar"
import { Skills } from "./Skills"
import { FaFacebook } from 'react-icons/fa';


const SideBarIzq = () => {
    return (
        <aside className="bg-white w-[305px]">

            <div className=" flex flex-col items-center gap-3">
                <div className="pt-4">
                    <Profile Name="Mateo Bedoya Ospina" Rol="Aux. Soporte Técnico" />
                </div>

                <div className="bg-hv-gray w-[220px] h-[1.5px]"></div>

                <div className="flex flex-col w-[220px]">
                    <About Title="Age:" Description="25" />
                    <About Title="Residence:" Description="BD" />
                    <About Title="Aux:" Description="Soporte técnico" />
                    <About Title="Addres:" Description="Colombia, Bello" />
                </div>

                <div className="bg-hv-gray w-[220px] h-[1.5px]"></div>

                <div className="w-[220px]">
                    <span className="font-semibold w-[220px] h-[1.5px]"> Languages </span>
                    <ProgressBar Title="Spanish" Percentage="90" />
                    <ProgressBar Title="English" Percentage="45" />
                </div>

                <div className="bg-hv-gray w-[220px] h-[1.5px]"></div>

                <div className="w-[220px]">
                    <span className="font-semibold w-[220px] h-[1.5px]"> Programmin Languages </span>
                    <ProgressBar Title="Kotlin" Percentage="40" />
                    <ProgressBar Title="Java" Percentage="40" />
                    <ProgressBar Title="Javascript" Percentage="25" />
                    <ProgressBar Title="CSS" Percentage="30" />
                    <ProgressBar Title="HTML" Percentage="30" />
                </div>

                <div className="bg-hv-gray w-[220px] h-[1.5px]"></div>

                <div className="w-[220px]">
                    <span className="font-semibold w-[220px] h-[1.5px]"> Extra Skills </span>
                    <Skills IconComponent={FaFacebook} skill="Teams Work"/>
                </div>

            </div>
        </aside>
    )
}

export { SideBarIzq }