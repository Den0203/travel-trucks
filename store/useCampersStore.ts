import { create } from "zustand";
import { Camper } from "../lib/types";
import { CamperFilters, fetchCampers } from "../lib/api";

interface CampersState {
  campers: Camper[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
  isLoading: boolean;
  filters: CamperFilters;

  setFilters: (filters: CamperFilters) => void;
  resetAndFetch: () => Promise<void>;
  loadMore: () => Promise<void>;
}

export const useCampersStore = create<CampersState>((set, get) => ({
  campers: [],
  total: 0,
  page: 1,
  limit: 4,
  hasMore: true,
  isLoading: false,
  filters: {},

  setFilters: (filters) => set({ filters }),

  resetAndFetch: async () => {
    set({ campers: [], page: 1, hasMore: true, isLoading: true });

    const { limit, filters } = get();
    const res = await fetchCampers(1, limit, filters);

    set({
      campers: res.items,
      total: res.total,
      page: 1,
      hasMore: res.items.length < res.total,
      isLoading: false,
    });
  },

  loadMore: async () => {
    const { page, limit, filters, campers, total, isLoading } = get();
    if (isLoading) return;

    const nextPage = page + 1;
    set({ isLoading: true });

    const res = await fetchCampers(nextPage, limit, filters);

    set({
      campers: [...campers, ...res.items],
      page: nextPage,
      hasMore: campers.length + res.items.length < total,
      isLoading: false,
    });
  },
}));
