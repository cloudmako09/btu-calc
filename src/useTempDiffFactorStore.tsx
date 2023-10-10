import { create } from "zustand";
import zukeeper from "zukeeper";

interface useTempDiffFactor {
  outdoorTemp: number;
  indoorTemp: number;
  difference: number;
  result: number;
  setOutdoorTemp: (value: number) => void;
  setIndoorTemp: (value: number) => void;
  setDifference: (value: number) => void;
  setResult: (value: number) => void;
}

const useTempDiffFactorStore = create<useTempDiffFactor>(
  zukeeper((set: any, get: any) => ({
    outdoorTemp: 0,
    indoorTemp: 0,
    difference: 0,
    result: 0,
    setOutdoorTemp: (value: any) =>
      set({ outdoorTemp: value, difference: value - get().indoorTemp }),
    setIndoorTemp: (value: any) =>
      set({ indoorTemp: value, difference: value - get().outdoorTemp }),
    setDifference: (value: any) =>
      set({ difference: value - get().outdoorTemp - get().indoorTemp }),
    setResult: () => {
      const result = get().difference / 24;
      set({ result: result });
      console.log("Setting result:", result);
    },
  }))
);

export default useTempDiffFactorStore;
