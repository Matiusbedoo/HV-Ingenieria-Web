import { CardPortfolio } from "./CardPortfolio"
import { DescriptionSection } from "./DescriptionSection"

const Portfolio = () => {
    return (
        <div className="flex flex-col">
            <DescriptionSection title="Portafolio" description="En esta sección muestro algunos de mis proyectos
            personales y tambien elaborados con alguna entidad, así como pequeños proyectos en mi actual trabajo"/>


            <div className="overflow-x-auto flex flex-row gap-8">

                <CardPortfolio Title="Proyecto Integrador" Description="Plataforma de manejo de eventos culturales
                en la ciudad de Medellín" srcImage="/Image/Profile.jpg" />

                <CardPortfolio Title="Proyecto Integrador" Description="Plataforma de manejo de eventos culturales
                en la ciudad de Medellín" srcImage="/Image/Profile.jpg" />

                <CardPortfolio Title="Proyecto Integrador" Description="Plataforma de manejo de eventos culturales
                en la ciudad de Medellín" srcImage="/Image/Profile.jpg" />

                <CardPortfolio Title="Proyecto Integrador" Description="Plataforma de manejo de eventos culturales
                en la ciudad de Medellín" srcImage="/Image/Profile.jpg" />

                <CardPortfolio Title="Proyecto Integrador" Description="Plataforma de manejo de eventos culturales
                en la ciudad de Medellín" srcImage="/Image/Profile.jpg" />

            </div>
        </div>
    )
}

export { Portfolio }