import NavbarWithMegaMenu from '@/Components/material/Nabvar';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen">
            <NavbarWithMegaMenu />
            <main>
            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>
            </main>
        </div>
    );
}
