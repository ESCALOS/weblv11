import Breadcrumb from "@/Components/Breadcrumb"
import LeafIcon from "@/Components/icons/leaf"
import ImageContent from "@/Components/ImageContent"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

export default function ServiciosDeMonitoreosOcupacionales() {
    const tools = [
        {
            name: "Monitoreo de calidad de agua",
            items: [
                "Aerófilos mesófilos",
                "Mohos y levaduras",
                "Coliformes",
                "Agua para consumo"
            ]
        },
        {
            name: "Exigencias psicológicas",
            items: [
                "Exigencias psicológicas",
                "Doble presencia",
                "Control sobre el trabajo",
            ]
        },
        {
            name: "Monitoreo de calidad de agua",
            items: [
                "Posturas forzadas",
                "Levantamiento manual de carga",
                "Movimientos repetitivos",
                "Diversas metodologías de evaluación",
            ]
        }
    ]

    return (
        <Layout>
            <Head title="Servicios de Monitoreos Ocupacionales" />
            <Breadcrumb imgPath="/images/banner1.png" title="Servicios de Monitoreos Ocupacionales" />
            <div className="py-16 mt-4 space-y-24">
                <div className="px-4 mx-auto text-center max-w-7xl">
                    <h2 className="text-4xl font-bold">Servicios de Monitoreos Ocupacionales</h2>
                    <p className="my-2 text-lg font-light text-zinc-500">
                        Los <span className="font-bold">Servicios de Monitoreos Ocupacionales </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nihil! Eligendi quasi fugiat laudantium sint, dicta nulla perferendis numquam tenetur debitis modi! Animi quisquam, quaerat nesciunt ullam nulla rerum unde.</p>
                </div>
                <ImageContent imgPath="/images/banner1.png" title="Servicios de Monitoreos Ocupacionales">
                    <div className="flex flex-wrap items-start justify-center w-full h-full mx-auto py-14 max-w-7xl">
                        {
                            tools.map((tool, index) => (
                                <div key={index} className="flex flex-col items-center justify-center w-full py-8 text-white md:w-1/2">
                                    <LeafIcon color="white" />
                                    <p className="mb-4 text-2xl font-bold">{tool.name}</p>
                                    <ul className="ml-4 space-y-4 list-disc">
                                        {
                                            tool.items.map((item, index2) => (
                                                <li key={index2} className="text-lg">{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </ImageContent>
            </div>

        </Layout>
    )
}
