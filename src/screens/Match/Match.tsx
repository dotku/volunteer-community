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
      <div className="py-4 px-4 md:px-0 md:py-6 mb-16 md:mb-0">
        <h1 className="text-2xl font-bold mb-4">Suggested Matches</h1>
        <div className="space-y-3">
          {matches.map((match) => (
            <Card key={match.id} className="p-4 shadow-sm bg-white">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <Avatar className="h-14 w-14 md:h-12 md:w-12">
                  <img src={match.avatar} alt={match.name} className="rounded-full" />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-medium text-base">{match.name}</h3>
                    <span className="text-sm text-gray-500">•</span>
                    <p className="text-sm text-gray-500">{match.role}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{match.location}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {match.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    {match.mutualConnections} mutual connections
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full md:w-auto mt-4 md:mt-0 py-2"
                >
                  Connect
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};