import Breadcrumb from "@/Components/Breadcrumb"
import ContactForm from "@/Components/ContactForm"
import MapGoogle from "@/Components/MapGoogle"
import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"

export default function Contact() {
    return (
        <Layout>
            <Head title="Contáctenos" />
            <Breadcrumb imgPath="/images/banner1.png" title="Contáctenos" />
            <ContactForm />
            <MapGoogle />
        </Layout>
    )
}
