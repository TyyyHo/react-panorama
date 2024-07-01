import { create } from "zustand";

export type HintStore = {
  isHintTrigger: boolean;
  setHintTrigger: (status: boolean) => void;
};

export const useHintStore = create<HintStore>((set) => ({
  isHintTrigger: false,
  setHintTrigger: (status: boolean) => set({ isHintTrigger: status }),
}));
