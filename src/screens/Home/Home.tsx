import { Avatar } from "../../components/ui/avatar";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/container";

export const Home = (): JSX.Element => {
  const posts = [
    {
      id: 1,
      username: "starryskies23",
      timeAgo: "2h",
      content:
        "Looking for volunteers to help clean up Central Park this weekend! ",
      likes: 124,
      comments: 45,
      avatar: "/profile-image.png",
      image: "/image.png",
    },
    {
      id: 2,
      username: "nebulanomad",
      timeAgo: "4h",
      content:
        "Just finished my first day volunteering at the local animal shelter! ",
      likes: 89,
      comments: 23,
      avatar: "/avatar-1.png",
      image: "/image-2.png",
    },
    {
      id: 3,
      username: "emberecho",
      timeAgo: "6h",
      content:
        "Incredible turnout at today's beach cleanup! Thank you to all 50+ volunteers who showed up! ",
      likes: 156,
      comments: 34,
      avatar: "/avatar-2.png",
      image: "/image-3.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Feed */}
      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="pb-20 space-y-4 p-4">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-center gap-3">
                      <Link to={`/profile/${post.username}`}>
                        <Avatar className="w-10 h-10">
                          <img
                            src={post.avatar}
                            alt={post.username}
                            className="rounded-full"
                          />
                        </Avatar>
                      </Link>
                      <div>
                        <Link to={`/profile/${post.username}`}>
                          <span className="font-medium hover:underline">
                            {post.username}
                          </span>
                        </Link>
                        <p className="text-sm text-gray-500">{post.timeAgo}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-[15px]">{post.content}</p>
                    {post.image && (
                      <div className="mt-3 -mx-4">
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="mt-3 flex items-center gap-4">
                      <button className="flex items-center gap-1 text-gray-500">
                        <span></span>
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-500">
                        <span></span>
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </Container>
    </div>
  );
};
