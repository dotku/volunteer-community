import { Container } from "../../components/ui/container";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar } from "../../components/ui/avatar";

export const Match = () => {
  const matches = [
    {
      id: "1",
      name: "John Doe",
      role: "Volunteer",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=6366F1&color=fff",
      interests: ["Environment", "Education"],
      location: "New York, NY",
      mutualConnections: 5,
    },
    {
      id: "2",
      name: "Green Earth",
      role: "Organization",
      avatar: "https://ui-avatars.com/api/?name=Green+Earth&background=0D9488&color=fff",
      interests: ["Environment", "Community"],
      location: "Brooklyn, NY",
      mutualConnections: 3,
    },
  ];

  return (
    <Container>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Suggested Matches</h1>
        <div className="space-y-4">
          {matches.map((match) => (
            <Card key={match.id} className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <img src={match.avatar} alt={match.name} className="rounded-full" />
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{match.name}</h3>
                    <span className="text-sm text-gray-500">•</span>
                    <p className="text-sm text-gray-500">{match.role}</p>
                  </div>
                  <p className="text-sm text-gray-500">{match.location}</p>
                  <div className="flex gap-2 mt-2">
                    {match.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {match.mutualConnections} mutual connections
                  </p>
                </div>
                <Button variant="outline">Connect</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};