import React from "react";
import { motion } from "framer-motion"
import { Link, usePage } from '@inertiajs/react'
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
    BsBricks,
    BsTools,
    BsThermometerHalf,
    BsFilesAlt,
} from "react-icons/bs";

import {
    FaSeedling
} from "react-icons/fa";

const navListMenuItems = [
  {
    title: "Instrumentos de Gestión Ambiental",
    icon: <BsTools />,
    route: route('services.service1')
  },
  {
    title: "Servicios de Monitoreos Ambientales",
    icon: <FaSeedling />,
    route: route('services.service2')
  },
  {
    title: "Servicios de Monitoreos Ocupacionales",
    icon: <BsThermometerHalf />,
    route: route('services.service3')
  },
  {
    title: "Construcción de Sistemas de Tratamiento",
    icon: <BsBricks />,
    route: route('services.service4')
  },
  {
    title: "Elaboración de Expedientes Técnicos",
    icon: <BsFilesAlt />,
    route: route('services.service5')
  }
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const {component} = usePage()

    return (
        <React.Fragment>
            <div className="hidden lg:block relative"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}>
                <div
                    className={`flex items-center justify-center nav-item cursor-pointer ${component.startsWith('Services') ? 'text-primary-500' : 'text-gray-700'}`}
                >
                    Servicios
                    <ChevronDownIcon height={15} className={`ml-1 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#fff',
                        padding: '.5rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        pointerEvents: isMenuOpen ? 'auto' : 'none',
                        zIndex: 20,
                        width: '20rem'
                    }}
                >
                    <div className="flex items-center justify-start flex-col p-4">
                        {
                            navListMenuItems.map((item,index) => (
                                <Link className="flex justify-start items-center w-full py-2 px-4 align-middle hover:bg-gray-200 rounded-md" href={item.route} key={index}>
                                    <span className="inline-block p-2 bg-gray-200 rounded-md">
                                    {item.icon}
                                    </span>
                                    <span className="inline-block ml-2 text-sm font-medium">{item.title}</span>
                                </Link>
                            ))
                        }
                    </div>
                </motion.div>
            </div>
            {/* Versión Movil */}
            <div className="w-full lg:hidden">
                <div
                    className={`flex items-center nav-item cursor-pointer ${component === 'Home' ? 'text-primary-500' : 'text-gray-700'}`}
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                >
                    Servicios
                    <ChevronDownIcon height={15} className={`ml-1 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                </div>
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ overflow: 'hidden' }}
                    className="block lg:hidden"
                    >
                    <div className="flex items-center justify-start flex-col p-4">
                        {
                            navListMenuItems.map((item,index) => (
                                <Link className="flex justify-start items-center w-full py-2 px-4 align-middle hover:bg-gray-200 rounded-md" href={item.route} key={index}>
                                    <span className="inline-block p-2 bg-gray-200 rounded-md">
                                    {item.icon}
                                    </span>
                                    <span className="inline-block ml-2 text-sm font-medium">{item.title}</span>
                                </Link>
                            ))
                        }
                    </div>
                </motion.div>
            </div>
        </React.Fragment>
    )
}


function NavList() {
    const {component} = usePage()
    return (
        <React.Fragment>
            <Link className={`nav-item ${component === 'Home' ? 'text-primary-500' : 'text-gray-700'}`} href={route('home')}>
                Inicio
            </Link>
            <Link className={`nav-item ${component === 'About' ? 'text-primary-500' : 'text-gray-700'}`} href={route('about')}>
                Nosotros
            </Link>
            <NavListMenu />
            <Link className={`nav-item ${component === 'Client' ? 'text-primary-500' : 'text-gray-700'}`} href={route('client')}>
                Clientes
            </Link>
            <Link className={`nav-item ${component === 'Contact' ? 'text-primary-500' : 'text-gray-700'}`} href={route('contact')}>
                Contáctenos
            </Link>
        </React.Fragment>
    )
}

export default function Nabvar() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <>
    <nav className="px-4 mx-auto my-4">
      <div className="flex items-center justify-between lg:justify-around text-blue-gray-900">
        <Link href={route('home')}>
            <div
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
            >
            <img className="h-16" src="/logo.png" alt="Logo Servicios Ambientales" />
            </div>
        </Link>
        <div className="hidden lg:flex items-center justify-center px-4 gap-4">
            <NavList />
        </div>
        <motion.button
            className="lg:hidden p-2 rounded-md hover:bg-gray-200"
            onClick={() =>setOpenNav(!openNav)}>
            {
                openNav ? <XMarkIcon className="w-6 h-6" strokeWidth={2} />
                : <Bars3Icon className="w-6 h-6" strokeWidth={2} />

            }
        </motion.button>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: openNav ? 'auto' : 0 }}
        transition={{ duration: 0.5 }}
        style={{ overflow: 'hidden' }}
        >
        <div className="flex gap-1 items-center justify-center flex-col py-4">
            <NavList />
        </div>
        </motion.div>
    </nav>
    </>
  );
}
