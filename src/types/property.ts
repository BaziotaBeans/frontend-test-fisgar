export type PropertyType = "house" | "apartment" | "condo";

export interface Location {
  lat: number;
  lng: number;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: PropertyType;
  location: Location;
  images: string[];
}

export interface PropertyFilters {
  minPrice?: number;
  maxPrice?: number;
  type?: PropertyType;
  bedrooms?: number;
  bathrooms?: number;
  searchTerm?: string;
}
