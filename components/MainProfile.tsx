import { Button } from "./Button"
import Image from 'next/image';

const MainProfile = () => {
    return (
        <div className="bg-white flex">
            <div className="flex flex-col items-start p-10 gap-2">
                <h1 className="font-bold text-2xl">
                    I´m mateo Bedoya Ospina
                </h1>
                <h1 className="font-bold text-2xl">
                    Auxiliar de soporte Técnico
                </h1>
                <div className="w-fit">
                <span className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem corporis nesciunt ipsum harum numquam magni obcaecati adipisci eos dignissimos doloribus, maxime commodi, necessitatibus ab quisquam quasi. Unde, sapiente officiis?
                </span>
                </div>
                
                <Button type="primary" text={"Hire Me ->"} />
            </div>
            <div>
                <Image className='rounded-full' src='/images/Profile.jpg' height={"150"} width={"150"} alt='Profile Image' />
            </div>
        </div>
    )
}

export { MainProfile }