import { Button } from "./Button"
import Image from 'next/image';

const MainProfile = () => {
    return (
        <div className="bg-white flex flex-row justify-items-start">
            <div className="flex flex-col items-start p-4 gap-2">
                <h1 className="font-bold">
                    I´m mateo Bedoya Ospina
                </h1>
                <h1 className="font-bold">
                    Auxiliar de soporte Técnico
                </h1>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nam nobis quas ut ullam soluta? Quo minus sunt impedit nesciunt 
                    quam vero delectus vel nulla soluta rerum itaque harum, labore laboriosam.
                </span>

                <Button type="primary" text={"Hire Me ->"}/>
            </div>
            <div>
            <Image className='rounded-full' src='/images/Profile.jpg' height={"150"} width={"150"} alt='Profile Image' />
            </div>
        </div>
    )
}

export { MainProfile }