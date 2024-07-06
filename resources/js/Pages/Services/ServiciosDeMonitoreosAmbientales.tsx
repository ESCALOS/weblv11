import Breadcrumb from "@/Components/Breadcrumb"
import LeafIcon from "@/Components/icons/leaf"
import ImageContent from "@/Components/ImageContent"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

export default function ServiciosDeMonitoreosAmbientales() {
    const tools = [
        "Monitoreo de la Calidad de Aire.",
        "Monitoreo de la Calidad de Ruido Ambiental.",
        "Monitoreo de la Calidad de Suelos.",
        "Monitoreo de la Calidad de Agua Subterránea, Residual y Consumo Humano.",
        "Monitoreos de flora, fauna (herpetofauna, mastofauna, entomología, ornitofauna, entre otros)."
    ]

    return (
        <Layout>
            <Head title="Servicios de Monitoreos Ambientales" />
            <Breadcrumb imgPath="/images/banner1.png" title="Servicios de Monitoreos Ambientales" />
            <div className="py-8 mt-4 space-y-8">
                <div className="px-4">
                    <h2 className="text-4xl font-bold">Servicios de Monitoreos Ambientales</h2>
                    <p className="my-2 text-lg font-light text-zinc-500">
                        Los <span className="font-bold">Servicios de Monitoreos Ambientales </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nihil! Eligendi quasi fugiat laudantium sint, dicta nulla perferendis numquam tenetur debitis modi! Animi quisquam, quaerat nesciunt ullam nulla rerum unde.</p>
                </div>
                <ImageContent imgPath="/images/banner1.png" title="Servicios de Monitoreos Ambientales">
                    <div className="flex flex-wrap items-center justify-center w-full h-full px-6 mx-auto py-14 md:px-24 max-w-7xl">
                        {
                            tools.map((tool, index) => (
                                <div key={index} className="flex items-center justify-start w-full py-8 md:w-1/2">
                                    <div>
                                        <LeafIcon color="white" />
                                        <p className="text-2xl font-bold text-white">{tool}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </ImageContent>
            </div>
        </Layout>
    )
}
