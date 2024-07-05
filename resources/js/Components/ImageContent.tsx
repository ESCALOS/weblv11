import { ReactNode } from "react";

export default function ImageContent({ imgPath, title, children }: { imgPath: string, title: string, children?: ReactNode|undefined }) {
    return (
        <div className="relative w-full" >
            <img src={imgPath} alt={title} className="absolute z-0 object-cover w-full h-full" />
            <div className="absolute inset-0 z-10 bg-black opacity-70 mix-blend-multiply"></div>
            <div className="relative inset-0 z-20 w-full h-full py-4">
                {children}
            </div>
        </div>
    )
}
