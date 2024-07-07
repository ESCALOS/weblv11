import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"
import Breadcrumb from "@/Components/Breadcrumb";
import LeafIcon from "@/Components/icons/leaf";

export default function About() {
    const securities = [
        {
            title: "Compromiso y ética profesional.",
            text: "Asesoramos con honestidad, buscando el criterio objetivo. Basamos la confianza con nuestros clientes y proveedores en la lealtad y la integridad moral."
        },
        {
            title: "Valor humano.",
            text: "Apostamos por profesionales con valores, responsables, que se implican y participan en el desarrollo de la empresa y en la consecución de sus metas."
        },
        {
            title: "Cuidamos el valor humano, nuestro mejor activo.",
            text: "Fomentamos el uso racional y sostenible de los recursos naturales, procurando el control y la minimización de consumos, residuos, emisiones y vertidos, e integrando ambientalmente todas nuestras obras para minimizar posibles impactos."
        }
    ]
    return (
        <Layout>
            <Head title="Inicio" />
            <Breadcrumb imgPath="/images/banner1.png" title="Nosotros" />
            <div className="py-16 space-y-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="pb-12">
                        <h1 className="text-4xl font-bold">¿Quiénes somos?</h1>
                        <p className="max-w-3xl my-4 text-lg text-justify text-zinc-500">
                            <b>SERVICIOS AMBIENTALES J & M S.A.C.</b> es una empresa identificada con el <b>RUC 20608187619</b>, que brinda servicios de asesoría y consultoría en temas relacionados a medio ambiente, seguridad y salud ocupacional a nivel nacional, con un equipo técnico consolidado que busca siempre la mejora continua en términos ambientales de sus clientes. <br/>
                            Estamos convencidos que el cuidado de nuestro planeta depende de las acciones responsables que hagamos como sociedad, por esto nuestros servicios cumplen con la normativa legal vigente para lograr este fin.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <img className="w-full rounded-md" src="/images/banner3.png" alt="b1" />
                        <img className="w-full rounded-md" src="/images/banner2.png" alt="b2" />
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center w-full gap-4 md:gap-16 py-24 mx-auto bg-[#936be80d]">
                    <div>
                        <p className="text-sm font-light text-zinc-500">Presentación Corporativa</p>
                        <h2 className="text-4xl font-bold">Nuestra Misión</h2>
                    </div>
                    <p className="max-w-3xl px-6 text-justify text-zinc-500">
                        Garantizar la eficiencia, responsabilidad y transparencia de nuestra empresa, debido a que conducimos a las empresas a lograr una óptima gestión ambiental, en todas sus actividades, identificando y evaluando todas las variables ambientales. Asimismo, brindamos el servicio de consultoría y asesoría técnica ambiental, seguridad y salud ocupacional a empresas interesadas en contar con una política de prevención y ambientalmente responsable.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center w-full gap-4 md:gap-16 py-24 mx-auto bg-[#936be80d]">
                    <p className="order-2 max-w-3xl px-6 text-justify text-zinc-500 xl:order-1">
                        Garantizar la eficiencia, responsabilidad y transparencia de nuestra empresa, debido a que conducimos a las empresas a lograr una óptima gestión ambiental, en todas sus actividades, identificando y evaluando todas las variables ambientales. Asimismo, brindamos el servicio de consultoría y asesoría técnica ambiental, seguridad y salud ocupacional a empresas interesadas en contar con una política de prevención y ambientalmente responsable.
                    </p>
                    <div className="order-1 xl:order-2">
                        <p className="text-sm font-light text-right text-zinc-500">Presentación Corporativa</p>
                        <h2 className="text-4xl font-bold">Nuestra Visión</h2>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center w-full gap-4 md:gap-16 py-24 mx-auto bg-[#936be80d]">
                    <div>
                        <p className="text-sm font-light text-zinc-500">Presentación Corporativa</p>
                        <h2 className="text-4xl font-bold">Nuestros Valores</h2>
                    </div>
                    <div className="max-w-3xl px-6 text-justify divide-y text-zinc-500">
                        {
                            securities.map((security,index) =>
                                <div className="py-4" key={index}>
                                    <h3 className="font-bold text-zinc-500">
                                        <LeafIcon color="#71717a" size={20} />
                                        <span className="pl-2">{security.title}</span>
                                    </h3>
                                    <p className="font-light text-justify text-zinc-500">
                                        {security.text}
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
