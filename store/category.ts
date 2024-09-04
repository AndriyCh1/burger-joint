import { create } from "zustand";

type State = {
  activeId: number;
  setActiveId: (id: number) => void;
};

export const useCategoryStore = create<State>()((set) => ({
  activeId: 0,
  setActiveId: (id) => set({ activeId: id }),
}));
