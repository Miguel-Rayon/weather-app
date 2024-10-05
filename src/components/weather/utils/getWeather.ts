import axios from "axios";
import { URL_WEATHER_API, REQUEST_TYPE_CURRENT } from "../constants/weatherApi";
import { TGetWeather } from "../types";

export const getWeather = async ({ city }: TGetWeather) => {
  try {
    const url = `${URL_WEATHER_API}${REQUEST_TYPE_CURRENT}?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=no`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    if (error) return false;
  }
};
