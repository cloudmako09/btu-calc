import { create } from "zustand";

interface useCalcSquareFeet {
  width: number;
  length: number;
  height: number;
  setWidth: (value: number) => void;
  setLength: (value: number) => void;
  setHeight: (value: number) => void;
}

const useCalcSquareFeetStore = create<useCalcSquareFeet>((set: any) => ({
  width: 0,
  length: 0,
  height: 0,
  setWidth: (value) => set({ width: value }),
  setLength: (value) => set({ length: value }),
  setHeight: (value) => set({ height: value }),
}));

export default useCalcSquareFeetStore;
