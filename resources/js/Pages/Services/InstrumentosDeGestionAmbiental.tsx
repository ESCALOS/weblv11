import Breadcrumb from "@/Components/Breadcrumb"
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
            <div className="py-8 mx-auto mt-4 space-y-8 max-w-7xl sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-4xl font-bold">Instrumentos de Gestion Ambiental</h2>
                    <p className="my-2 text-lg font-light text-zinc-500">
                        Los <span className="font-bold">Instrumentos de Gestion Ambiental </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nihil! Eligendi quasi fugiat laudantium sint, dicta nulla perferendis numquam tenetur debitis modi! Animi quisquam, quaerat nesciunt ullam nulla rerum unde.</p>
                </div>
                <div className="relative w-full h-[72rem] md:h-96" >
                    <img src="/images/banner1.png" alt="Instrumentos de Gestion Ambiental" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 w-full h-full">
                        <div className="grid items-center justify-center w-full h-full grid-cols-2 gap-8 p-6 md:grid-cols-3">
                            {
                                tools.map((tool, index) => (
                                    <div key={index} className="px-4">
                                        <svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 551.391 551.391" stroke="#ffffff">
                                            <g strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M413.695,0c0,0-45.366,44.014-94.43,61.759C-44.068,193.178,109.165,449.277,114.164,450.121 c0,0,20.374-35.48,47.896-55.717c174.644-128.389,210.14-276.171,210.14-276.171s-39.19,177.829-194.562,288.479 c-34.316,24.426-57.552,84.568-67.388,144.679c0,0,24.325-9.828,34.785-12.49c4.079-26.618,12.607-52.106,27.025-74.875 c217.151,25.854,288.272-149.123,297.563-210.136C491.552,109.79,413.695,0,413.695,0z">
                                                </path>
                                            </g>
                                        </svg>
                                        <span className="text-xl font-bold text-white">{tool}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
