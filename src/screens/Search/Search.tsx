import { useState } from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Badge } from "../../components/ui/badge";
import { BellIcon, HomeIcon, SearchIcon, Users, MapPin, Gift, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/container";

export const Search = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const opportunities = [
    {
      id: 1,
      title: "Park Cleanup",
      organization: "Green Earth Initiative",
      location: "Central Park",
      date: "This Saturday",
      image: "image.png",
      description: "Join us for our weekly park cleanup initiative. Help keep our community clean and green!",
      spots: 8,
    },
    {
      id: 2,
      title: "Animal Shelter Help",
      organization: "City Animal Rescue",
      location: "Downtown",
      date: "Weekly",
      image: "image-2.png",
      description: "Support our animal shelter by helping with daily care routines and animal socialization.",
      spots: 5,
    },
    {
      id: 3,
      title: "Food Bank Distribution",
      organization: "Community Food Network",
      location: "East Side",
      date: "Every Sunday",
      image: "image-3.png",
      description: "Help distribute food to families in need. Make a direct impact in your community.",
      spots: 12,
    },
  ];

  return (
    <div className="bg-white min-h-screen flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r h-screen sticky top-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Volunteer</h1>
        </div>
        <nav className="flex-1 px-4">
          <div className="space-y-2">
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <HomeIcon className="w-5 h-5" />
                Home
              </Button>
            </Link>
            <Link to="/search">
              <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100">
                <SearchIcon className="w-5 h-5" />
                Search
              </Button>
            </Link>
            <Link to="/match">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Users className="w-5 h-5" />
                Matches
              </Button>
            </Link>
            <Link to="/map">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <MapPin className="w-5 h-5" />
                Map View
              </Button>
            </Link>
            <Link to="/activity">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <BellIcon className="w-5 h-5" />
                Activity
              </Button>
            </Link>
            <Link to="/redeem">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Gift className="w-5 h-5" />
                Redeem
              </Button>
            </Link>
          </div>
        </nav>
        <div className="p-4 border-t">
          <Link to="/profile">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Avatar className="w-8 h-8">
                <img src="profile-image.png" alt="Profile" className="rounded-full" />
              </Avatar>
              <span>Sarah Parker</span>
            </Button>
          </Link>
        </div>
      </aside>

      <main className="flex-1 min-h-screen">
        {/* Status Bar - Mobile only */}
        <div className="h-11 relative md:hidden">
          <div className="absolute w-[67px] h-[11px] top-[17px] right-4">
            <img className="absolute w-6 h-[11px] top-0 right-0" alt="Battery" src="battery.png" />
            <img className="absolute w-[15px] h-[11px] top-0 right-8" alt="Wifi" src="wifi.svg" />
            <img className="absolute w-[17px] h-[11px] top-0 right-14" alt="Signal" src="mobile-signal.svg" />
          </div>
          <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(public/time.svg)] bg-[100%_100%]" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b">
          <Container>
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
                <h1 className="text-xl font-semibold">Search</h1>
              </div>
              <div className="flex items-center gap-2">
                <Link to="/profile" className="lg:hidden">
                  <Avatar className="h-8 w-8">
                    <img src="profile-image.png" alt="Profile" className="rounded-full" />
                  </Avatar>
                </Link>
              </div>
            </div>
          </Container>
        </header>

        <Container>
          {/* Search Input */}
          <div className="p-4">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search volunteer opportunities"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 px-12 rounded-lg border border-gray-200 focus:outline-none focus:border-black"
              />
              <SearchIcon className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Search Results */}
          <div className="max-w-5xl mx-auto">
            <ScrollArea className="h-[calc(100vh-11rem)]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {opportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="flex flex-col overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={opportunity.image} 
                        alt={opportunity.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                      <p className="text-gray-600">{opportunity.organization}</p>
                      <p className="text-sm text-gray-500 mt-2">{opportunity.description}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        <span>📍 {opportunity.location}</span>
                        <span>📅 {opportunity.date}</span>
                      </div>
                      <div className="mt-3 text-sm text-gray-500">
                        <span>{opportunity.spots} spots available</span>
                      </div>
                      <Button className="w-full mt-4">Learn More</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </Container>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden">
          <div className="flex justify-between items-center h-16 px-6">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <HomeIcon className="w-6 h-6" />
              </Button>
            </Link>

            <Link to="/search">
              <Button variant="ghost" size="icon" className="text-black">
                <SearchIcon className="w-6 h-6" />
              </Button>
            </Link>

            <Link to="/post">
              <Button variant="ghost" size="icon" className="relative">
                <div className="w-6 h-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded border-2 border-black flex items-center justify-center">
                      <span className="text-2xl font-light">+</span>
                    </div>
                  </div>
                </div>
              </Button>
            </Link>

            <Link to="/activity">
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="w-6 h-6" />
                <Badge className="absolute -top-1 -right-2 bg-[#fe2c55] text-white text-[10px] font-semibold h-4 min-w-4 flex items-center justify-center rounded-full border-2 border-white">
                  5
                </Badge>
              </Button>
            </Link>

            <Link to="/profile">
              <Button variant="ghost" size="icon" className="p-0">
                <Avatar className="w-6 h-6">
                  <img src="profile-image.png" alt="Profile" className="rounded-full" />
                </Avatar>
              </Button>
            </Link>
          </div>

          <div className="flex justify-center pb-8 pt-1">
            <div className="w-[134px] h-1 bg-black rounded-full" />
          </div>
        </div>
      </main>
    </div>
  );
};