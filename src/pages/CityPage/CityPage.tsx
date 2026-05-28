import { useNavigate, useParams } from "react-router";
import { Button } from "@mantine/core";
import { appRoutes } from "@consts/appRoutes";
import { useCity } from "@hooks/useCity";
import { useWeather } from "@hooks/useWeather";

export const CityPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { city, isLoading, error } = useCity(Number(id));

  const { weather, isLoadingWeather } = useWeather(
    city?.latitude,
    city?.longitude,
    !!city,
  );

  if (isLoading) {
    return <div>Please, wait...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!city) {
    return <div>Данные не были получены</div>;
  }

  const handleClick = () => {
    navigate(appRoutes.SEARCH);
  };

  return (
    <>
      <h1>{city.name}</h1>
      <p>country: {city.country}</p>
      {isLoadingWeather ? (
        <div>Загрузка погоды...</div>
      ) : (
        <>
          <p>Температура: {weather?.current?.temperature_2m} °C</p>
          <p>Влажность: {weather?.current?.relative_humidity_2m} %</p>
          <p>Осадки: {weather?.current?.precipitation}</p>
        </>
      )}

      <Button onClick={handleClick} variant="filled">
        Go back
      </Button>
    </>
  );
};
