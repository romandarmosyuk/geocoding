import { getCity } from "@api/geocodingApi";
import { appRoutes } from "@consts/appRoutes";
import type { City } from "@interfaces/geocoding";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const useCity = (id: number) => {
  const [city, setCity] = useState<City | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);

    getCity(id)
      .then((data) => {
        console.log(data);
        setCity(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load city");

        if (error.status === 400) {
          navigate(appRoutes.NOT_FOUND);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, navigate]);

  return { city, isLoading, error };
};
