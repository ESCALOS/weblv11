import Breadcrumb from "@/Components/Breadcrumb"
import LeafIcon from "@/Components/icons/leaf"
import ImageContent from "@/Components/ImageContent"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

export default function ElaboracionDeExpedientesTecnicos() {
    const tools = [
        "Expediente Diresa",
        "Expediente Digesa"
    ]

    return (
        <Layout>
            <Head title="Elaboración de Expedientes Técnicos" />
            <Breadcrumb imgPath="/images/banner1.png" title="Elaboración de Expedientes Técnicos" />
            <div className="py-8 mt-4 space-y-8">
                <div className="px-4">
                    <h2 className="text-4xl font-bold">Elaboración de Expedientes Técnicos</h2>
                    <p className="my-2 text-lg font-light text-zinc-500">
                        Los <span className="font-bold">Elaboración de Expedientes Técnicos </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nihil! Eligendi quasi fugiat laudantium sint, dicta nulla perferendis numquam tenetur debitis modi! Animi quisquam, quaerat nesciunt ullam nulla rerum unde.</p>
                </div>
                <ImageContent imgPath="/images/banner1.png" title="Elaboración de Expedientes Técnicos">
                <div className="flex flex-wrap items-start justify-center w-full h-full py-6 mx-auto max-w-7xl">
                        {
                            tools.map((tool, index) => (
                                <div key={index} className="flex flex-col items-center justify-center w-full py-24 md:w-1/2">
                                    <LeafIcon color="white" />
                                    <p className="text-3xl font-bold text-white">{tool}</p>
                                </div>
                            ))
                        }
                    </div>
                </ImageContent>
            </div>

        </Layout>
    )
}
