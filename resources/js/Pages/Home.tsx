import MainSlider from "@/Components/home/MainSlider"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

export default function Home() {
    return (
        <Layout>
            <Head title="Inicio" />
            <div className="space-y-8">
            <div className="h-[36rem]">
            <MainSlider />
            </div>

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                Servicios
            </div>
            </div>
        </Layout>
    )
}
