import { create } from "zustand";

type AnimationStore = {
  animation: string | null;
  setAnimationState: (newAnimation: string) => void;
};

type LoaderStore = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

export const useAnimationStateStore = create<AnimationStore>((set) => ({
  animation: "idle",
  setAnimationState: (newAnimation: string) => set({ animation: newAnimation }),
}));

export const useLoaderStore = create<LoaderStore>((set) => ({
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
