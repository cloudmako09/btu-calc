import { create } from "zustand";

interface useInsulFactor {
  insul: number;
  setInsul: (value: number) => void;
  // getInsul: () => number;
}

const useInsulFactorStore = create<useInsulFactor>((set: any, get: any) => ({
  insul: 0,
  setInsul: (value: any) => set({ insul: value }),
  // getInsul: () => get().insul,
}));

export default useInsulFactorStore;
