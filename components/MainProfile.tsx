import { Button } from "./Button"
import Image from 'next/image';
import { ProfileDialog } from "./Dialogs/ProfileDialog";
import { useState } from "react";

const MainProfile = () => {

    const [dialogOpen, setDialogOpen] = useState<boolean>(false)

    const handleProgileDialogClick = () => {
        setDialogOpen(true)
    }

    return (
        <div className="bg-white flex">
            <div className="flex flex-col w-3/4 items-start p-10 gap-2">
                <h1 className="font-bold text-2xl">
                    Mateo Bedoya Ospina
                </h1>
                <h1 className="font-bold text-2xl">
                    Auxiliar de soporte Técnico
                </h1>
                <div className="w-fit">
                <span className="text-start">
                    Actualmente me desempeño como auxiliar de soporte técnico en la Facultad Nacional de Salud Pública, contratado por medio de la Fundación
                    Universidad de Antioquia, en dicha área me centro en manejar el área de soporte en atención de todos los usuarios de la facultad en la 
                    resolución de sus necesidades. 

                    Así como tambien a la par de estudiar Ingeniería de sistemas en la Universidad de Antioquia.
                </span>
                </div>
                
                <Button type="primary" text={"Sobre Mi ->"} handleClick={handleProgileDialogClick} />
            </div>
            <div className="flex align-middle">
                <Image className='rounded-full' src='/Image/Profile.jpg' height={"150"} width={"150"} alt='Profile Image' />
            </div>

            <ProfileDialog open={dialogOpen} setDialogOpen={setDialogOpen}/>
        </div>
    )
}

export { MainProfile }