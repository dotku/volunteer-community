import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { HomeIcon, SearchIcon, Users, MapPin, Gift, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/container";

export const Match = (): JSX.Element => {
  const matches = [
    {
      id: 1,
      name: "Green Earth Initiative",
      description: "Environmental cleanup and conservation",
      location: "Central Park",
      matchPercentage: 95,
      avatar: "/avatar-1.png",
    },
    {
      id: 2,
      name: "Animal Shelter",
      description: "Help care for rescued animals",
      location: "Downtown",
      matchPercentage: 88,
      avatar: "/avatar-2.png",
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
            <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100">
              <Users className="h-5 w-5" />
              <span>Matches</span>
            </Button>
          </Link>
          <Link to="/map">
            <Button variant="ghost" className="w-full justify-start gap-3">
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

      <main className="flex-1">
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
          <header className="sticky top-0 z-10 bg-white border-b">
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link to="/" className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </Link>
                <h1 className="text-xl font-semibold">Matches</h1>
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

          {/* Matches List */}
          <ScrollArea className="h-[calc(100vh-7rem)]">
            <div className="p-4 space-y-4">
              {matches.map((match) => (
                <Card key={match.id} className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <img src={match.avatar} alt={match.name} className="rounded-full" />
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{match.name}</h3>
                        <span className="text-green-500 font-semibold">{match.matchPercentage}% Match</span>
                      </div>
                      <p className="text-gray-600">{match.description}</p>
                      <p className="text-sm text-gray-500 mt-1">📍 {match.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button className="flex-1">View Details</Button>
                    <Link to="/chat" className="flex-1">
                      <Button variant="outline" className="w-full">Message</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Container>
      </main>
    </div>
  );
};