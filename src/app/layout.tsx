import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { AppThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import { FiltersProvider } from "@/context/filters-context";

export const metadata: Metadata = {
  title: "Frontend Test",
  description: "Página Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReactQueryProvider>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <InitColorSchemeScript attribute="class" />
            <AppThemeProvider>
              <FiltersProvider>{children}</FiltersProvider>
            </AppThemeProvider>
          </AppRouterCacheProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
