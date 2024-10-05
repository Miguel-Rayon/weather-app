import React from "react";
import { Card, Stack, Divider, useMediaQuery, useTheme } from "@mui/material";
import { ICurrentWeather } from "./types";
import { CardWeather } from "./CardWeather";
import { DetailsWeather } from "./DetailsWeather";

export const CurrentWeather = ({ weather, ...props }: ICurrentWeather) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card {...props}>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <CardWeather
          weather={weather}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: isSmallScreen ? 8 : 1,
          }}
        />
        <Divider
          orientation={isSmallScreen ? "horizontal" : "vertical"}
          variant="middle"
          flexItem
        />
        <DetailsWeather
          weather={weather}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: isSmallScreen ? "center" : "flex-start",
            textAlign: isSmallScreen ? "center" : "left",
          }}
        />
      </Stack>
    </Card>
  );
};
