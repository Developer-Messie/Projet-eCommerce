"use client"; // <-- C'est un Client Component !

import { ReactNode, useEffect, useState } from 'react';
import LogoLoader from './logoloader'; // Importe ton composant LogoLoader


type LoaderProviderProps = {
    children: ReactNode;
};

const LoaderProvider = ({ children }: LoaderProviderProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let temps = setTimeout(() => {
            setLoading(false); // Met à jour l'état pour indiquer que le chargement est terminé
        }, 2000); // Simule un chargement de 1 seconde
       
        return () => clearTimeout(temps); // Nettoie le timeout si le composant est démonté avant la fin du chargement
    }, [loading]); // Dépendances

    return (
        <>
            {loading ? <LogoLoader /> : children}
        </>
    );
};

export default LoaderProvider;