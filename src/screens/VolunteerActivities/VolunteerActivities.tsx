import { HomeIcon, SearchIcon, BellIcon, Menu, Users, MapPin, Gift } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/container";

export const VolunteerActivities = (): JSX.Element => {
  // Activity data for mapping
  const activities = [
    {
      id: 1,
      username: "starryskies23",
      timeAgo: "1d",
      action: "Started following you",
      avatar: "profile-image.png",
      hasNotification: true,
      hasButton: true,
      buttonText: "Message",
    },
    {
      id: 2,
      username: "nebulanomad",
      timeAgo: "1d",
      action: "Liked your post",
      avatar: "avatar-1.png",
      hasNotification: true,
      hasImage: true,
      image: "image.png",
    },
    {
      id: 3,
      username: "emberecho",
      timeAgo: "2d",
      action: "Liked your comment",
      avatar: "avatar-2.png",
      hasNotification: true,
      hasComment: true,
      comment: "Thanks for the Help!",
    },
    {
      id: 4,
      username: "lunavoyager",
      timeAgo: "3d",
      action: "Saved your post",
      avatar: "avatar-3.png",
      hasNotification: true,
      hasImage: true,
      image: "image-2.png",
    },
    {
      id: 5,
      username: "shadowlynx",
      timeAgo: "4d",
      action: "Commented on your post",
      avatar: "avatar-4.png",
      hasNotification: true,
      hasImage: true,
      image: "image-2.png",
      hasReply: true,
      reply: "I hope they are can find their dog back",
    },
    {
      id: 6,
      username: "nebulanomad",
      timeAgo: "5d",
      action: "Shared a post you might like",
      avatar: "avatar-5.png",
      hasImage: true,
      image: "image-3.png",
    },
    {
      id: 7,
      username: "lunavoyager",
      timeAgo: "5d",
      action: "Liked your comment",
      avatar: "avatar-6.png",
      hasComment: true,
      comment: "Amazing work!",
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
          <div className="absolute w-[67px] h-[11px] top-[17px] left-[294px]">
            <img
              className="absolute w-6 h-[11px] top-0 left-[42px]"
              alt="Battery"
              src="battery.png"
            />
            <img
              className="absolute w-[15px] h-[11px] top-0 left-[22px]"
              alt="Wifi"
              src="wifi.svg"
            />
            <img
              className="absolute w-[17px] h-[11px] top-0 left-0"
              alt="Mobile signal"
              src="mobile-signal.svg"
            />
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
                <h1 className="text-xl font-semibold">Activity</h1>
              </div>
              <div className="flex items-center gap-2">
                <Link to="/profile" className="lg:hidden">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="profile-image.png" alt="Profile" />
                    <AvatarFallback>SP</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </Container>
        </header>

        {/* Activity Feed */}
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollArea className="h-[calc(100vh-11rem)]">
              <div className="pb-20 space-y-4 p-4">
                {activities.map((activity) => (
                  <Card key={activity.id} className="p-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10">
                        <img src={activity.avatar} alt={activity.username} className="rounded-full" />
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Link to={`/profile/${activity.username}`} className="font-medium hover:underline">
                            {activity.username}
                          </Link>
                          <span className="text-sm text-gray-500">{activity.timeAgo}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                        {activity.hasImage && (
                          <div className="mt-3 rounded-lg overflow-hidden">
                            <img src={activity.image} alt="Activity" className="w-full h-auto" />
                          </div>
                        )}
                        {activity.hasComment && (
                          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm">{activity.comment}</p>
                          </div>
                        )}
                        {activity.hasReply && (
                          <div className="mt-3">
                            <p className="text-sm text-gray-600">{activity.reply}</p>
                          </div>
                        )}
                        {activity.hasButton && (
                          <Button className="mt-3" variant="outline" size="sm">
                            {activity.buttonText}
                          </Button>
                        )}
                      </div>
                      {activity.hasNotification && (
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </Container>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden">
          <div className="flex justify-between items-center h-11 px-[26px]">
            <Button variant="ghost" size="icon" className="p-0">
              <HomeIcon className="w-6 h-6" />
            </Button>

            <Button variant="ghost" size="icon" className="p-0">
              <SearchIcon className="w-6 h-6" />
            </Button>

            <Button variant="ghost" size="icon" className="p-0">
              <div className="relative w-6 h-6">
                <div className="relative w-[22px] h-[22px] top-px left-px bg-white rounded border-2 border-solid border-black">
                  <div className="absolute w-3 h-0.5 top-2 left-[3px] bg-black" />
                  <div className="absolute w-0.5 h-3 top-[3px] left-2 bg-black" />
                </div>
              </div>
            </Button>

            <Button variant="ghost" size="icon" className="p-0 relative">
              <BellIcon className="w-6 h-6" />
              <Badge className="absolute top-1 right-[-8px] bg-[#fe2c55] text-white text-[10px] font-semibold h-4 min-w-4 flex items-center justify-center rounded-[10px] border-2 border-solid border-white px-1.5">
                5
              </Badge>
            </Button>

            <Button variant="ghost" size="icon" className="p-0">
              <Avatar className="w-6 h-6">
                <AvatarImage src="profile-image.png" alt="Profile" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </div>

          <div className="flex justify-center items-center h-[34px]">
            <Separator className="w-[134px] h-[5px] rounded-[100px] bg-black" />
          </div>
        </div>
      </main>
    </div>
  );
};
