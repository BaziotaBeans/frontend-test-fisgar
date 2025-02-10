"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@mui/material";
import L from "leaflet";
import { Property } from "@/types/property";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { PropertyCard } from "./PropertyCard";

const customIcon = new L.DivIcon({
  className: "custom-marker-icon",
  html: '<div class="custom-marker-icon-intern"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>',
  iconSize: [30, 30],
});

interface PropertyMapProps {
  properties: Property[];
}

export default function PropertyMap({ properties }: PropertyMapProps) {
  const brazilCenter = { lat: -14.235004, lng: -51.92528 };

  const center = properties.length > 0 ? properties[0].location : brazilCenter;

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Box sx={{ position: "relative", flex: 1 }}>
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={13}
          style={{ height: "100%", width: "100%", position: "absolute", zIndex: 1 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {properties.map((property) => (
            <Marker
              key={property.id}
              position={[property.location.lat, property.location.lng]}
              icon={customIcon}
            >
              <Popup className="property-popup">
                <PropertyCard property={property} />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
}
