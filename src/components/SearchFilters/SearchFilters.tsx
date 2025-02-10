"use client";

import { TextField, Select, MenuItem, InputLabel, FormControl, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { StyledSearchFilersBox } from "./SearchFilters.styles";
import { useFilters } from "@/context/filters-context";
import AddressAutocomplete from "./AddressAutocomplete";

export function SearchFilters() {
  const { filters, setFilters } = useFilters();

  return (
    <StyledSearchFilersBox>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid size={{ xs: 13, sm: 6, md: 4 }}>
          <AddressAutocomplete
            value={filters.address}
            onChange={(address) => setFilters({ address })}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <TextField
            fullWidth
            label="Preço mínimo"
            type="number"
            size="small"
            variant="outlined"
            onChange={(e) => setFilters({ minPrice: Number(e.target.value) })}
            value={filters.minPrice}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <TextField
            fullWidth
            label="Preço máximo"
            type="number"
            size="small"
            variant="outlined"
            onChange={(e) => setFilters({ maxPrice: Number(e.target.value) })}
            value={filters.maxPrice}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <FormControl fullWidth size="small">
            <InputLabel>Tipo de propriedade</InputLabel>
            <Select
              label="Tipo de propriedade"
              value={filters.propertyType}
              onChange={(e) => setFilters({ propertyType: e.target.value })}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="house">Casa</MenuItem>
              <MenuItem value="apartment">Apartamento</MenuItem>
              <MenuItem value="condo">Condomínio</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <TextField
              label="Quartos"
              fullWidth
              // sx={{ maxWidth: "100px" }}
              type="number"
              size="small"
              variant="outlined"
              onChange={(e) => setFilters({ bedrooms: Number(e.target.value) })}
              value={filters.bedrooms}
            />
            <TextField
              fullWidth
              // sx={{ maxWidth: "100px" }}
              label="Banheiros"
              type="number"
              size="small"
              variant="outlined"
              onChange={(e) => setFilters({ bathrooms: Number(e.target.value) })}
              value={filters.bathrooms}
            />
          </Box>
        </Grid>
      </Grid>
    </StyledSearchFilersBox>
  );
}
