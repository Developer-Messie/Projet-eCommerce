
"use client"

import { FaShoppingCart } from 'react-icons/fa'
// components/AddToCartButton.tsx
import { useCartStore } from '../store/cartStore'

type Props = {
    id: string
    name: string
    price: number
    image: string
    quantity?: number
}

const AddToCartButton = ({ id, name, price, image, quantity = 1 }: Props) => {
    const addToCart = useCartStore((state) => state.addToCart)

    const handleAddToCart = () => {
        addToCart({ id, name, price, image, quantity })
    }

    return (
        <a
            href="#"
            className="fw-bold text-decoration-none card-link btn btn-warning rounded-bottom"
            onClick={(e) => {
                e.preventDefault()
                handleAddToCart()
            }}
        >
            <button style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px', border: 'none', background: 'none' }}>
                <FaShoppingCart size={25} />
            </button>
        </a>
    )
}

export default AddToCartButton

