import React, { useState, Fragment, useEffect } from "react";
import { Container } from "@mui/material";
import { Search, CurrentWeather } from "./components";
import { getWeather } from "./utils/getWeather";
import { IWeatherResponse } from "./components/types";
import {
  ERROR_NONE,
  ERROR_EMPTY_CITY,
  ERROR_NOT_FOUND,
} from "./constants/weatherErrors";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState<IWeatherResponse | null>(null);
  const [error, setError] = useState(ERROR_NONE);

  const handlerSearchCity = async () => {
    setError(ERROR_NONE);
    setLoading(true);
    if (city === "") setError(ERROR_EMPTY_CITY);
    const weatherResponse = await getWeather({ city });
    if (weatherResponse) setWeatherInfo(weatherResponse);
    else {
      setError(ERROR_NOT_FOUND);
      setLoading(false);
      setWeatherInfo(null);
    }
  };

  useEffect(() => {
    if (weatherInfo?.location?.name) {
      setLoading(false);
    }
  }, [weatherInfo]);

  return (
    <Fragment>
      <Container maxWidth="md">
        <Search
          city={city}
          setCity={setCity}
          loading={loading}
          handlerSearchCity={handlerSearchCity}
          error={error}
        />
        {weatherInfo && weatherInfo.location.name && (
          <CurrentWeather
            weather={weatherInfo}
            style={{
              marginTop: 20,
              minHeight: 350,
              alignContent: "center",
            }}
          />
        )}
      </Container>
    </Fragment>
  );
};
