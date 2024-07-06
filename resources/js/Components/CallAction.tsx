import { Link } from "@inertiajs/react";
import TriangleRight from "./icons/triangleRight";

export default function CallAction() {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-12 space-y-8 text-white bg-gradient-to-r from-primary-500 to-primary-700">
            <h2 className="text-4xl font-bold text-center">¿Necesitas Ayuda?</h2>
            <p className="text-xl text-center">Uno de nuestros asesores te ayudará gustosamente.</p>
            <Link href={route('contact')} className='inline-block px-12 py-4 text-lg transition-colors rounded-full text-primary-500 bg-gray-50 hover:bg-gray-100'>
                Contáctenos
                <TriangleRight color='#4267a9' size={20} />
            </Link>
        </div>
    )
}
