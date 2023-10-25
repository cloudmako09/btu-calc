import { create } from "zustand";

interface useTempDiffFactor {
  outdoorTemp: number;
  indoorTemp: number;
  setOutdoorTemp: (value: number) => void;
  setIndoorTemp: (value: number) => void;
  getDifference: () => number;
  getTempDiffResult: () => number;
}

const useTempDiffFactorStore = create<useTempDiffFactor>((set, get) => ({
  outdoorTemp: 0,
  indoorTemp: 0,
  setOutdoorTemp: (value) => set({ outdoorTemp: value }),
  setIndoorTemp: (value) => set({ indoorTemp: value }),
  getDifference: () => get().outdoorTemp - get().indoorTemp,
  getTempDiffResult: () => get().getDifference() * 0.02 + 0.2,
}));

export default useTempDiffFactorStore;
