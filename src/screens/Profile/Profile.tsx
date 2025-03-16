import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Container } from "../../components/ui/container";
import { Settings, MapPin, Calendar, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Profile = (): JSX.Element => {
  const userStats = {
    hoursVolunteered: 156,
    pointsEarned: 7500,
    eventsAttended: 24,
  };

  const posts = [
    {
      id: 1,
      timeAgo: "2d",
      content: "Just completed another successful beach cleanup! 🌊 Thanks to everyone who joined!",
      likes: 124,
      comments: 45,
      image: "public/image.png",
    },
    {
      id: 2,
      timeAgo: "5d",
      content: "Volunteering at the local animal shelter today! 🐾",
      likes: 89,
      comments: 23,
      image: "public/image-2.png",
    },
  ];

  const badges = [
    { id: 1, name: "Environmental Hero", image: "public/avatar-1.png" },
    { id: 2, name: "Animal Advocate", image: "public/avatar-2.png" },
    { id: 3, name: "Community Leader", image: "public/avatar-3.png" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Status Bar - Mobile only */}
      <div className="h-11 relative md:hidden">
        <div className="absolute w-[67px] h-[11px] top-[17px] right-4">
          <img className="absolute w-6 h-[11px] top-0 right-0" alt="Battery" src="public/battery.png" />
          <img className="absolute w-[15px] h-[11px] top-0 right-8" alt="Wifi" src="public/wifi.svg" />
          <img className="absolute w-[17px] h-[11px] top-0 right-14" alt="Signal" src="public/mobile-signal.svg" />
        </div>
        <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(public/time.svg)] bg-[100%_100%]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <Container>
          <div className="px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Profile</h1>
            <Link to="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </header>

      <Container>
        {/* Profile Info */}
        <div className="px-4 py-6">
          <div className="flex items-start gap-4">
            <Avatar className="w-20 h-20">
              <img src="public/profile-image.png" alt="Profile" className="rounded-full" />
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Sarah Parker</h2>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
              <p className="mt-2 text-gray-600">
                Passionate about making a difference in my community 🌱
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <p className="text-2xl font-semibold">{userStats.hoursVolunteered}</p>
              <p className="text-gray-600 text-sm">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold">{userStats.pointsEarned}</p>
              <p className="text-gray-600 text-sm">Points</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold">{userStats.eventsAttended}</p>
              <p className="text-gray-600 text-sm">Events</p>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Badges Earned</h3>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {badges.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center">
                  <Avatar className="w-16 h-16">
                    <img src={badge.image} alt={badge.name} className="rounded-full" />
                  </Avatar>
                  <p className="text-sm mt-2 whitespace-nowrap">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full flex border-b">
            <TabsTrigger value="posts" className="flex-1 py-3">Posts</TabsTrigger>
            <TabsTrigger value="activities" className="flex-1 py-3">Activities</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[calc(100vh-26rem)]">
            <div className="p-4 space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  {post.image && (
                    <div className="relative h-48 md:h-64">
                      <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{post.timeAgo}</span>
                    </div>
                    <p className="text-[15px]">{post.content}</p>
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
        </Tabs>
      </Container>
    </div>
  );
};