import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";
import { ArrowLeft, MoreVertical, Send, HomeIcon, SearchIcon, Users, MapPin, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Container } from "../../components/ui/container";

export const Chat = (): JSX.Element => {
  const messages = [
    {
      id: 1,
      sender: "other",
      text: "Hi! Thanks for volunteering. When can you start?",
      timestamp: new Date(2024, 0, 15, 14, 30),
      avatar: "public/avatar-1.png",
    },
    {
      id: 2,
      sender: "me",
      text: "Hello! I'm available this weekend. What time works best?",
      timestamp: new Date(2024, 0, 15, 14, 32),
    },
    {
      id: 3,
      sender: "other",
      text: "Great! We start at 9 AM on Saturday. Does that work for you?",
      timestamp: new Date(2024, 0, 15, 14, 35),
      avatar: "public/avatar-1.png",
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
                <Gift className="w-5 h-5" />
                Activity
              </Button>
            </Link>
          </div>
        </nav>
        <div className="p-4 border-t">
          <Link to="/profile">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Avatar className="w-8 h-8">
                <img src="public/profile-image.png" alt="Profile" className="rounded-full" />
              </Avatar>
              <span>Sarah Parker</span>
            </Button>
          </Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-h-screen">
        {/* Status Bar - Mobile only */}
        <div className="h-11 relative md:hidden">
          <div className="absolute w-[67px] h-[11px] top-[17px] right-4">
            <img className="absolute w-6 h-[11px] top-0 right-0" alt="Battery" src="public/battery.png" />
            <img className="absolute w-[15px] h-[11px] top-0 right-8" alt="Wifi" src="public/wifi.svg" />
            <img className="absolute w-[17px] h-[11px] top-0 right-14" alt="Signal" src="public/mobile-signal.svg" />
          </div>
          <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(public/time.svg)] bg-[100%_100%]" />
        </div>

        {/* Chat Header */}
        <header className="sticky top-0 z-10 bg-white border-b">
          <Container>
            <div className="flex items-center px-4 py-3">
              <Link to="/list">
                <Button variant="ghost" size="icon" className="mr-2">
                  <ArrowLeft className="h-6 w-6" />
                </Button>
              </Link>
              <Avatar className="h-10 w-10">
                <img src="public/avatar-1.png" alt="Chat partner" className="rounded-full" />
              </Avatar>
              <div className="ml-3 flex-1">
                <h2 className="font-semibold">Green Earth Initiative</h2>
                <p className="text-sm text-gray-500">Active now</p>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-6 w-6" />
              </Button>
            </div>
          </Container>
        </header>

        {/* Messages */}
        <Container>
          <div className="max-w-4xl mx-auto flex-1">
            <ScrollArea className="flex-1 h-[calc(100vh-11rem)]">
              <div className="space-y-4 p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "other" && (
                      <Avatar className="h-8 w-8 mr-2">
                        <img src={message.avatar} alt="Sender" className="rounded-full" />
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        message.sender === "me"
                          ? "bg-black text-white"
                          : "bg-gray-100 text-black"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {format(message.timestamp, "h:mm a")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </Container>

        {/* Message Input */}
        <Container>
          <div className="max-w-4xl mx-auto border-t p-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Message..."
                className="flex-1 bg-transparent outline-none"
              />
              <Button size="icon" className="ml-2">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};