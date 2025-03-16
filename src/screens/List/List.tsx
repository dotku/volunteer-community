import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const List = (): JSX.Element => {
  const chats = [
    {
      id: 1,
      name: "Green Earth Initiative",
      lastMessage: "Great! See you on Saturday at 9 AM.",
      time: "2m",
      avatar: "public/avatar-1.png",
      unread: 2,
    },
    {
      id: 2,
      name: "Animal Shelter",
      lastMessage: "Thank you for your help today!",
      time: "1h",
      avatar: "public/avatar-2.png",
    },
    // Add more chats as needed
  ];

  return (
    <div className="bg-white h-screen flex flex-col">
      {/* Status Bar */}
      <div className="w-full h-11">
        <div className="absolute w-[67px] h-[11px] top-[17px] right-4">
          <img className="absolute w-6 h-[11px] top-0 right-0" alt="Battery" src="public/battery.png" />
          <img className="absolute w-[15px] h-[11px] top-0 right-8" alt="Wifi" src="public/wifi.svg" />
          <img className="absolute w-[17px] h-[11px] top-0 right-14" alt="Signal" src="public/mobile-signal.svg" />
        </div>
        <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(public/time.svg)] bg-[100%_100%]" />
      </div>

      {/* Header */}
      <div className="flex items-center px-4 py-3">
        <Link to="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-semibold flex-1">Messages</h1>
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        {chats.map((chat) => (
          <Link to="/chat" key={chat.id}>
            <Card className="flex items-center p-4 border-0 hover:bg-gray-50">
              <Avatar className="h-12 w-12">
                <img src={chat.avatar} alt={chat.name} className="rounded-full" />
              </Avatar>
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{chat.name}</h3>
                  <span className="text-sm text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-1">{chat.lastMessage}</p>
              </div>
              {chat.unread && (
                <div className="ml-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {chat.unread}
                </div>
              )}
            </Card>
          </Link>
        ))}
      </ScrollArea>
    </div>
  );
};