"use client";

import { AppBar } from "@mui/material";
import { styled } from "@mui/system";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 64,
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
}));
