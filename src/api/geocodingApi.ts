import type { City } from "@interfaces/geocoding";
import axios from "axios";

type SearchResponse = {
  results: City[];
};

const api = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
  timeout: 5000,
});

export const getCities = async (
  name: string,
  count: number,
  language: string,
) => {
  const response = await api.get<SearchResponse>("/search", {
    params: {
      name,
      count,
      format: "json",
      language,
    },
  });

  return response.data;
};

export const getCity = async (id: number) => {
  const response = await api.get("/get", {
    params: {
      id,
    },
  });

  return response.data;
};
