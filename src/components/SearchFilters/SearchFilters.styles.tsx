"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledSearchFilersBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  width: "100%",
  minWidth: "100%",
  padding: "10px",
  display: "flex",
}));

export const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {},
});
