import { create } from 'zustand';

interface ProductI {
  title: string;
  newPrice: number;
  prevPrice?: number;
  discountPercent?: number;
  ratting: number;
  imgSrc: string;
  description: string;
}

// Define the type for the store state
interface StoreState {
  products: ProductI[];
  setProducts: (newProducts: ProductI[]) => void;
}

// Define the Zustand store
const useStore = create<StoreState>((set) => ({
  products: [],
  setProducts: (newProducts) => set(() => ({ products: newProducts })),
}));

export default useStore;
