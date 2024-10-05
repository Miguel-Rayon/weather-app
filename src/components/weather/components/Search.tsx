import React from "react";
import { Button, TextField, Stack } from "@mui/material";
import { IconLoader, IconSearch } from "@tabler/icons-react";
import { ISearch } from "./types";
import { Alert } from "@mui/material";
import { ERROR_NONE } from "../constants/weatherErrors";

export const Search = ({
  city,
  setCity,
  handlerSearchCity,
  loading,
  error,
}: ISearch) => {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      <TextField
        value={city}
        onChange={(e) => setCity(e.target.value)}
        variant="outlined"
        style={{ marginBottom: 5, width: "100%" }}
        label="City"
        required
        disabled={loading}
      />
      <Button
        variant="contained"
        onClick={handlerSearchCity}
        disabled={loading}
        startIcon={loading ? <IconLoader /> : <IconSearch />}
        fullWidth
      >
        {loading ? "Loading" : "Search"}
      </Button>
      {error !== ERROR_NONE && <Alert severity="error">{error}</Alert>}
    </Stack>
  );
};
