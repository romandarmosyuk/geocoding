import { getCities } from "@api/geocodingApi";
import type { City } from "@interfaces/geocoding";
import { useEffect, useState } from "react";

export function useSearchCities(
  value: string,
  count: number,
  language: string,
) {
  const [cities, setCities] = useState<City[]>([]);
  const [isSerched, setIsSerched] = useState(false);
  useEffect(() => {
    if (!value) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCities([]);
      return;
    }

    getCities(value, count, language)
      .then((data) => {
        setCities(data.results || []);
        setIsSerched(true);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [value, count, language]);

  return { cities, isSerched };
}
