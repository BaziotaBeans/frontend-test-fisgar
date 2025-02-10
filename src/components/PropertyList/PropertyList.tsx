"use client";

import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { Property } from "@/types/property";
import Image from "next/image";
import { SkeletonPropertyList } from "./SkeletonPropertyList";

interface PropertyListProps {
  properties: Property[];
  isLoading?: boolean;
}

export function PropertyList({ properties, isLoading }: PropertyListProps) {
  if (isLoading) {
    <SkeletonPropertyList />;
  }

  return (
    <Grid container spacing={2} sx={{ padding: "10px" }}>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h6" color="primary">
          Imóveis nesta área
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {properties.length} Resultados
        </Typography>
      </Box>
      {properties.map((property) => (
        <Card
          key={property.id}
          elevation={2}
          sx={{ border: "1px solid #f1f1f1", borderRadius: "16PX", padding: "10px" }}
        >
          <Box>
            <Image
              src={property.images[0]}
              alt={property.title}
              height={200}
              width={300}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
          <CardContent sx={{ padding: 0 }}>
            <Typography variant="h6" gutterBottom>
              {property.title}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              ${property.price.toLocaleString()}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              {property.address}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Chip
                icon={<BedIcon />}
                label={`${property.bedrooms} Quartos`}
                variant="outlined"
                size="small"
              />
              <Chip
                icon={<BathtubIcon />}
                label={`${property.bathrooms} Banheiros`}
                variant="outlined"
                size="small"
              />
              <Chip
                icon={<SquareFootIcon />}
                label={`${property.area} Área`}
                variant="outlined"
                size="small"
              />
            </Box>
            <Typography variant="body2">{property.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}
