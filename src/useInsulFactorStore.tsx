import { create } from "zustand";
import zukeeper from "zukeeper";

interface useInsulFactor {
  insul: number;
  wellInsul: number;
  poorlyInsul: number;
  notInsul: number;
  setInsul: (value: number) => void;
  setWellInsul: (value: number) => void;
  setPoorlyInsul: (value: number) => void;
  setNotInsul: (value: number) => void;
}

const useInsulFactorStore = create<useInsulFactor>(
  zukeeper((set: any) => ({
    insul: 0,
    wellInsul: 0,
    poorlyInsul: 0,
    notInsul: 0,
    setInsul: (value: any) => set({ insul: value }),
    setWellInsul: (value: any) => set({ wellInsul: value }),
    setPoorlyInsul: (value: any) => set({ poorlyInsul: value }),
    setNotInsul: (value: any) => set({ notInsul: value }),
  }))
);

// Assign the store to window.store for debugging
if (process.env.NODE_ENV === "development") {
  (window as any).store = useInsulFactorStore;
}

export default useInsulFactorStore;
