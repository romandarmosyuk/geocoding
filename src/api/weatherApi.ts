import type { WeatherResponse } from "@interfaces/weatherResponse";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
  timeout: 5000,
});

export const getForecast = async (lat?: number, lon?: number) => {
  const currentParams = [
    "temperature_2m",
    "relative_humidity_2m",
    "precipitation",
  ].join(",");

  const response = await api.get<WeatherResponse>("/forecast", {
    params: {
      latitude: lat,
      longitude: lon,
      current: currentParams,
      forecast_days: 1,
    },
  });

  return response.data;
};
