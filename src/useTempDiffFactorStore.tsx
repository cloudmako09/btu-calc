import { create } from "zustand";

interface useTempDiffFactor {
  outdoorTemp: number;
  indoorTemp: number;
  setOutdoorTemp: (value: number) => void;
  setIndoorTemp: (value: number) => void;
}

const useTempDiffFactorStore = create<useTempDiffFactor>((set: any) => ({
  outdoorTemp: 0,
  indoorTemp: 0,
  setOutdoorTemp: (value) => set({ outdoorTemp: value }),
  setIndoorTemp: (value) => set({ indoorTemp: value }),
}));

export default useTempDiffFactorStore;
