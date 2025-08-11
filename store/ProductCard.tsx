
//  Composant Ajouter au panier

import React from 'react'
import { useCartStore } from '../store/cartStore'

const ProductCard = () => {
    const addToCart = useCartStore((state) => state.addToCart)

    const handleAdd = () => {
        addToCart({
            id: '1',
            name: 'Redmi A3X 128GB',
            price: 147000,
            quantity: 1,
            image: '/path/to/your/redmi-a3x-image.png',
        })
    }

    return <button onClick={handleAdd}>AJOUTER AU PANIER</button>
}

export default ProductCard
