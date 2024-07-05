import NavbarWithMegaMenu from '@/Components/material/Nabvar';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen">
            <NavbarWithMegaMenu />
            <main>
                {children}
            </main>
        </div>
    );
}
