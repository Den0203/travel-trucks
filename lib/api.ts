import axios from "axios";
import { Camper, CampersResponse } from "./types";

export const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export interface CamperFilters {
  location?: string;
  form?: string;
  features?: string[];
}

export async function fetchCampers(
  page: number,
  limit: number,
  filters: CamperFilters
): Promise<CampersResponse> {
  const params: Record<string, string | number | boolean> = {
    page,
    limit,
  };

  if (filters.location) params.location = filters.location;
  if (filters.form) params.form = filters.form;

  filters.features?.forEach((feature) => {
    params[feature] = true;
  });

  const { data } = await api.get<CampersResponse>("/campers", { params });
  return data;
}

export async function fetchCamperById(id: string): Promise<Camper> {
  const { data } = await api.get<Camper>(`/campers/${id}`);
  return data;
}
