"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
import { NominatimResult } from "@/types/nominatim";

export const useAddressSearch = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAddressSuggestions = async (search: string): Promise<void> => {
    if (!search) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get<NominatimResult[]>(
        `https://nominatim.openstreetmap.org/search?q=${search}&format=json`,
      );
      setSuggestions(response.data.map((item) => item.display_name));
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedQuery) {
      fetchAddressSuggestions(debouncedQuery);
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery]);

  return {
    query,
    setQuery,
    suggestions,
    loading,
  };
};
