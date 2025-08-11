// store/cartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Product = {
    id: string
    name: string
    price: number
    quantity: number
    image: string
}

type CartState = {
    cart: Product[]
    addToCart: (product: Product) => void
    incrementQuantity: (id: string) => void
    decrementQuantity: (id: string) => void
    removeFromCart: (id: string) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (product) =>
                set((state) => {
                    const existing = state.cart.find((p) => p.id === product.id)
                    if (existing) {
                        // Incrémente quantité si produit déjà dans le panier
                        return {
                            cart: state.cart.map((p) =>
                                p.id === product.id
                                    ? { ...p, quantity: p.quantity + product.quantity }
                                    : p
                            ),
                        }
                    }
                    // Sinon ajoute produit au panier
                    return { cart: [...state.cart, product] }
                }),

            incrementQuantity: (id) =>
                set((state) => ({
                    cart: state.cart.map((p) =>
                        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
                    ),
                })),

            decrementQuantity: (id) =>
                set((state) => ({
                    cart: state.cart.map((p) =>
                        p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
                    ),
                })),

            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter((p) => p.id !== id),
                })),

            clearCart: () => set({ cart: [] }),
        }),
        { name: 'cart-storage' } // Persistance localStorage
    )
)
