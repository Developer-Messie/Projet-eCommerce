import React from 'react'
import Link from 'next/link'
import './PanierVide.css'


export default function PanierVide() {

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>🛒 PANIER VIDE</h1>
            <p>Aucun produit ajouté</p>
            <Link href="/" className="btn btn-warning mt-3">Retour à la boutique</Link>
        </div>
    )
}
