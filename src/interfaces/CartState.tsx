// import { CartItemInterface } from "./CartItemInterface"
import { Product } from "./ProductModel"

export interface CartState{
    isLoading: false
    cart: Product[]
    updateItemQuantity: (itemId: number, quantity: number) => void;
    addToCart: (newItem: any) => void
    removeFromCart: (itemId: number) => void
    clearCart: () => void
  }