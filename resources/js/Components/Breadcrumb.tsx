import { TBreadcrumb } from '@/types';

export default function Breadcrumb({ imgPath, title }: TBreadcrumb) {
    return (
        <div className="relative flex items-center justify-center h-64">
            <img src={imgPath} alt="nosotros" className="object-cover w-full h-full"/>
            <div className="absolute inset-0 bg-primary-500 opacity-70 mix-blend-multiply"></div>
            <h3 className="absolute px-6 text-4xl font-bold text-center text-white">{title}</h3>
        </div>
    )
}
