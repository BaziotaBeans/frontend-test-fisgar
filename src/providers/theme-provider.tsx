"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import CssBaseline from "@mui/material/CssBaseline";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#673ab7",
      light: "#89E219",
      dark: "#512da8", // Roxo mais escuro
    },
    secondary: {
      main: "#FFF",
    },
    background: {
      default: "#FFF",
      paper: "#FFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          padding: "10px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // borderRadius: "10px",
          // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          boxShadow: "none",
        },
      },
    },
  },
});

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
