import { create } from "zustand";
import zukeeper from "zukeeper";

interface useInsulFactor {
  insul: number;
  setInsul: (value: number) => void;
}

const useInsulFactorStore = create<useInsulFactor>(
  zukeeper((set: any) => ({
    insul: 0,
    setInsul: (value: any) => set({ insul: value }),
  }))
);

// Assign the store to window.store for debugging
if (process.env.NODE_ENV === "development") {
  (window as any).store = useInsulFactorStore;
}

export default useInsulFactorStore;
