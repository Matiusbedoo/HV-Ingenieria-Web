import { About } from "./About"
import { Profile } from "./Profile"

const SideBarIzq = () => {
    return (
        <aside className="bg-white w-[305px] h-[1315px]">

            <div className=" flex flex-col items-center gap-3">
                <div className="pt-4">
                    <Profile Name="Mateo Bedoya Ospina" Rol="Aux. Soporte Técnico" />
                </div>

                <div className="bg-hv-gray w-[220px] h-[1.5px]"></div>

                <div className="flex flex-col">
                    <About Title="Age:" Description="25"/>
                    <About Title="Residence:" Description="BD"/>
                    <About Title="Aux:" Description="Soporte técnico"/>
                    <About Title="Addres:" Description="Colombia, Bello"/>
                </div>

                <div className="bg-hv-gray w-[220px] h-[1.5px]"></div>

            </div>
        </aside>
    )
}

export { SideBarIzq }