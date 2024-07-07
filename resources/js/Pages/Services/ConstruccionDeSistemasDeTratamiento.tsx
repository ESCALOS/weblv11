import Breadcrumb from "@/Components/Breadcrumb"
import LeafIcon from "@/Components/icons/leaf"
import ImageContent from "@/Components/ImageContent"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

export default function ConstruccionDeSistemasDeTratamiento() {
    const tools = [
        "Tanque Séptico",
        "Pozo Precolador",
        "Biodigestores",
        "Baños Dignos"
    ]

    return (
        <Layout>
            <Head title="Construccion de Sistemas de Tratamiento" />
            <Breadcrumb imgPath="/images/banner1.png" title="Construccion de Sistemas de Tratamiento" />
            <div className="py-16 mt-4 space-y-24">
                <div className="px-4 mx-auto text-center max-w-7xl">
                    <h2 className="text-4xl font-bold">Construccion de Sistemas de Tratamiento</h2>
                    <p className="my-2 text-lg font-light text-zinc-500">
                        Los <span className="font-bold">Construccion de Sistemas de Tratamiento </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nihil! Eligendi quasi fugiat laudantium sint, dicta nulla perferendis numquam tenetur debitis modi! Animi quisquam, quaerat nesciunt ullam nulla rerum unde.</p>
                </div>
                <ImageContent imgPath="/images/banner1.png" title="Construccion de Sistemas de Tratamiento">
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
