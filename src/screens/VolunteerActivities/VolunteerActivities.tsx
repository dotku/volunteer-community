import { Container } from "../../components/ui/container";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar } from "../../components/ui/avatar";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export const VolunteerActivities = () => {
  const activities = [
    {
      id: "1",
      title: "Beach Cleanup",
      organization: "Green Earth",
      organizationAvatar: "https://ui-avatars.com/api/?name=Green+Earth&background=0D9488&color=fff",
      date: "March 20, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Santa Monica Beach",
      participants: 15,
      maxParticipants: 20,
      points: 100,
    },
    {
      id: "2",
      title: "Food Bank Distribution",
      organization: "Community Food Bank",
      organizationAvatar: "https://ui-avatars.com/api/?name=Community+Food+Bank&background=2563EB&color=fff",
      date: "March 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Downtown Food Bank",
      participants: 8,
      maxParticipants: 12,
      points: 150,
    },
    {
      id: "3",
      title: "Park Maintenance",
      organization: "City Parks Department",
      organizationAvatar: "https://ui-avatars.com/api/?name=City+Parks&background=047857&color=fff",
      date: "March 23, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Central Park",
      participants: 20,
      maxParticipants: 25,
      points: 200,
    },
  ];

  return (
    <Container>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Volunteer Activities</h1>
          <Button>Create Activity</Button>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <Card key={activity.id} className="p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <img src={activity.organizationAvatar} alt={activity.organization} className="rounded-full" />
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{activity.title}</h3>
                      <p className="text-sm text-gray-500">{activity.organization}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{activity.points} points</p>
                      <p className="text-sm text-gray-500">
                        {activity.participants}/{activity.maxParticipants} spots
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{activity.participants} joined</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Button className="flex-1" variant="outline">View Details</Button>
                    <Button className="flex-1">Join Activity</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};
