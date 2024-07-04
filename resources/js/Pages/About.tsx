import Layout from "@/Layouts/Layout"
import { Head } from "@inertiajs/react"
import React from "react";
import {
    CheckCircleIcon,
  } from "@heroicons/react/24/solid";

export default function Home() {
    const doingList = [
        "Instrumentos de Gestión Ambiental",
        "Monitoreos Ambientales",
        "Monitoreos Ocupacionales",
        "Estudios sociales",
        "Otros servicios adicionales"
    ]
    return (
        <Layout>
            <Head title="Inicio" />
            <div className="space-y-16">
                <div className="grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto lg:grid-cols-2">
                    <div>
                        <p className="text-slate-500 font-extralight">Presentación Corporativa</p>
                        <h2 className="mt-1 mb-4 text-4xl font-black">¿Quiénes somos?</h2>
                        <p className="text-lg text-justify text-zinc-500 lg:pr-8">
                            <span className="font-bold">SERVICIOS AMBIENTALES J & M S.A.C. </span>
                            <span className="font-light">
                                es una empresa identificada con el
                            </span>
                            <span className="font-bold"> RUC 20608187619 </span>
                            <span className="font-light">
                                que brinda servicios de asesoría y consultoría en temas relacionados a medio ambiente, seguridad y salud ocupacional a nivel nacional, con u equipo técnico consolidado que busca siempre la mejora continua en términos ambientales de sus clientes.
                            </span>
                        </p>
                    </div>
                    <img className="object-cover h-full rounded-md" src="/images/banner1.png" alt="logo" />
                </div>
                <hr className="my-16 border-2" />
                <div className="grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto lg:grid-cols-2">
                    <img className="order-2 object-cover h-full rounded-md lg:order-1" src="/images/banner1.png" alt="logo" />
                    <div className="order-1 lg:order-2">
                        <h2 className="mt-1 mb-4 text-4xl font-black">¿Qué hacemos?</h2>
                        <p className="text-lg font-light text-justify text-zinc-500 lg:pr-8">
                            Nos enorgullece contar con un equipo técnico altamente capacitado y experimentado, capaz de adaptarse a las necesidades expecíficas de cada clientey sector.
                        </p>
                        <ul>
                            {
                                doingList.map((item, index) => (
                                    <li key={index} className="mt-2 text-lg font-light text-justify text">
                                        <CheckCircleIcon strokeWidth={2} className="inline w-6 h-6 mr-4 text-gray-500"/>
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
