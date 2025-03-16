import { Container } from "../../components/ui/container";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Avatar } from "../../components/ui/avatar";
import { Gift, Clock, Award, AlertCircle } from "lucide-react";

export const Redeem = () => {
  const userPoints = 750;
  
  const rewards = [
    {
      id: "1",
      title: "Starbucks Gift Card",
      provider: "Starbucks",
      providerAvatar: "https://ui-avatars.com/api/?name=Starbucks&background=036635&color=fff",
      points: 500,
      value: "$25",
      description: "Enjoy your favorite beverages and treats at any Starbucks location.",
      expiresIn: "30 days",
      available: true,
    },
    {
      id: "2",
      title: "Amazon Gift Card",
      provider: "Amazon",
      providerAvatar: "https://ui-avatars.com/api/?name=Amazon&background=FF9900&color=000",
      points: 1000,
      value: "$50",
      description: "Shop millions of items on Amazon.com with this digital gift card.",
      expiresIn: "60 days",
      available: true,
    },
    {
      id: "3",
      title: "Target Gift Card",
      provider: "Target",
      providerAvatar: "https://ui-avatars.com/api/?name=Target&background=CC0000&color=fff",
      points: 800,
      value: "$40",
      description: "Redeem at any Target store or online for quality products.",
      expiresIn: "45 days",
      available: true,
    },
    {
      id: "4",
      title: "Whole Foods Market Gift Card",
      provider: "Whole Foods",
      providerAvatar: "https://ui-avatars.com/api/?name=Whole+Foods&background=00796B&color=fff",
      points: 600,
      value: "$30",
      description: "Get fresh, organic groceries and prepared foods at Whole Foods Market.",
      expiresIn: "30 days",
      available: false,
    },
  ];

  return (
    <Container>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Redeem Points</h1>
            <p className="text-gray-500">Turn your volunteer points into rewards</p>
          </div>
          <Card className="p-4 flex items-center gap-3">
            <Award className="w-5 h-5 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Available Points</p>
              <p className="font-bold text-lg">{userPoints}</p>
            </div>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rewards.map((reward) => (
            <Card key={reward.id} className={`p-4 ${!reward.available && 'opacity-60'}`}>
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <img src={reward.providerAvatar} alt={reward.provider} className="rounded-full" />
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{reward.title}</h3>
                      <p className="text-sm text-gray-500">{reward.provider}</p>
                    </div>
                    <p className="font-bold text-lg">{reward.value}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{reward.description}</p>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Gift className="w-4 h-4" />
                      <span>{reward.points} points</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Expires in {reward.expiresIn}</span>
                    </div>
                  </div>

                  {!reward.available ? (
                    <div className="flex items-center gap-2 mt-4 text-sm text-orange-600">
                      <AlertCircle className="w-4 h-4" />
                      <span>Currently out of stock</span>
                    </div>
                  ) : (
                    <Button 
                      className="w-full mt-4" 
                      variant={userPoints >= reward.points ? "default" : "outline"}
                      disabled={userPoints < reward.points}
                    >
                      {userPoints >= reward.points ? "Redeem Now" : `Need ${reward.points - userPoints} more points`}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};