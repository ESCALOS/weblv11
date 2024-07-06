import {
    MapPinIcon,
    PhoneIcon,

} from "@heroicons/react/24/solid";

import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flex flex-wrap items-start px-4 py-8 space-y-8 bg-blue-700 justify-evenly md:space-y-0">
                <div className="px-4">
                    <img src="/logo.png" className="h-24 brightness-[5]" alt="logo" />
                    <div className="py-4 space-y-2">
                        <div className="flex text-left">
                            <MapPinIcon height={20} fill="white" />
                            <p className="ml-2 text-white">Av. Río Tarica 5738, Los Olivos</p>
                        </div>
                        <div className="flex text-left">
                            <PhoneIcon height={20} fill="white" />
                            <p className="ml-2 text-white">+51 934221322</p>
                        </div>
                        <div className="flex text-left">
                            <PhoneIcon height={20} fill="white" />
                            <p className="ml-2 text-white">+51 934221322</p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <h2 className="text-2xl font-bold text-white">Contáctanos</h2>
                    <div className="py-4 space-y-2">
                        <div className="flex text-left">
                            <MapPinIcon height={20} fill="white" />
                            <p className="ml-2 text-white">Av. Río Tarica 5738, Los Olivos</p>
                        </div>
                        <div className="flex text-left">
                            <PhoneIcon height={20} fill="white" />
                            <p className="ml-2 text-white">+51 934221322</p>
                        </div>
                        <div className="flex text-left">
                            <PhoneIcon height={20} fill="white" />
                            <p className="ml-2 text-white">+51 934221322</p>
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
                        <BsTwitterX size={30} color="white" />
                        </a>
                        <a href="#" target="_blank">
                        <BsInstagram size={30} color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
