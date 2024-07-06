import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon

} from "@heroicons/react/24/solid";

import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flex flex-wrap items-start px-4 py-8 space-y-8 bg-primary-500 justify-evenly md:space-y-0">
                <div className="max-w-xs px-4">
                    <img src="/logo.png" className="h-24 brightness-[5]" alt="logo" />
                    <p className="py-4 space-y-2 text-justify text-white">
                        En SERAM J & M S.A.C. ofrecemos asesoría y consultoría ambiental, seguridad y salud ocupacional, comprometidos con la eficiencia y la satisfacción del cliente a nivel nacional.
                    </p>
                </div>
                <div className="px-4">
                    <h2 className="mb-4 text-2xl font-bold text-white">Contáctanos</h2>
                    <div className="py-4 space-y-6">
                        <div className="flex text-left">
                            <MapPinIcon height={20} fill="white" />
                            <p className="ml-2 text-white">Ica, Ica, Ica</p>
                        </div>
                        <div className="flex text-left">
                            <PhoneIcon height={20} fill="white" />
                            <p className="ml-2 text-white">+51 908801290</p>
                        </div>
                        <div className="flex text-left">
                            <EnvelopeIcon height={20} fill="white" />
                            <p className="ml-2 text-white">jhernandez@seramjym.com</p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <h2 className="text-2xl font-bold text-white">Síguenos</h2>
                    <div className="flex items-start gap-4 py-4">
                        <a href="#" target="_blank">
                        <BsFacebook size={30} color="white" />
                        </a>
                        <a href="#" target="_blank">
                        <BsLinkedin size={30} color="white" />
                        </a>
                        <a href="#" target="_blank">
                        <BsWhatsapp size={30} color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
