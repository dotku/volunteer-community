import { Container } from "../../components/ui/container";
import { Card } from "../../components/ui/card";
import { Avatar } from "../../components/ui/avatar";
import { ChatView } from "./ChatView";
import { useNavigate, useParams } from "react-router-dom";

export const Chat = (): JSX.Element => {
  const navigate = useNavigate();
  const { chatId } = useParams();

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

  // If we have a chatId, show the chat view
  if (chatId) {
    return <ChatView chatId={chatId} />;
  }

  return (
    <Container>
      <div className="py-4 px-4 md:px-0 md:py-6 mb-16 md:mb-0">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        <div className="space-y-2">
          {chats.map((chat) => (
            <Card 
              key={chat.id} 
              className="p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer shadow-sm bg-white"
              onClick={() => navigate(`/chat/${chat.id}`)}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <Avatar className="h-12 w-12 shrink-0">
                  <img src={chat.avatar} alt={chat.name} className="rounded-full" />
                </Avatar>
                <div className="flex-1 min-w-0 py-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium truncate">{chat.name}</h3>
                    <p className="text-sm text-gray-500 shrink-0">{chat.time}</p>
                  </div>
                  <p className="text-sm text-gray-600 truncate mt-1">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-white">{chat.unread}</span>
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