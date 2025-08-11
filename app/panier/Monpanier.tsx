"use client"

import React, { useEffect, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '../../store/cartStore'
import Link from 'next/link'
import './Monpanier.css'


function Monpanier() {

    const [isPending, startTransition] = useTransition()

    const cart = useCartStore((state) => state.cart)
    const router = useRouter()

    // Noms des méthodes synchronisés avec ton store Zustand
    const incrementQuantity = useCartStore((state) => state.incrementQuantity)
    const decrementQuantity = useCartStore((state) => state.decrementQuantity)
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const clearCart = useCartStore((state) => state.clearCart)

    const deliveryFee = 1000
    const tva = 0

    const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const total = subTotal + deliveryFee + tva

    // Redirection si panier vide
    useEffect(() => {
        if (cart.length === 0) {
            router.replace('/panier/panier-vide')  // Remplace l'historique
        }
    }, [cart, router])

    if (cart.length === 0) {
        return null // Ou spinner/loading
    }

    //* Au clic sur Commander
    const handleCommander = () => {

        startTransition(() => {
            router.push('/panier/merci')
        })

        setTimeout(() => {
            clearCart()         // puis on vide le panier après 500ms
        }, 500)
    }


    return (
        <div className="panier-container">
            <h3>Votre panier : "Finalisez Votre Commande !" 🛒✨</h3>

            <div className="panier-content">
                <div className="produits-section">
                    <div className="produits-header">
                        <span className="header-label">Produits</span>
                        <span className="header-label">Qté</span>
                        <span className="header-label">Prix</span>
                    </div>

                    {cart.map((item) => (
                        <div className="produit-item" key={item.id}>
                            <div className="product-details">
                                <img src={item.image} alt={item.name} className="product-image" />
                                <div className="product-info">
                                    <span className="product-date">{new Date().toLocaleDateString('fr-FR')}</span>
                                    <span className="product-name">{item.name}</span>
                                </div>
                            </div>

                            <div className="quantity-controls">
                                <button className="qty-button" onClick={() => decrementQuantity(item.id)}>-</button>
                                <span className="quantity-display">{item.quantity}</span>
                                <button className="qty-button" onClick={() => incrementQuantity(item.id)}>+</button>
                            </div>

                            <div className="product-price">
                                <span>{(item.price * item.quantity).toLocaleString('fr-FR')} FCFA</span>
                                <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>✕</button>
                            </div>
                        </div>
                    ))}

                    <div className="action-buttons">
                        <Link href="/" className="continue-shopping-button">+ Continuer les achats</Link>
                        <button className="empty-cart-button" onClick={clearCart}>Vider le panier</button>
                    </div>
                </div>

                <div className="resumeb-section">
                    <h2>Résumé du panier</h2>
                    <div className="resumeb-item">
                        <span>Sous Total</span>
                        <span>{subTotal.toLocaleString('fr-FR')} FCFA</span>
                    </div>
                    <div className="resumeb-item">
                        <span>Livraison</span>
                        <span>{deliveryFee.toLocaleString('fr-FR')} FCFA</span>
                    </div>
                    <div className="resumeb-item">
                        <span>TVA</span>
                        <span>{tva.toLocaleString('fr-FR')} FCFA</span>
                    </div>
                    <div className="resumeb-total">
                        <span>Total</span>
                        <span>{total.toLocaleString('fr-FR')} FCFA</span>
                    </div>
                    <button className="commander-button" onClick={handleCommander}>Commander</button>
                </div>
            </div>
        </div>
    )
}

export default Monpanier
