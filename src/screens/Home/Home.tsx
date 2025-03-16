import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Badge } from "../../components/ui/badge";
import { BellIcon, HomeIcon, SearchIcon, Heart, MessageCircle, Users, MapPin, Gift, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/container";

export const Home = (): JSX.Element => {
  const posts = [
    {
      id: 1,
      username: "starryskies23",
      timeAgo: "2h",
      content: "Looking for volunteers to help clean up Central Park this weekend! 🌿",
      likes: 124,
      comments: 45,
      avatar: "profile-image.png",
      image: "image.png",
    },
    {
      id: 2,
      username: "nebulanomad",
      timeAgo: "4h",
      content: "Just finished my first day volunteering at the local animal shelter! 🐾",
      likes: 89,
      comments: 23,
      avatar: "avatar-1.png",
      image: "image-2.png",
    },
    {
      id: 3,
      username: "emberecho",
      timeAgo: "6h",
      content: "Incredible turnout at today's beach cleanup! Thank you to all 50+ volunteers who showed up! 🌊",
      likes: 156,
      comments: 34,
      avatar: "avatar-2.png",
      image: "image-3.png",
    }
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
              <Button variant="ghost" className="w-full justify-start gap-3">
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
          <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(time.svg)] bg-[100%_100%]" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b">
          <Container>
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
                <h1 className="text-xl font-semibold">Home</h1>
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

        {/* Feed */}
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollArea className="h-[calc(100vh-11rem)]">
              <div className="pb-20 space-y-4 p-4">
                {posts.map((post) => (
                  <Card key={post.id} className="border rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-3">
                        <Link to={`/profile/${post.username}`}>
                          <Avatar className="w-10 h-10">
                            <img src={post.avatar} alt={post.username} className="rounded-full" />
                          </Avatar>
                        </Link>
                        <div>
                          <Link to={`/profile/${post.username}`}>
                            <span className="font-medium hover:underline">{post.username}</span>
                          </Link>
                          <p className="text-sm text-gray-500">{post.timeAgo}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-[15px]">{post.content}</p>
                      {post.image && (
                        <div className="mt-3 rounded-xl overflow-hidden">
                          <img src={post.image} alt="Post content" className="w-full h-auto" />
                        </div>
                      )}
                      <div className="flex items-center gap-6 mt-4">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-black">
                          <Heart className="w-5 h-5" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-black">
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                      </div>
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
              <Button variant="ghost" size="icon" className="text-black">
                <HomeIcon className="w-6 h-6" />
              </Button>
            </Link>

            <Link to="/search">
              <Button variant="ghost" size="icon">
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