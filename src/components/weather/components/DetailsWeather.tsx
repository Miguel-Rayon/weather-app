import React from "react";
import { Typography, Box } from "@mui/material";
import {
  IconUvIndex,
  IconTemperature,
  IconWind,
  IconWindsock,
  IconRipple,
} from "@tabler/icons-react";
import { IDetailsWeather } from "./types";

export const DetailsWeather = ({ weather, ...props }: IDetailsWeather) => {
  return (
    <Box {...props}>
      <Box sx={{ display: "flex" }}>
        <IconTemperature style={{ marginRight: 2 }} />
        <Typography>Temperature: {weather.current.condition.text}</Typography>
      </Box>
      <Box sx={{ display: "flex", marginTop: 3 }}>
        <IconUvIndex style={{ marginRight: 2 }} />
        <Typography>UV: {weather.current.uv}</Typography>
      </Box>
      <Box sx={{ display: "flex", marginTop: 3 }}>
        <IconWind style={{ marginRight: 2 }} />
        <Typography>Wind: {weather.current.wind_kph} kph </Typography>
      </Box>
      <Box sx={{ display: "flex", marginTop: 3 }}>
        <IconWindsock style={{ marginRight: 2 }} />
        <Typography>Wind direction: {weather.current.wind_dir}</Typography>
      </Box>
      <Box sx={{ display: "flex", marginTop: 3 }}>
        <IconRipple style={{ marginRight: 2 }} />
        <Typography>Humidity: {weather.current.humidity}</Typography>
      </Box>
    </Box>
  );
};
