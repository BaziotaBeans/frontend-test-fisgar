import { useMemo } from "react";
import { Property } from "@/types/property";
import { useFilters } from "@/context/filters-context";

export const useFilteredProperties = (properties: Property[] | undefined) => {
  const { filters } = useFilters();

  return useMemo(() => {
    if (!properties) return [];

    return properties.filter((property) => {
      const matchesAddress = filters.address
        ? property.address.toLowerCase().includes(filters.address.toLowerCase())
        : true;
      const matchesPrice =
        property.price >= (filters.minPrice || 0) &&
        property.price <= (filters.maxPrice || Infinity);
      const matchesType = filters.propertyType ? property.type === filters.propertyType : true;
      const matchesBedrooms = filters.bedrooms ? property.bedrooms >= filters.bedrooms : true;
      const matchesBathrooms = filters.bathrooms ? property.bathrooms >= filters.bathrooms : true;

      return matchesAddress && matchesPrice && matchesType && matchesBedrooms && matchesBathrooms;
    });
  }, [properties, filters]);
};
