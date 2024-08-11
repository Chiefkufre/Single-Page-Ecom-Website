import { create } from "zustand";



interface PaginationStoreState {
    page: number;
    setPage: (pageNumber: number) => void;
  }
  
  export const usePaginationStore = create<PaginationStoreState>((set) => ({
    page: 1,
    setPage: (pageNumber: number) => set({ page: pageNumber }),
  }));