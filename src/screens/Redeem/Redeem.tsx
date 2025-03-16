import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Redeem = (): JSX.Element => {
  const rewards = [
    {
      id: 1,
      title: "Amazon Gift Card",
      points: 5000,
      value: "$50",
      image: "image.png",
    },
    {
      id: 2,
      title: "Starbucks Gift Card",
      points: 2500,
      value: "$25",
      image: "image-2.png",
    },
    {
      id: 3,
      title: "Target Gift Card",
      points: 10000,
      value: "$100",
      image: "image-3.png",
    },
  ];

  const userPoints = 7500;

  return (
    <div className="bg-white min-h-screen">
      {/* Status Bar */}
      <div className="h-11 relative">
        <div className="absolute w-[67px] h-[11px] top-[17px] right-4">
          <img className="absolute w-6 h-[11px] top-0 right-0" alt="Battery" src="public/battery.png" />
          <img className="absolute w-[15px] h-[11px] top-0 right-8" alt="Wifi" src="public/wifi.svg" />
          <img className="absolute w-[17px] h-[11px] top-0 right-14" alt="Signal" src="public/mobile-signal.svg" />
        </div>
        <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(public/time.svg)] bg-[100%_100%]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="px-4 py-3 flex items-center">
          <Link to="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">Redeem Points</h1>
        </div>
      </header>

      {/* Points Display */}
      <div className="bg-black text-white p-6 text-center">
        <h2 className="text-2xl font-semibold">{userPoints.toLocaleString()}</h2>
        <p className="text-gray-300">Available Points</p>
      </div>

      {/* Rewards List */}
      <ScrollArea className="h-[calc(100vh-11rem)]">
        <div className="p-4 grid gap-4">
          {rewards.map((reward) => (
            <Card key={reward.id} className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                  <img src={reward.image} alt={reward.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{reward.title}</h3>
                  <p className="text-gray-500">{reward.value}</p>
                  <p className="text-sm font-medium mt-1">{reward.points.toLocaleString()} points</p>
                </div>
                <Button
                  disabled={userPoints < reward.points}
                  className={userPoints < reward.points ? "opacity-50" : ""}
                >
                  Redeem
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};