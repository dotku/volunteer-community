import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { MapPin, Menu, HomeIcon, SearchIcon, Users, Gift } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/ui/container";
import { useEffect, useState } from "react";

interface UserProfile {
  id: number;
  name: string;
  role: string;
  location: string;
  avatar: string;
  stats: {
    points: number;
    connections: number;
    activities: number;
  };
  connections: Array<{
    id: number;
    name: string;
    role: string;
    avatar: string;
    mutualConnections: number;
  }>;
  activities: Array<{
    id: number;
    title: string;
    date: string;
    location: string;
    participants: number;
    image: string;
  }>;
}

export const Profile = (): JSX.Element => {
  const { id } = useParams();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'connections' | 'activities'>('connections');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/profile?id=${id || 'me'}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error || 'Profile not found'}</div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex">
      {/* Desktop Sidebar - Hidden on mobile */}
      <aside className="hidden md:flex w-64 flex-col border-r">
        <div className="p-4">
          <Link to="/">
            <h1 className="text-2xl font-bold">Volunteer</h1>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Button>
          </Link>
          <Link to="/search">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <SearchIcon className="h-5 w-5" />
              <span>Search</span>
            </Button>
          </Link>
          <Link to="/matches">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Users className="h-5 w-5" />
              <span>Matches</span>
            </Button>
          </Link>
          <Link to="/map">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <MapPin className="h-5 w-5" />
              <span>Map View</span>
            </Button>
          </Link>
          <Link to="/redeem">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Gift className="h-5 w-5" />
              <span>Redeem</span>
            </Button>
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Link to="/profile">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-gray-100">
              <Avatar className="w-8 h-8">
                <img src="/profile-image.png" alt="Profile" className="rounded-full" />
              </Avatar>
              <span>Sarah Parker</span>
            </Button>
          </Link>
        </div>
      </aside>

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

        <Container>
          {/* Header */}
          <header className="sticky top-0 z-10 bg-white border-b">
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link to="/" className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </Link>
                <h1 className="text-xl font-semibold">Profile</h1>
              </div>
            </div>
          </header>

          {/* Profile Info */}
          <div className="p-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <img src={profile.avatar} alt={profile.name} className="rounded-full" />
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">{profile.name}</h2>
                <p className="text-gray-600">{profile.role}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin className="h-4 w-4" /> {profile.location}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <Card className="p-4 text-center">
                <p className="text-2xl font-semibold">{profile.stats.points.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Points</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="text-2xl font-semibold">{profile.stats.connections}</p>
                <p className="text-sm text-gray-600">Connections</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="text-2xl font-semibold">{profile.stats.activities}</p>
                <p className="text-sm text-gray-600">Activities</p>
              </Card>
            </div>

            {/* Tabs Content */}
            <div className="mt-6">
              <div className="border-b mb-6">
                <div className="flex">
                  <button
                    className={`px-4 py-2 ${activeTab === 'connections' ? 'border-b-2 border-black font-medium' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('connections')}
                  >
                    Connections
                  </button>
                  <button
                    className={`px-4 py-2 ${activeTab === 'activities' ? 'border-b-2 border-black font-medium' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('activities')}
                  >
                    Activities
                  </button>
                </div>
              </div>

              {/* Connections Grid */}
              {activeTab === 'connections' && (
                <div className="grid md:grid-cols-2 gap-4">
                  {profile.connections.map((connection) => (
                    <Link key={connection.id} to={`/profile/${connection.id}`}>
                      <Card className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <img src={connection.avatar} alt={connection.name} className="rounded-full" />
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-medium">{connection.name}</h3>
                            <p className="text-sm text-gray-600">{connection.role}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {connection.mutualConnections} mutual connections
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}

              {/* Activities List */}
              {activeTab === 'activities' && (
                <div className="space-y-4">
                  {profile.activities.map((activity) => (
                    <Card key={activity.id} className="p-4">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                          <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{activity.title}</h3>
                          <p className="text-sm text-gray-600">{activity.date}</p>
                          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            <MapPin className="h-4 w-4" /> {activity.location}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {activity.participants} participants
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};