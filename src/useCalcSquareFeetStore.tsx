import { create } from "zustand";
import zukeeper from "zukeeper";

interface useCalcSquareFeet {
  width: number;
  length: number;
  height: number;
  setWidth: (value: number) => void;
  setLength: (value: number) => void;
  setHeight: (value: number) => void;
  getCalcResult: () => number;
}

const useCalcSquareFeetStore = create<useCalcSquareFeet>(
  (set: any, get: any) => ({
    width: 0,
    length: 0,
    height: 0,
    setWidth: (value) => set({ width: value }),
    setLength: (value) => set({ length: value }),
    setHeight: (value) => set({ height: value }),
    getCalcResult: () => get().width * get().length * get().height,
  })
);

export default useCalcSquareFeetStore;
