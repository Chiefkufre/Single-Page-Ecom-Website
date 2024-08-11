import{ create} from 'zustand';

interface ModalStoreState {
    isModalOpen: boolean;
    setModalState: (state: boolean) => void;
  }
export const useModalStore = create<ModalStoreState>((set) => ({
  isModalOpen: false,
  setModalState: (state: boolean) => set({ isModalOpen: state }),
}));
