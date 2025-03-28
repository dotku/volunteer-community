import { Container } from "../../components/ui/container";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar } from "../../components/ui/avatar";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "../../components/ui/input";

export const Search = () => {
  const searchResults = [
    {
      id: "1",
      type: "organization",
      name: "Green Earth",
      avatar: "https://ui-avatars.com/api/?name=Green+Earth&background=0D9488&color=fff",
      description: "Environmental conservation organization",
      location: "Los Angeles, CA",
      tags: ["Environment", "Conservation", "Community"],
    },
    {
      id: "2",
      type: "volunteer",
      name: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=6366F1&color=fff",
      description: "Passionate about environmental causes",
      location: "San Francisco, CA",
      tags: ["Environment", "Education"],
    },
    {
      id: "3",
      type: "organization",
      name: "Community Food Bank",
      avatar: "https://ui-avatars.com/api/?name=Community+Food+Bank&background=2563EB&color=fff",
      description: "Fighting hunger in our community",
      location: "Oakland, CA",
      tags: ["Food Security", "Community", "Health"],
    },
    {
      id: "4",
      type: "volunteer",
      name: "Jane Smith",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=6366F1&color=fff",
      description: "Experienced in community organizing",
      location: "Berkeley, CA",
      tags: ["Community", "Leadership"],
    },
  ];

  return (
    <Container>
      <div className="py-4 px-4 md:px-0 md:py-6 mb-16 md:mb-0">
        <h1 className="text-2xl font-bold mb-4">Search</h1>
        
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for volunteers or organizations..."
            className="pl-10 w-full bg-white shadow-sm"
          />
        </div>

        <div className="space-y-3">
          {searchResults.map((result) => (
            <Card key={result.id} className="p-4 shadow-sm bg-white">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <Avatar className="h-14 w-14 md:h-12 md:w-12">
                  <img src={result.avatar} alt={result.name} className="rounded-full" />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-medium text-base">{result.name}</h3>
                    <span className="text-sm text-gray-500">•</span>
                    <p className="text-sm text-gray-500 capitalize">{result.type}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{result.location}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{result.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {result.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full md:w-auto mt-4 md:mt-0 py-2"
                >
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};