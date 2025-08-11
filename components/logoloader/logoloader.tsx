'use client'

// components/LogoLoader.js
import React from 'react';
import Image from 'next/image'; // Importe le composant Image de Next.js
import './logoloader.css'; // Pour les styles spécifiques au loader

const LogoLoader = () => {
    return (
        <div className="loaderContainer">
            {/* Ton logo ici. Remplace '/your-logo.svg' par le chemin réel de ton logo. */}
            <Image
                src="/images/logo.webp" // Chemin vers ton logo (doit être dans le dossier `public`)
                alt="Mathis Bio Logo"
                width={100} // Largeur de ton logo en pixels
                height={100} // Hauteur de ton logo en pixels
                className="logo"
                priority // Pour charger l'image rapidement
            />
            <div className="spinner"></div> {/* Élément pour une animation de chargement si tu veux */}
        </div>
    );
};

export default LogoLoader;
// components/loaderprovider.tsx
