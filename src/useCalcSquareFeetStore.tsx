import { create } from "zustand";
import zukeeper from "zukeeper";

interface useCalcSquareFeet {
  width: number;
  length: number;
  height: number;
  result: number;
  setWidth: (value: number) => void;
  setLength: (value: number) => void;
  setHeight: (value: number) => void;
}

const useCalcSquareFeetStore = create<useCalcSquareFeet>(
  zukeeper((set: any, get: any) => ({
    width: 0,
    length: 0,
    height: 0,
    result: 0,
    setWidth: (value: any) =>
      set({ width: value, result: value * get().height * get().length }),
    setLength: (value: any) =>
      set({ length: value, result: value * get().width * get().height }),
    setHeight: (value: any) =>
      set({ height: value, result: value * get().width * get().length }),
  }))
);

export default useCalcSquareFeetStore;
