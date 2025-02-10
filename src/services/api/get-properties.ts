import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api-clients";
import { Property } from "@/types/property";

export const getProperties = async (): Promise<Property[]> => {
  const response = await api.get("properties");
  return response.data;
};

export const useProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });
};
