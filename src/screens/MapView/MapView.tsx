import React from "react";
import Map, { Marker } from "react-map-gl";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/container";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export const MapView = (): JSX.Element => {
  const opportunities = [
    {
      id: 1,
      title: "Park Cleanup",
      location: "Central Park",
      coordinates: [-73.968285, 40.785091],
    },
    {
      id: 2,
      title: "Animal Shelter",
      location: "Downtown",
      coordinates: [-73.997456, 40.725073],
    },
  ];

  return (
    <div className="bg-white h-screen flex flex-col">
      {/* Status Bar - Only show on mobile */}
      <div className="h-11 relative md:hidden">
        <div className="absolute w-[67px] h-[11px] top-[17px] right-4">
          <img className="absolute w-6 h-[11px] top-0 right-0" alt="Battery" src="public/battery.png" />
          <img className="absolute w-[15px] h-[11px] top-0 right-8" alt="Wifi" src="public/wifi.svg" />
          <img className="absolute w-[17px] h-[11px] top-0 right-14" alt="Signal" src="public/mobile-signal.svg" />
        </div>
        <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(public/time.svg)] bg-[100%_100%]" />
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <Container>
          <div className="px-4 py-3 flex items-center">
            <Link to="/">
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Browse by Map</h1>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Map */}
        <div className="flex-1 relative">
          <Map
            initialViewState={{
              longitude: -73.968285,
              latitude: 40.785091,
              zoom: 12
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            {opportunities.map((opportunity) => (
              <Marker
                key={opportunity.id}
                longitude={opportunity.coordinates[0]}
                latitude={opportunity.coordinates[1]}
              >
                <div className="bg-black text-white p-2 rounded-lg cursor-pointer">
                  {opportunity.title}
                </div>
              </Marker>
            ))}
          </Map>
        </div>

        {/* Opportunities List - Sidebar on desktop, bottom sheet on mobile */}
        <Card className="lg:w-96 lg:h-full lg:rounded-none lg:border-l lg:border-t-0 rounded-t-xl border-t">
          <Container>
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-4">Nearby Opportunities</h2>
              <div className="space-y-4">
                {opportunities.map((opportunity) => (
                  <div key={opportunity.id} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{opportunity.title}</h3>
                      <p className="text-sm text-gray-500">📍 {opportunity.location}</p>
                    </div>
                    <Button>View</Button>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Card>
      </div>
    </div>
  );
}