import { create } from "zustand";

interface PriceStoreState{
    totalPrice: number
    quantity: number
    setQuantity: (totalPrice: number) => void
    setTotalPrice: (price: number) => void;
    subtractFromTotalPrice: (price: number) => void;
    resetTotalPrice: () => void;
}

export const usePriceStore = create<PriceStoreState>((set) => ({
    totalPrice: 0,
    quantity: 1,
    setQuantity: (quantity:number) => set({quantity}),
    setTotalPrice: (price: number) => set((state) => ({
        totalPrice: state.totalPrice + price,
      })),
      subtractFromTotalPrice: (price: number) => set((state) => ({
        totalPrice: state.totalPrice - price,
      })),
    resetTotalPrice: () => set({totalPrice: 0})
}))
