import { Card } from "./Card"
import { BiSupport } from 'react-icons/bi';


const Myknowledge = () => {
    return (
        <div className="flex flex-wrap items-center gap-2">

            <div className="flex flex-col w-15 items-center">
                <h1 className="font-bold text-2xl">Mis conocimientos</h1>
                <span className="text-center">En esta sección se muestran los conocimientos y/o habilidades
                    que he adquirido a lo largo de mi formación universitaría, así como
                    tambien conocimientos adquiridos por experiencia laboral.
                </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
                <Card
                    Icon={BiSupport}
                    knowledge="Soporte técnico"
                    description="Atención de clientes para soluciones de necesidades técnicas" />

                <Card
                    Icon={BiSupport}
                    knowledge="Soporte técnico"
                    description="Atención de clientes para soluciones de necesidades técnicas" />

                <Card
                    Icon={BiSupport}
                    knowledge="Soporte técnico"
                    description="Atención de clientes para soluciones de necesidades técnicas" />

                <Card
                    Icon={BiSupport}
                    knowledge="Soporte técnico"
                    description="Atención de clientes para soluciones de necesidades técnicas" />
            </div>
        </div>
    )
}

export { Myknowledge }