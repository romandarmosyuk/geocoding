import { getForecast } from "@api/weatherApi";
import type { WeatherResponse } from "@interfaces/weatherResponse";
import { useEffect, useState } from "react";

export function useWeather(lat?: number, lon?: number, isEnabled?: boolean) {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoadingWeather(true);

    if (!isEnabled) return;

    if (lat == null || lon == null) return;

    getForecast(lat, lon)
      .then((data) => {
        console.log(data);

        setWeather(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoadingWeather(false);
      });
  }, [lat, lon, isEnabled]);

  return { weather, isLoadingWeather };
}
