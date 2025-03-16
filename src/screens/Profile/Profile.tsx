import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Container } from "../../components/ui/container";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { useEffect, useState } from "react";

interface UserProfile {
  id: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  stats: {
    points: number;
    connections: number;
    activities: number;
  };
  connections: Array<{
    id: string;
    name: string;
    role: string;
    avatar: string;
    mutualConnections: number;
  }>;
  activities: Array<{
    id: string;
    title: string;
    date: string;
    location: string;
    participants: number;
    image: string;
  }>;
}

export const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<UserProfile>({
    id: "1",
    name: "Sarah Parker",
    role: "Volunteer since 2023",
    avatar: "/profile-image.png",
    location: "New York, NY",
    stats: {
      points: 1250,
      connections: 48,
      activities: 12,
    },
    connections: [
      {
        id: "2",
        name: "John Doe",
        role: "Volunteer",
        avatar: "/avatar-1.png",
        mutualConnections: 5,
      },
    ],
    activities: [
      {
        id: "1",
        title: "Central Park Cleanup",
        date: "March 15, 2024",
        location: "Central Park",
        participants: 20,
        image: "/activity-1.jpg",
      },
    ],
  });

  useEffect(() => {
    // Fetch profile data
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/profile/${id || 'me'}`);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [id]);

  return (
    <Container>
      <div className="p-4">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20">
              <img src={profile.avatar} alt={profile.name} className="rounded-full" />
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-gray-500">{profile.role}</p>
            </div>
          </div>

          <Tabs defaultValue="connections">
            <TabsList className="mb-4">
              <TabsTrigger value="connections">Connections</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>
            <TabsContent value="connections">
              <div className="space-y-4">
                {profile.connections.map((connection) => (
                  <div key={connection.id} className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <img src={connection.avatar} alt={connection.name} className="rounded-full" />
                    </Avatar>
                    <div>
                      <p className="font-medium">{connection.name}</p>
                      <p className="text-sm text-gray-500">{connection.role}</p>
                    </div>
                    <Button variant="outline" className="ml-auto">Message</Button>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="activities">
              <div className="space-y-4">
                {profile.activities.map((activity) => (
                  <div key={activity.id} className="border-l-2 border-gray-200 pl-4">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                    <p className="text-sm mt-2">{activity.participants} participants</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </Container>
  );
};