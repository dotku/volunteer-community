import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './screens/Home/Home';
import { Search } from './screens/Search/Search';
import { Match } from './screens/Match/Match';
import { MapView } from './screens/MapView/MapView';
import { Chat } from './screens/Chat/Chat';
import { Profile } from './screens/Profile/Profile';
import { Redeem } from './screens/Redeem/Redeem';
import { VolunteerActivities } from './screens/VolunteerActivities/VolunteerActivities';
import { Button } from './components/ui/button';
import { Avatar } from './components/ui/avatar';
import { HomeIcon, SearchIcon, Users, MapPin, Gift, MessageSquare, Calendar } from 'lucide-react';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r h-screen sticky top-0">
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
              <Link to="/chat">
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <MessageSquare className="w-5 h-5" />
                  Chat
                </Button>
              </Link>
              <Link to="/activity">
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <Calendar className="w-5 h-5" />
                  Activities
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
                  <img src="https://ui-avatars.com/api/?name=Sarah+Parker&background=random" alt="Profile" className="rounded-full" />
                </Avatar>
                <span>Sarah Parker</span>
              </Button>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
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

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/match" element={<Match />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/redeem" element={<Redeem />} />
            <Route path="/activity" element={<VolunteerActivities />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
