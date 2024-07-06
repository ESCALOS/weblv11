import CallAction from '@/Components/CallAction';
import Footer from '@/Components/Footer';
import NavbarWithMegaMenu from '@/Components/material/Nabvar';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen">
            <NavbarWithMegaMenu />
            <main>
                {children}
                <CallAction/>
            </main>
            <Footer />
        </div>
    );
}
