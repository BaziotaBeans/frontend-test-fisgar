"use client";

import Image from "next/image";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import BedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card sx={{ maxWidth: "300px", padding: "10px", borderRadius: "16px" }}>
      <Image
        src={property.images[0]}
        alt={property.title}
        height={200}
        width={300}
        style={{
          width: "100%",
          objectFit: "cover",
          height: "176px",
          borderRadius: "16px",
        }}
      />
      <CardContent sx={{ padding: 0 }}>
        <Typography sx={{ fontWeight: "500" }}>{property.title}</Typography>
        <Typography variant="h6" color="primary">
          ${property.price.toLocaleString()}
        </Typography>
        <Typography color="text.secondary">{property.address}</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1, mb: 1 }}>
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
  );
}
