import { BellIcon, HomeIcon, SearchIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const VolunteerActivities = (): JSX.Element => {
  // Activity data for mapping
  const activities = [
    {
      id: 1,
      username: "starryskies23",
      timeAgo: "1d",
      action: "Started following you",
      avatar: "public/profile-image.png",
      hasNotification: true,
      hasButton: true,
      buttonText: "Message",
    },
    {
      id: 2,
      username: "nebulanomad",
      timeAgo: "1d",
      action: "Liked your post",
      avatar: "public/avatar-1.png",
      hasNotification: true,
      hasImage: true,
      image: "public/image.png",
    },
    {
      id: 3,
      username: "emberecho",
      timeAgo: "2d",
      action: "Liked your comment",
      avatar: "public/avatar-2.png",
      hasNotification: true,
      hasComment: true,
      comment: "Thanks for the Help!",
    },
    {
      id: 4,
      username: "lunavoyager",
      timeAgo: "3d",
      action: "Saved your post",
      avatar: "public/avatar-3.png",
      hasNotification: true,
      hasImage: true,
      image: "public/image-2.png",
    },
    {
      id: 5,
      username: "shadowlynx",
      timeAgo: "4d",
      action: "Commented on your post",
      avatar: "public/avatar-4.png",
      hasNotification: true,
      hasImage: true,
      image: "public/image-2.png",
      hasReply: true,
      reply: "I hope they are can find their dog back",
    },
    {
      id: 6,
      username: "nebulanomad",
      timeAgo: "5d",
      action: "Shared a post you might like",
      avatar: "public/avatar-5.png",
      hasImage: true,
      image: "public/image-3.png",
    },
    {
      id: 7,
      username: "lunavoyager",
      timeAgo: "5d",
      action: "Liked your comment",
      avatar: "public/avatar-6.png",
      hasComment: true,
      comment: "Amazing work!",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[375px] h-[812px] relative">
        {/* Status Bar */}
        <div className="absolute w-[375px] h-11 top-0 left-0">
          <div className="absolute w-[67px] h-[11px] top-[17px] left-[294px]">
            <img
              className="absolute w-6 h-[11px] top-0 left-[42px]"
              alt="Battery"
              src="public/battery.png"
            />
            <img
              className="absolute w-[15px] h-[11px] top-0 left-[22px]"
              alt="Wifi"
              src="public/wifi.svg"
            />
            <img
              className="absolute w-[17px] h-[11px] top-0 left-0"
              alt="Mobile signal"
              src="public/mobile-signal.svg"
            />
          </div>
          <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(public/time.svg)] bg-[100%_100%]" />
        </div>

        {/* Header */}
        <header className="flex w-[375px] items-center gap-4 px-4 py-3 absolute top-11 left-0 bg-transparent">
          <h1 className="font-semibold text-black text-xl tracking-[-0.40px] leading-7">
            Activity
          </h1>
        </header>

        {/* Filter Tabs */}
        <div className="absolute top-24 left-4">
          <Tabs defaultValue="matches">
            <TabsList className="flex gap-2 bg-transparent p-0">
              <TabsTrigger
                value="matches"
                className="bg-[#000000e6] text-white rounded-[20px] px-3.5 py-1.5 font-medium text-sm"
              >
                Matches
              </TabsTrigger>
              <TabsTrigger
                value="points"
                className="bg-white text-black rounded-[20px] px-3.5 py-1.5 font-medium text-sm border border-solid border-[#e6e6e6]"
              >
                Points Earned
              </TabsTrigger>
              <TabsTrigger
                value="redeemed"
                className="bg-white text-black rounded-[20px] px-3.5 py-1.5 font-medium text-sm border border-solid border-[#e6e6e6]"
              >
                Redeemed
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Activity Feed */}
        <div className="absolute w-[375px] h-[668px] top-36 left-0">
          <ScrollArea className="h-[590px] w-full">
            <div className="flex flex-col w-full">
              {activities.map((activity) => (
                <Card
                  key={activity.id}
                  className="rounded-none border-0 shadow-none"
                >
                  <CardContent className="p-0 relative h-full">
                    <div className="flex items-start p-3 relative">
                      {activity.hasNotification && (
                        <div className="absolute w-1.5 h-1.5 top-[33px] left-[5px] bg-[#fe2c55] rounded-[3px]" />
                      )}

                      <Avatar className="w-12 h-12 rounded-full mr-4">
                        <AvatarImage
                          src={activity.avatar}
                          alt={activity.username}
                        />
                        <AvatarFallback>
                          {activity.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col flex-1">
                        <div className="flex items-start gap-1">
                          <span className="font-medium text-black text-sm">
                            {activity.username}
                          </span>
                          <span className="font-normal text-[#00000080] text-sm">
                            {activity.timeAgo}
                          </span>
                        </div>
                        <span className="font-normal text-[#00000080] text-sm">
                          {activity.action}
                        </span>

                        {activity.hasReply && (
                          <span className="font-normal text-black text-sm mt-1">
                            {activity.reply}
                          </span>
                        )}

                        {activity.hasComment && (
                          <div className="mt-4 flex items-center">
                            <div className="w-[3px] h-5 bg-[#d9d9d9] rounded-[3px]" />
                            <span className="ml-2.5 font-normal text-[#828282] text-sm">
                              {activity.comment}
                            </span>
                          </div>
                        )}
                      </div>

                      {activity.hasButton && (
                        <Button className="h-8 bg-black rounded-lg text-white text-sm font-medium px-4">
                          {activity.buttonText}
                        </Button>
                      )}

                      {activity.hasImage && (
                        <div
                          className="w-12 h-12 rounded-lg bg-cover bg-center"
                          style={{ backgroundImage: `url(${activity.image})` }}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>

          {/* Bottom Navigation */}
          <div className="absolute w-[375px] h-[78px] bottom-0 left-0 bg-white shadow-[0px_-0.5px_0px_#0000001a] backdrop-blur-[10px]">
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
                  <AvatarImage src="public/profile-image.png" alt="Profile" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </div>

            <div className="flex justify-center items-center h-[34px]">
              <Separator className="w-[134px] h-[5px] rounded-[100px] bg-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
