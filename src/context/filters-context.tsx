"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Filters {
  address: string;
  minPrice: number;
  maxPrice: number;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
}

const FiltersContext = createContext<{
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
}>({
  filters: {
    address: "",
    minPrice: 0,
    maxPrice: Infinity,
    propertyType: "",
    bedrooms: 0,
    bathrooms: 0,
  },
  setFilters: () => {},
});

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFiltersState] = useState<Filters>({
    address: "",
    minPrice: 0,
    maxPrice: Infinity,
    propertyType: "",
    bedrooms: 0,
    bathrooms: 0,
  });

  const setFilters = (updatedFilters: Partial<Filters>) => {
    setFiltersState((prev) => ({ ...prev, ...updatedFilters }));
  };

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
