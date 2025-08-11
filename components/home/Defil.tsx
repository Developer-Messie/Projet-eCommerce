'use client'

import React, { useState, useEffect } from 'react';
import './Defil.css';
import { ProduitType } from '@/app/typage';
import Image from 'next/image';
import { FormatPrix } from '@/controllers/formatprix';
import { HiEye } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';
import AddToCartButton from '@/store/AddToCartButton';

// Assuming your component is inside a Next.js app, 
// the API route will be at this path.
const API_URL = '/api-server/get-produits-all';

function Defil() {
    // const [produits, setProduits] = useState([]);
    const [produits, setProduits] = useState<ProduitType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                // Fetch data from your Next.js API route
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error('La réponse du réseau n\'est pas bonne');
                }

                const result = await response.json();

                // Set the 'data' array from the API response to your state
                setProduits(result.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduits();
    }, []); // L'array de dépendances vide garantit que ce hook s'exécute une seule fois

    if (loading) {
        return <p className='text-center'>Chargement des produits...</p>;
    }

    // if (error) {
    //     return <p>Erreur lors du chargement des produits : {error.message}</p>;
    // }
    if (error) {
        // Assertir (affirmer) que l'objet 'error' est de type Error
        return <p>Erreur lors du chargement des produits : {(error as Error).message}</p>;
    }

    // Check if produits is an array before using .map()
    if (!Array.isArray(produits) || produits.length === 0) {
        return <p>Aucun produit à afficher.</p>;
    }

    // Dupliquez les produits pour la boucle infinie si nécessaire
    const duplicatedProduits = [...produits, ...produits];

    return (
        <section className="container defil mt-5">
            <h4 className='title'>Produits récents</h4>
            <div className="slider-wrapper">
                <div className="slider">
                    {/* Mettez à jour le mapping pour utiliser les données de l'API */}
                    {duplicatedProduits.map((produit, index) => (
                        <div className="slide-card" key={index}>
                            <div className="card mb-3 h-100 d-flex justify-content-center shadow-sm">
                                <div className="row g-0 h-100 d-flex justify-content-between align-items-center align-middle">
                                    <div className="col-4 mx-auto text-danger">
                                        {/* Utiliser 'produit.image' au lieu de 'produit.img' */}
                                        <Image
                                            src={produit.image || '/images/placeholder.png'}
                                            width={150}
                                            height={200}
                                            className="rounded-start object-fit-cover mx-auto"
                                            alt={produit.nomProduit || 'Produit'}
                                        />
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        <div className="card-body w-75 mx-auto ms-5">
                                            {/* Utiliser 'produit.nomProduit' au lieu de 'produit.title' */}
                                            <h5 className="card-title">{produit.nomProduit}</h5>
                                            {/* Utiliser 'produit.description' au lieu de 'produit.text' */}
                                            <p className="card-text">{produit.description}</p>
                                            {/* Utiliser 'produit.description' au lieu de 'produit.text' */}
                                            <p className="card-text">{FormatPrix(produit.prix || 0)}</p>
                                            {/* Si vous avez une date dans votre BDD, l'utiliser ici */}
                                            <div className="action-butt d-flex justify-content-center justify-content-lg-start align-items-center mb-2 gap-2">
                                                <div className="item-details btn btn-outline-primary">
                                                    <button type='button' title='button' style={{ color: '#3B82F6', display: 'flex', alignItems: 'center', gap: '6px', border: 'none', background: 'none' }}>
                                                        <HiEye size={25} />
                                                    </button>
                                                </div>
                                                <div className="cart">
                                                    {/* Remplacez votre bouton existant par ce code */}
                                                    <AddToCartButton
                                                        id={String(produit._id || '')}
                                                        name={String(produit.nomProduit || '')}
                                                        price={Number(produit.prix || 0)}
                                                        image={String(produit.image || '')}
                                                    />
                                                </div>
                                            </div>

                                            <p className="card-text">
                                                <small className="text-muted">
                                                    {new Date(produit.dateAdd!).toLocaleDateString('fr-FR')} {/* Affiche la date formatée */}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Defil;