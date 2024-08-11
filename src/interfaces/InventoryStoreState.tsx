import { InventoryItem } from "./InventoryItem"

export interface InventoryStoreState{
    isLoading: false
    item: InventoryItem[]
    addItem: (newItem: InventoryItem) => void
    removeItem: (itemId: number) => void
    clearItem: () => void
  }