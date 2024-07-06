import Breadcrumb from "@/Components/Breadcrumb"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

export default function Home() {
    return (
        <Layout>
            <Head title="Clientes" />
            <Breadcrumb imgPath="/images/banner5.png" title="Clientes" />
        </Layout>
    )
}
