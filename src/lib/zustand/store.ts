import { create } from "zustand";
import { client } from "../sanity/sanity";
import { persist } from "zustand/middleware";
import { EVENTS_QUERY } from "../sanity/sanityQueries";

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

export const useApiDataStore = create(
  persist(
    (set) => ({
      data: null,
      loading: false,
      error: null,

      fetchData: async () => {
        set({ loading: true, error: null });
        try {
          const projects = await client.fetch(EVENTS_QUERY);
          set({ data: projects, loading: false });
          return projects || [];
        } catch (error) {
          console.error("Error fetching all projects:", error);
          set({ data: [], error: error.message, loading: false });
        }
      },

      // Add any other actions you need
      resetStore: () => {
        set({ data: null, loading: false, error: null });
      },
    }),
    {
      name: "api-data-storage", // Name for persisting in localStorage
    }
  )
);

export const getInitialData = () => {
  if (typeof window !== "undefined") {
    return useApiDataStore.getState();
  }
  return null;
};
