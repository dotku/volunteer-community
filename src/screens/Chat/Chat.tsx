import { Container } from "../../components/ui/container";
import { Card } from "../../components/ui/card";
import { Avatar } from "../../components/ui/avatar";

export const Chat = (): JSX.Element => {
  const chats = [
    {
      id: "1",
      name: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=6366F1&color=fff",
      lastMessage: "Thanks for helping out yesterday!",
      time: "2:30 PM",
      unread: 2,
    },
    {
      id: "2",
      name: "Green Earth",
      avatar: "https://ui-avatars.com/api/?name=Green+Earth&background=0D9488&color=fff",
      lastMessage: "The cleanup event is tomorrow at 9 AM",
      time: "11:45 AM",
      unread: 0,
    },
  ];

  return (
    <Container>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        <div className="space-y-4">
          {chats.map((chat) => (
            <Card key={chat.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <img src={chat.avatar} alt={chat.name} className="rounded-full" />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium truncate">{chat.name}</h3>
                    <p className="text-sm text-gray-500">{chat.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">{chat.unread}</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};