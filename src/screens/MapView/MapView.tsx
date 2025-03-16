import Map, { Marker } from "react-map-gl";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { HomeIcon, SearchIcon, Users, MapPin, Gift, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/container";
import { Avatar } from "../../components/ui/avatar";

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
    <div className="bg-white min-h-screen flex">
      {/* Desktop Sidebar - Hidden on mobile */}
      <aside className="hidden md:flex w-64 flex-col border-r">
        <div className="p-4">
          <Link to="/">
            <h1 className="text-2xl font-bold">Volunteer</h1>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Button>
          </Link>
          <Link to="/search">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <SearchIcon className="h-5 w-5" />
              <span>Search</span>
            </Button>
          </Link>
          <Link to="/matches">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Users className="h-5 w-5" />
              <span>Matches</span>
            </Button>
          </Link>
          <Link to="/map">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100">
              <MapPin className="h-5 w-5" />
              <span>Map View</span>
            </Button>
          </Link>
          <Link to="/redeem">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Gift className="h-5 w-5" />
              <span>Redeem</span>
            </Button>
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Link to="/profile">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Avatar className="w-8 h-8">
                <img src="/profile-image.png" alt="Profile" className="rounded-full" />
              </Avatar>
              <span>Sarah Parker</span>
            </Button>
          </Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        {/* Status Bar - Mobile only */}
        <div className="h-11 relative md:hidden">
          <div className="absolute w-[67px] h-[11px] top-[17px] right-4">
            <img className="absolute w-6 h-[11px] top-0 right-0" alt="Battery" src="/battery.png" />
            <img className="absolute w-[15px] h-[11px] top-0 right-8" alt="Wifi" src="/wifi.svg" />
            <img className="absolute w-[17px] h-[11px] top-0 right-14" alt="Signal" src="/mobile-signal.svg" />
          </div>
          <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(/time.svg)] bg-[100%_100%]" />
        </div>

        {/* Header */}
        <Container>
          <header className="bg-white border-b">
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link to="/" className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </Link>
                <h1 className="text-xl font-semibold">Browse by Map</h1>
              </div>
              <div className="flex items-center gap-2">
                <Link to="/profile" className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Avatar className="h-8 w-8">
                      <img src="/profile-image.png" alt="Profile" className="rounded-full" />
                    </Avatar>
                  </Button>
                </Link>
              </div>
            </div>
          </header>
        </Container>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Map */}
          <div className="flex-1 relative">
            <Map
              initialViewState={{
                longitude: -73.968285,
                latitude: 40.785091,
                zoom: 12,
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
      </main>
    </div>
  );
};
