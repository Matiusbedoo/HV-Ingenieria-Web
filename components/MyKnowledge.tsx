import { Card } from "./Card"
import { BiSupport, BiPrinter, BiLogoInternetExplorer, BiLogoAndroid } from 'react-icons/bi';
import { SectionDescription } from "./sectionDescription";


const Myknowledge = () => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            
        
            <SectionDescription title="Mis conocimientos" description="En esta sección se muestran los conocimientos y/o habilidades
                    que he adquirido a lo largo de mi formación universitaría, así como
                    tambien conocimientos adquiridos por experiencia laboral."/>

            <div className="grid grid-cols-3 gap-2">

                <Card
                    Icon={BiLogoAndroid}
                    knowledge="Desarollo APP Moviles"
                    description="Diseño y desarrollo de aplicaciones moviles enfocadas principalmente para dispositivos Android." />

                <Card
                    Icon={BiSupport}
                    knowledge="Soporte técnico"
                    description="Atención de clientes para soluciones de necesidades técnicas." />

                <Card
                    Icon={BiPrinter}
                    knowledge="Soporte Impresoras"
                    description="Mantenimiento primario y preventivo a impresoras." />

                <Card
                    Icon={BiLogoInternetExplorer}
                    knowledge="Redes e internet"
                    description="Diseñar y configurar las soluciones alternativas de coenctividad en red." />
            </div>
        </div>
    )
}

export { Myknowledge }