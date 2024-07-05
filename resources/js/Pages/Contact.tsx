import Breadcrumb from "@/Components/Breadcrumb"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

export default function Home() {
    return (
        <Layout>
            <Head title="Contáctenos" />
            <Breadcrumb imgPath="/images/banner1.png" title="Contáctenos" />
        </Layout>
    )
}
