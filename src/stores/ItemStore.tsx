import { create} from 'zustand'
import { InventoryItem} from '../interfaces/InventoryItem';
import { InventoryStoreState } from '../interfaces/InventoryStoreState';



export const useInventoryStore = create<InventoryStoreState>((set) => ({
    isLoading: false,
    item: [] as InventoryItem[],
    addItem: (newItem: InventoryItem | InventoryItem[]) => set((state) => ({
        item: Array.isArray(newItem) ? [...state.item, ...newItem] : [...state.item, newItem]
      })),
    removeItem: (itemId: number) => set((state) => ({item: state.item.filter((item) => item.id != itemId)})),
    clearItem: () => set({item: []})
  }))


//   const itemSelector = (state: { item: any; }) => state.item
//   const addItemSelector = (state: { addItem: any; }) => state.addItem
//   export const itemCart  = useInventoryStore(itemSelector)
//   export const addItem  = useInventoryStore(addItemSelector)
