import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { HomeIcon, SearchIcon, Users, MapPin, Gift, Menu, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/container";
import { Avatar } from "../../components/ui/avatar";

export const Redeem = (): JSX.Element => {
  const rewards = [
    {
      id: 1,
      title: "Amazon Gift Card",
      points: 5000,
      value: "$50",
      image: "/image.png",
    },
    {
      id: 2,
      title: "Starbucks Gift Card",
      points: 2500,
      value: "$25",
      image: "/image-2.png",
    },
    {
      id: 3,
      title: "Target Gift Card",
      points: 10000,
      value: "$100",
      image: "/image-3.png",
    },
  ];

  const userPoints = 7500;

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
            <Button variant="ghost" className="w-full justify-start gap-3">
              <MapPin className="h-5 w-5" />
              <span>Map View</span>
            </Button>
          </Link>
          <Link to="/redeem">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100">
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
                <Link to="/">
                  <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
                </Link>
                <h1 className="text-xl font-semibold">Redeem Points</h1>
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

          {/* Points Display */}
          <div className="bg-black text-white p-6 text-center">
            <h2 className="text-2xl font-semibold">{userPoints.toLocaleString()}</h2>
            <p className="text-gray-300">Available Points</p>
          </div>

          {/* Rewards List */}
          <ScrollArea className="h-[calc(100vh-15rem)]">
            <div className="p-4 grid gap-4">
              {rewards.map((reward) => (
                <Card key={reward.id} className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                      <img src={reward.image} alt={reward.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{reward.title}</h3>
                      <p className="text-gray-500">{reward.value}</p>
                      <p className="text-sm font-medium mt-1">{reward.points.toLocaleString()} points</p>
                    </div>
                    <Button
                      disabled={userPoints < reward.points}
                      className={userPoints < reward.points ? "opacity-50" : ""}
                    >
                      Redeem
                    </Button>
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