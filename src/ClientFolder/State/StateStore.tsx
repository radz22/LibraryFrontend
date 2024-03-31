import { create } from "zustand";

type State = {
  inputValue: string;
};

type Action = {
  setInputValue: (value: string) => void;
};

export const todoStore = create<State & Action>()((set) => ({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
}));
