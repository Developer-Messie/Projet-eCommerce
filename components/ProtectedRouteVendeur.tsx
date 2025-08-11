'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from './spinner/spinner';

const ProtectedRouteVendeur = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user') || null;
        if (!storedUser) {
            router.push('/connexion');
            return;
        }
        const user = JSON.parse(storedUser);

        if (user?.typeUser !== 'admin') {
            router.push('/client/dashclient');
            return;
        } else {
            setLoading(false);
        }

    }, [loading]);

    if (loading) {
        return <Spinner />; // ou un spinner
    } else {
        return <>{children}</>;
    }
};

export default ProtectedRouteVendeur;
