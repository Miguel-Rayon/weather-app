import React from "react";
import {
  IconSun,
  IconMoon,
  IconCloud,
  IconSunset2,
  IconCloudRain,
  IconCloudSnow,
  IconMist,
  IconBolt,
  IconSnowflake,
  IconCloudStorm,
  IconCloudFog,
} from "@tabler/icons-react";
import { TWeatherCondition } from "./types";

const ICON_STYLE = { width: 80, height: 80, strokeWidth: "1.5px" };

const weatherConditions: TWeatherCondition[] = [
  { code: 1000, name: "Sunny", icon: <IconSun style={ICON_STYLE} /> },
  { code: 1001, name: "Clear", icon: <IconMoon style={ICON_STYLE} /> },
  {
    code: 1003,
    name: "Partly cloudy",
    icon: <IconSunset2 style={ICON_STYLE} />,
  },
  { code: 1006, name: "Cloudy", icon: <IconCloud style={ICON_STYLE} /> },
  { code: 1009, name: "Overcast", icon: <IconCloud style={ICON_STYLE} /> },
  { code: 1030, name: "Mist", icon: <IconMist style={ICON_STYLE} /> },
  {
    code: 1063,
    name: "Patchy rain possible",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1066,
    name: "Patchy snow possible",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1069,
    name: "Patchy sleet possible",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1072,
    name: "Patchy freezing drizzle possible",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1087,
    name: "Thundery outbreaks possible",
    icon: <IconBolt style={ICON_STYLE} />,
  },
  {
    code: 1114,
    name: "Blowing snow",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  { code: 1117, name: "Blizzard", icon: <IconSnowflake style={ICON_STYLE} /> },
  { code: 1135, name: "Fog", icon: <IconCloudFog style={ICON_STYLE} /> },
  {
    code: 1147,
    name: "Freezing fog",
    icon: <IconCloudFog style={ICON_STYLE} />,
  },
  {
    code: 1150,
    name: "Patchy light drizzle",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1153,
    name: "Light drizzle",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1168,
    name: "Freezing drizzle",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1171,
    name: "Heavy freezing drizzle",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1180,
    name: "Patchy light rain",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1183,
    name: "Light rain",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1186,
    name: "Moderate rain at times",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1189,
    name: "Moderate rain",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1192,
    name: "Heavy rain at times",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1195,
    name: "Heavy rain",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1198,
    name: "Light freezing rain",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1201,
    name: "Moderate or heavy freezing rain",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1204,
    name: "Light sleet",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1207,
    name: "Moderate or heavy sleet",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1210,
    name: "Patchy light snow",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  {
    code: 1213,
    name: "Light snow",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  {
    code: 1216,
    name: "Patchy moderate snow",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  {
    code: 1219,
    name: "Moderate snow",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  {
    code: 1222,
    name: "Patchy heavy snow",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  {
    code: 1225,
    name: "Heavy snow",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  {
    code: 1237,
    name: "Ice pellets",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1240,
    name: "Light rain shower",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1243,
    name: "Moderate or heavy rain shower",
    icon: <IconCloudRain style={ICON_STYLE} />,
  },
  {
    code: 1246,
    name: "Torrential rain shower",
    icon: <IconCloudStorm style={ICON_STYLE} />,
  },
  {
    code: 1249,
    name: "Light sleet showers",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1252,
    name: "Moderate or heavy sleet showers",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1255,
    name: "Light snow showers",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  {
    code: 1258,
    name: "Moderate or heavy snow showers",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  {
    code: 1261,
    name: "Light showers of ice pellets",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1264,
    name: "Moderate or heavy showers of ice pellets",
    icon: <IconCloudSnow style={ICON_STYLE} />,
  },
  {
    code: 1273,
    name: "Patchy light rain with thunder",
    icon: <IconCloudStorm style={ICON_STYLE} />,
  },
  {
    code: 1276,
    name: "Moderate or heavy rain with thunder",
    icon: <IconCloudStorm style={ICON_STYLE} />,
  },
  {
    code: 1279,
    name: "Patchy light snow with thunder",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
  {
    code: 1282,
    name: "Moderate or heavy snow with thunder",
    icon: <IconSnowflake style={ICON_STYLE} />,
  },
];

export const IconWeather = ({ nameWeather }) => {
  weatherConditions.map((weatherCondition) => {
    if (weatherCondition.name === nameWeather) return weatherCondition.icon;
  });
  return weatherConditions[0].icon;
};
