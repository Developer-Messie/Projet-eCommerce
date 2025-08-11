'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from './spinner/spinner';

const ProtectedRouteClient = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (!storedUser) {
            router.push('/connexion');
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

export default ProtectedRouteClient;
