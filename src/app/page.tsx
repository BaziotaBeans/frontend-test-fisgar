"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Fab, Drawer, useMediaQuery, Stack } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SearchFilters } from "@/components/SearchFilters/SearchFilters";
import { PropertyList } from "@/components/PropertyList/PropertyList";
import { useProperties } from "@/services/api/get-properties";
import { List } from "@mui/icons-material";
import Header from "@/components/Header";
import { useFilteredProperties } from "@/hooks/useFilteredProperties";

const PropertyMap = dynamic(() => import("@/components/PropertyMap"), {
  loading: () => <div>Carregando...</div>,
  ssr: false,
});

export default function Home() {
  const { data: properties, isLoading } = useProperties();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const filteredProperties = useFilteredProperties(properties || []);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <Stack
      sx={{
        height: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <SearchFilters />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexShrink: 1,
          height: "auto",
          overflow: "hidden",
        }}
      >
        <Box sx={{ height: "100%", flexGrow: 1, flexShrink: 0 }}>
          <PropertyMap properties={filteredProperties} />
        </Box>
        {!isMobile && (
          <Box
            sx={{
              width: "380px",
              height: "auto",
              padding: "10px",
              minHeight: "0",
              overflowY: "scroll",
            }}
          >
            <Box sx={{ overflowY: "auto", flexGrow: 1 }}>
              <PropertyList properties={filteredProperties} isLoading={isLoading} />
            </Box>
          </Box>
        )}
        {isMobile && (
          <>
            <Fab
              color="primary"
              sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 2 }}
              onClick={toggleDrawer}
            >
              <List />
            </Fab>
            <Drawer
              anchor="bottom"
              open={drawerOpen}
              onClose={toggleDrawer}
              sx={{
                "& .MuiDrawer-paper": {
                  height: "70%",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
              }}
            >
              <Box sx={{ p: 2, overflowY: "auto", height: "100%" }}>
                <PropertyList properties={filteredProperties} isLoading={isLoading} />
              </Box>
            </Drawer>
          </>
        )}
      </Box>
    </Stack>
  );
}
