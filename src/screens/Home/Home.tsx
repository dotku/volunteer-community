import { Avatar } from "../../components/ui/avatar";
import { Card } from "../../components/ui/card";
import { Link } from "react-router-dom";
import { Container } from "../../components/ui/container";
import { Heart, MessageSquare } from "lucide-react";

export const Home = (): JSX.Element => {
  const posts = [
    {
      id: 1,
      username: "starryskies23",
      name: "Sarah Parker",
      timeAgo: "2h",
      content: "Looking for volunteers to help clean up Central Park this weekend! Join us for a day of community service and environmental stewardship. All equipment will be provided. ",
      likes: 124,
      comments: 45,
      avatar: "https://ui-avatars.com/api/?name=Sarah+Parker&background=random",
      image: "https://ui-avatars.com/api/?name=Central+Park+Cleanup&size=400&background=0D9488&color=fff",
    },
    {
      id: 2,
      username: "nebulanomad",
      name: "Alex Rivera",
      timeAgo: "4h",
      content: "Just finished my first day volunteering at the local animal shelter! Such an amazing experience helping these wonderful animals. Looking forward to coming back next week! ",
      likes: 89,
      comments: 23,
      avatar: "https://ui-avatars.com/api/?name=Alex+Rivera&background=6366F1",
      image: "https://ui-avatars.com/api/?name=Animal+Shelter&size=400&background=6366F1&color=fff",
    },
    {
      id: 3,
      username: "emberecho",
      name: "Jordan Lee",
      timeAgo: "6h",
      content: "Incredible turnout at today's beach cleanup! Thank you to all 50+ volunteers who showed up! Together we collected over 200 pounds of trash. Making our beaches cleaner one day at a time. ",
      likes: 156,
      comments: 34,
      avatar: "https://ui-avatars.com/api/?name=Jordan+Lee&background=0EA5E9",
      image: "https://ui-avatars.com/api/?name=Beach+Cleanup&size=400&background=0EA5E9&color=fff",
    },
  ];

  return (
    <Container>
      <div className="py-4 px-4 md:px-0 md:py-6 mb-16 md:mb-0">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden bg-white shadow-sm"
              >
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <Link to={`/profile/${post.username}`}>
                      <Avatar className="h-10 w-10 ring-2 ring-white">
                        <img
                          src={post.avatar}
                          alt={post.name}
                          className="rounded-full"
                        />
                      </Avatar>
                    </Link>
                    <div>
                      <Link to={`/profile/${post.username}`}>
                        <div className="font-medium hover:underline">
                          {post.name}
                        </div>
                      </Link>
                      <p className="text-sm text-gray-500">
                        @{post.username} · {post.timeAgo}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-[15px] whitespace-pre-wrap">{post.content}</p>
                  {post.image && (
                    <div className="mt-3 -mx-4">
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>
                  )}
                  <div className="mt-3 flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
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
