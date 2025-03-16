import { Container } from "../../components/ui/container";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar } from "../../components/ui/avatar";
import { Input } from "../../components/ui/input";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: "user" | "other";
}

interface ChatViewProps {
  chatId: string;
}

export const ChatView = ({ chatId }: ChatViewProps) => {
  const [newMessage, setNewMessage] = useState("");
  
  // Mock data - in real app this would come from a backend
  const chat = {
    id: chatId,
    name: "John Doe",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=6366F1&color=fff",
    status: "online",
    messages: [
      {
        id: "1",
        content: "Hey, thanks for volunteering at the beach cleanup!",
        timestamp: "10:30 AM",
        sender: "other",
      },
      {
        id: "2",
        content: "No problem! It was a great experience.",
        timestamp: "10:31 AM",
        sender: "user",
      },
      {
        id: "3",
        content: "Would you be interested in joining our next event?",
        timestamp: "10:32 AM",
        sender: "other",
      },
      {
        id: "4",
        content: "We're organizing a park cleanup next weekend.",
        timestamp: "10:32 AM",
        sender: "other",
      },
      {
        id: "5",
        content: "That sounds great! What time does it start?",
        timestamp: "10:33 AM",
        sender: "user",
      },
    ] as Message[],
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // In a real app, this would be handled by a backend
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Container>
      <div className="flex flex-col h-[calc(100vh-4rem)] md:h-screen">
        {/* Chat Header */}
        <div className="py-4 px-4 md:px-0 border-b bg-white">
          <div className="flex items-center gap-3">
            <Link to="/chat" className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <Avatar className="h-9 w-9">
              <img src={chat.avatar} alt={chat.name} className="rounded-full" />
            </Avatar>
            <div>
              <h2 className="font-medium">{chat.name}</h2>
              <p className="text-sm text-green-600">{chat.status}</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chat.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white rounded-l-lg rounded-tr-lg"
                    : "bg-gray-100 text-gray-900 rounded-r-lg rounded-tl-lg"
                } px-4 py-2`}
              >
                <p>{message.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              size="icon"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
