import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Search } from "./screens/Search/Search";
import { Match } from "./screens/Match/Match";
import { MapView } from "./screens/MapView/MapView";
import { Chat } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";
import { VolunteerActivities } from "./screens/VolunteerActivities/VolunteerActivities";
import { Redeem } from "./screens/Redeem/Redeem";
import { Button } from "./components/ui/button";
import { Avatar } from "./components/ui/avatar";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Users as UsersIcon,
  Map as MapIcon,
  MessageSquare as ChatIcon,
  Calendar as CalendarIcon,
  Gift as GiftIcon,
  Menu as MenuIcon,
} from "lucide-react";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", to: "/", icon: HomeIcon },
    { name: "Search", to: "/search", icon: SearchIcon },
    { name: "Matches", to: "/match", icon: UsersIcon },
    { name: "Map View", to: "/map", icon: MapIcon },
    { name: "Chat", to: "/chat", icon: ChatIcon },
    { name: "Activities", to: "/activity", icon: CalendarIcon },
    { name: "Redeem", to: "/redeem", icon: GiftIcon },
  ];

  return (
    <Router>
      <Analytics />
      <div className="min-h-screen bg-gray-50">
        {/* Desktop Sidebar */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://ui-avatars.com/api/?name=Volunteer+Community&background=3B82F6&color=fff"
                alt="Volunteer Community"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link to={item.to}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-3"
                          >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                          </Button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="border-t">
              <Link to="/profile">
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <Avatar className="h-8 w-8 ring-2 ring-white relative z-10">
                    <img
                      src="https://ui-avatars.com/api/?name=Sarah+Parker&background=random"
                      alt="Profile"
                      className="rounded-full"
                    />
                  </Avatar>
                  <span className="relative z-0">Sarah Parker</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 md:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center gap-x-4 lg:gap-x-6">
              <img
                className="h-8 w-auto"
                src="https://ui-avatars.com/api/?name=Volunteer+Community&background=3B82F6&color=fff"
                alt="Volunteer Community"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="flex h-16 items-center justify-between px-4 border-b">
              <img
                className="h-8 w-auto"
                src="https://ui-avatars.com/api/?name=Volunteer+Community&background=3B82F6&color=fff"
                alt="Volunteer Community"
              />
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex flex-col p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Button>
                </Link>
              ))}
              <div className="border-t mt-4 pt-4">
                <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3"
                  >
                    <Avatar className="h-8 w-8 ring-2 ring-white relative z-10">
                      <img
                        src="https://ui-avatars.com/api/?name=Sarah+Parker&background=random"
                        alt="Profile"
                        className="rounded-full"
                      />
                    </Avatar>
                    <span className="relative z-0">Sarah Parker</span>
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-30">
          <nav className="flex justify-around p-2">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="flex flex-col items-center p-2"
              >
                <item.icon className="h-6 w-6" />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:pl-64">
          <main className="pb-16 md:pb-0 relative z-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/match" element={<Match />} />
              <Route path="/map" element={<MapView />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/chat/:chatId" element={<Chat />} />
              <Route path="/activity" element={<VolunteerActivities />} />
              <Route path="/redeem" element={<Redeem />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
