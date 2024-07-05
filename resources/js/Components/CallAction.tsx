import { Link } from "@inertiajs/react";
import TriangleRight from "./icons/triangleRight";

export default function CallAction() {
    return (
        <div className="flex flex-col items-center justify-center w-full py-12 space-y-8 text-white bg-gradient-to-r from-blue-600 to-blue-900">
            <h2 className="text-4xl font-bold">¿Necesitas Ayuda?</h2>
            <p className="text-xl">Uno de nuestros asesores te ayudará gustosamente.</p>
            <Link href={route('contact')} className='inline-block px-12 py-4 text-lg transition-colors bg-green-500 rounded-full hover:bg-green-600'>
                Contáctenos
                <TriangleRight color='white' size={20} />
            </Link>
        </div>
    )
}
