import { TextField, CircularProgress, Box } from "@mui/material";
import { useAddressSearch } from "@/hooks/useAddressSearch";

interface AddressAutocompleteProps {
  value?: string;
  onChange: (value: string) => void;
}

export default function AddressAutocomplete({ onChange }: AddressAutocompleteProps) {
  const { query, setQuery, suggestions, loading } = useAddressSearch();

  return (
    <Box sx={{ position: "relative" }}>
      <TextField
        fullWidth
        label="Endereço"
        size="small"
        variant="outlined"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value);
        }}
      />
      {loading && <CircularProgress size={20} sx={{ position: "absolute", top: 10, right: 10 }} />}
      {suggestions.length > 0 && (
        <Box sx={{ border: "1px solid #ccc", borderRadius: "4px", mt: 1 }}>
          {suggestions.map((suggestion, index) => (
            <Box
              key={index}
              sx={{
                padding: "8px",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              onClick={() => onChange(suggestion)}
            >
              {suggestion}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
