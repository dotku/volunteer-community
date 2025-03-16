import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export const SocialFeed = (): JSX.Element => {
  const posts = [
    {
      id: 1,
      username: "starryskies23",
      timeAgo: "2h",
      content: "Just completed 100 hours of community service! 🎉",
      likes: 245,
      comments: 56,
      shares: 12,
      avatar: "public/profile-image.png",
      image: "public/image.png",
    },
    {
      id: 2,
      username: "nebulanomad",
      timeAgo: "4h",
      content: "Making a difference at the local food bank today! 🥫",
      likes: 189,
      comments: 34,
      shares: 8,
      avatar: "public/avatar-1.png",
      image: "public/image-2.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Status Bar */}
      <div className="h-11 relative">
        <div className="absolute w-[67px] h-[11px] top-[17px] right-4">
          <img className="absolute w-6 h-[11px] top-0 right-0" alt="Battery" src="public/battery.png" />
          <img className="absolute w-[15px] h-[11px] top-0 right-8" alt="Wifi" src="public/wifi.svg" />
          <img className="absolute w-[17px] h-[11px] top-0 right-14" alt="Signal" src="public/mobile-signal.svg" />
        </div>
        <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(public/time.svg)] bg-[100%_100%]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="px-4 py-3">
          <h1 className="text-xl font-semibold">Volunteer Feed</h1>
        </div>
      </header>

      {/* Feed */}
      <ScrollArea className="h-[calc(100vh-7rem)]">
        <div className="p-4 space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="p-4">
              <div className="flex items-start gap-3">
                <Link to={`/profile/${post.username}`}>
                  <Avatar className="w-10 h-10">
                    <img src={post.avatar} alt={post.username} className="rounded-full" />
                  </Avatar>
                </Link>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Link to={`/profile/${post.username}`}>
                      <span className="font-medium hover:underline">{post.username}</span>
                    </Link>
                    <span className="text-gray-500 text-sm">• {post.timeAgo}</span>
                  </div>
                  <p className="mt-2">{post.content}</p>
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
                    <button className="flex items-center gap-2 text-gray-500 hover:text-black">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm">{post.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};