import { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

-33.83293090288042, 151.05545704418205;
export default function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

function Map() {
  const center = useMemo(
    () => ({ lat: -33.83293090288042, lng: 151.05545704418205 }),
    []
  );
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <Marker position={center}></Marker>
    </GoogleMap>
  );
}
