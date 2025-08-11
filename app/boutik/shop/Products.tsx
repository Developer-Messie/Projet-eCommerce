'use client';

import React, { useState, useEffect } from 'react';
import './products.css';
import { ProduitType } from '@/app/typage';

// Mappe les catégories pour l'affichage des boutons de filtre
const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'complement-alimentaire', name: 'Compléments Alimentaires' },
    { id: 'aliment-dietetique', name: 'Aliments Diététiques' },
    { id: 'kit-maladies', name: 'Kits Maladies' },
    { id: 'cosmetique', name: 'Cosmétiques' },
    { id: 'entretien-maison', name: 'Entretien de Maison' },
    { id: 'hygiene-femme', name: 'Hygiène Femme' },
    { id: 'bucco-dentaire-agricole', name: 'Bucco-dentaires & Agricoles' },
];

function Products() {
    const [allProducts, setAllProducts] = useState<ProduitType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // L'URL de votre route Next.js pour récupérer tous les produits
                const response = await fetch('/api-server/get-produits-all');

                if (!response.ok) {
                    throw new Error('Erreur de réseau ou du serveur');
                }

                const result = await response.json();

                if (result.message === "Produits récupérés avec succès.") {
                    setAllProducts(result.data);
                } else {
                    throw new Error(result.message || "Échec de la récupération des produits.");
                }

            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Filtrer les produits en fonction de la catégorie sélectionnée
    const filteredProducts = selectedCategory === 'all'
        ? allProducts
        : allProducts.filter(product => product.category === selectedCategory);

    if (loading) {
        return <div className="text-center mt-5">Chargement des produits...</div>;
    }

    if (error) {
        return <div className="text-center mt-5 text-danger">Erreur : {error}</div>;
    }

    return (
        <section className="listOfProducts container mt-5">
            <div className="wrapper">
                <div className="products text-center mb-4">
                    <h4>Nos produits bio et kits maladies</h4>
                    <p>Découvrez notre gamme de produits de qualité supérieure, conçus pour améliorer votre bien-être et votre santé.</p>
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`btn ${selectedCategory === category.id ? 'btn-success' : 'btn-outline-success'}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="row card-list g-4 justify-content-center">
                    {filteredProducts.map(product => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product._id}>
                            <div className="card rounded-3 h-100">
                                <img src={product.image} className="card-img-top" alt={product.nomProduit} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.nomProduit}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <div className="mt-auto">
                                        <a href="#" className="card-link">Voir plus</a>
                                        <a href="#" className="card-link">Ajouter au panier</a>
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

export default Products;