import { create } from "zustand";
import { client } from "../sanity/sanity";
import { persist } from "zustand/middleware";
import { EVENTS_QUERY } from "../sanity/sanityQueries";
import type { EVENTS_QUERYResult } from "../../../sanity.types";

type AnimationStore = {
  animation: string | null;
  setAnimationState: (newAnimation: string) => void;
};

type LoaderStore = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

type ApiData = {
  projects: EVENTS_QUERYResult;
  isLoading: boolean;
  error: any;
  fetchData: () => void;
};

export const useAnimationStateStore = create<AnimationStore>((set) => ({
  animation: "idle",
  setAnimationState: (newAnimation: string) => set({ animation: newAnimation }),
}));

export const useLoaderStore = create<LoaderStore>((set) => ({
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

export const useApiData = create<ApiData>((set) => ({
  projects: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });

    try {
      const response = await client.fetch(EVENTS_QUERY);
      set({ projects: response });
    } catch (err: any) {
      console.error("Error fetching all projects: " + err);
      set({ projects: [], error: err.message, isLoading: false });
    }
  },
}));
