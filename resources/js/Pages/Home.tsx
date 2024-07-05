import { lazy, Suspense } from "react"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"
import Loading from "@/Components/Loading"

const MainSlider = lazy(() => import("@/Components/home/MainSlider"))

export default function Home() {
    return (
        <Layout>
            <Head title="Inicio" />
            <div className="space-y-8">
            <div className="h-[48rem]">
            <Suspense fallback={<Loading />}>
                <MainSlider />
            </Suspense>
            </div>

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                Servicios
            </div>
            </div>
        </Layout>
    )
}
