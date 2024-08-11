import {create} from "zustand";
import { CartState } from "../interfaces/CartState";
// import { CartItemInterface } from "../interfaces/CartItemInterface";
import { Product } from "../interfaces/ProductModel";

export const useCartStore = create<CartState>((set) => ({
  isLoading: false,
  cart: [] as Product[],
  addToCart: (newItem) => set((state) => {
      const existingItemIndex = state.cart.findIndex(
          (item) => item.id === newItem.id
      );
      if (existingItemIndex === -1) {
          return { cart: [...state.cart, { ...newItem, quantity: 1 }] };
      } else {
          const updatedCart = state.cart.map(item =>
              item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
          );
          return { cart: updatedCart };
      }
  }),
  updateItemQuantity: (itemId, quantity) => set((state) => ({
      cart: state.cart.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
      )
  })),
  removeFromCart: (itemId) => set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId)
  })),
  clearCart: () => set({ cart: [] }),
}));

  

