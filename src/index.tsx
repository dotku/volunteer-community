import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Search } from "./screens/Search/Search";
import { VolunteerActivities } from "./screens/VolunteerActivities";
import { SignUp } from "./screens/SignUp/SignUp";
import { Chat } from "./screens/Chat/Chat";
import { List } from "./screens/List/List";
import { Match } from "./screens/Match/Match";
import { MapView } from "./screens/MapView/MapView";
import { SocialFeed } from "./screens/SocialFeed/SocialFeed";
import { Redeem } from "./screens/Redeem/Redeem";
import { Post } from "./screens/Post/Post";
import { Profile } from "./screens/Profile/Profile";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/activity" element={<VolunteerActivities />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/list" element={<List />} />
        <Route path="/match" element={<Match />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/feed" element={<SocialFeed />} />
        <Route path="/redeem" element={<Redeem />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </StrictMode>
);