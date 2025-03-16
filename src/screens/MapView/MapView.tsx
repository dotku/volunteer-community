import { Container } from "../../components/ui/container";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar } from "../../components/ui/avatar";
import { MapPin } from "lucide-react";

export const MapView = () => {
  const activities = [
    {
      id: "1",
      title: "Beach Cleanup",
      organization: "Green Earth",
      organizationAvatar: "https://ui-avatars.com/api/?name=Green+Earth&background=0D9488&color=fff",
      location: "Santa Monica Beach, CA",
      participants: 15,
      maxParticipants: 20,
      coordinates: "34.0185,-118.4912",
    },
    {
      id: "2",
      title: "Food Bank Distribution",
      organization: "Community Food Bank",
      organizationAvatar: "https://ui-avatars.com/api/?name=Community+Food+Bank&background=2563EB&color=fff",
      location: "Oakland Food Bank, CA",
      participants: 8,
      maxParticipants: 12,
      coordinates: "37.8044,-122.2712",
    },
  ];

  return (
    <Container>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Activity Map</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-lg overflow-hidden h-[600px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d423286.27405770525!2d-118.69192047471642!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1651103200786!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-4">
            <h2 className="font-medium text-gray-500">Nearby Activities</h2>
            {activities.map((activity) => (
              <Card key={activity.id} className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <img src={activity.organizationAvatar} alt={activity.organization} className="rounded-full" />
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">{activity.title}</h3>
                    <p className="text-sm text-gray-500">{activity.organization}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {activity.participants}/{activity.maxParticipants} participants
                    </p>
                    <Button className="w-full mt-3" variant="outline">View Details</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
