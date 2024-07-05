import Breadcrumb from "@/Components/Breadcrumb"
import LeafIcon from "@/Components/icons/leaf"
import ImageContent from "@/Components/ImageContent"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

export default function Home() {
    const tools = [
        "Evaluación Ambiental Preliminar (EVAP)",
        "Declaración de Impacto Ambiental (DIA)",
        "Estudio de Impacto Ambiental Semidetallado (EIA-sd)",
        "Estudio de Impacto Ambiental Detallado (EIA-d)",
        "Declaración Ambiental de Actividades en Curso (DAAC)",
        "Declaración de Adecuación Ambiental (DAA)",
        "Informe Técnico Sustentatorio(ITS)",
        "Modificaciones de Instrumentos de Gestión Ambiental",
        "Informe de Gestión Ambiental(IGA)"
    ]

    return (
        <Layout>
            <Head title="Instrumentos de Gestion Ambiental" />
            <Breadcrumb imgPath="/images/banner1.png" title="Instrumentos de Gestion Ambiental" />
            <div className="py-8 mx-auto mt-4 space-y-8 max-w-7xl">
                <div className="sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold">Instrumentos de Gestion Ambiental</h2>
                    <p className="my-2 text-lg font-light text-zinc-500">
                        Los <span className="font-bold">Instrumentos de Gestion Ambiental </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nihil! Eligendi quasi fugiat laudantium sint, dicta nulla perferendis numquam tenetur debitis modi! Animi quisquam, quaerat nesciunt ullam nulla rerum unde.</p>
                </div>
                <ImageContent imgPath="/images/banner1.png" title="Instrumentos de Gestion Ambiental">
                    <div className="grid items-center justify-center w-full h-full grid-cols-1 gap-8 p-6 md:grid-cols-3">
                        {
                            tools.map((tool, index) => (
                                <div key={index} className="px-4">
                                    <LeafIcon color="white" />
                                    <p className="text-xl font-bold text-white">{tool}</p>
                                </div>
                            ))
                        }
                        <div className="flex justify-center px-4 md:col-span-3">
                            <div className="md:w-1/2">
                                <LeafIcon color="white" />
                                <br />
                                <div className="text-left text-white">
                                    <p className="block mb-2 text-xl font-bold">
                                        Instrumento de Gestión Ambiental y Fiscalización para la Formalización de Actividades de Pequeña Minería y Minería Artesanal (IGAFOM).
                                    </p>
                                    <span className="text-lg">
                                        Tales instrumentos presentados a las autoridades tales como:
                                    </span>
                                    <ul className="ml-4 list-disc">
                                        <li>Ministerio de Desarrollo Agrario y Riego <b>(MIDAGRI)</b></li>
                                        <li>Ministerio de Producción <b>(PRODUCE)</b></li>
                                        <li>Ministerio de Energía y Minas <b>(MINEM)</b></li>
                                        <li>Servicio Nacional de Certificación Ambiental para las Inversiones Sostenibles <b>(SENACE)</b> entre otros, según corresponda.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </ImageContent>
            </div>

        </Layout>
    )
}
