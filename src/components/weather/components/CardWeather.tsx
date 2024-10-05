import React from "react";
import { Stack, Typography } from "@mui/material";
import { ICardWeather } from "./types";
import { IconTemperatureCelsius } from "@tabler/icons-react";
import { decodeText } from "../utils/decodeText";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

export const CardWeather = ({ weather, ...props }: ICardWeather) => {
  return (
    <Stack {...props} spacing={1.5}>
      <Typography variant="h3">{weather.location?.name}</Typography>
      <Typography variant="body2">
        {decodeText(weather.location.region)} | {weather.location.country}
      </Typography>
      {/*eslint-disable-next-line */}
      <img
        alt={weather.current.condition.text}
        src={`https:${weather.current.condition.icon}`.replace(
          "64x64",
          "128x128"
        )}
        style={{ width: 120 }}
      />

      <Stack
        direction={"row"}
        spacing={1}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="body1">{weather.current.temp_c}</Typography>
        <IconTemperatureCelsius />
      </Stack>
      <Typography variant="caption">
        {dayjs(weather.current.last_updated).format("lll")}
      </Typography>
    </Stack>
  );
};
