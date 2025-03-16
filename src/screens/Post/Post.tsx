import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Image as ImageIcon, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar } from "../../components/ui/avatar";

export const Post = (): JSX.Element => {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Create Post</h1>
          </div>
          <Button 
            disabled={!content.trim() && !selectedImage}
            className="px-6"
          >
            Post
          </Button>
        </div>
      </header>

      {/* Post Creation Form */}
      <div className="p-4">
        <Card className="p-4">
          <div className="flex gap-3">
            <Avatar className="w-10 h-10">
              <img src="public/profile-image.png" alt="Profile" className="rounded-full" />
            </Avatar>
            <div className="flex-1">
              <textarea
                placeholder="Share your volunteer experience..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[120px] resize-none border-none focus:outline-none text-[15px]"
              />
              {selectedImage && (
                <div className="mt-4 relative">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full rounded-xl"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={() => setSelectedImage(null)}
                  >
                    ×
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="mt-4 space-y-2">
          <label className="w-full">
            <Button variant="outline" className="w-full justify-start gap-2">
              <ImageIcon className="w-5 h-5" />
              Add Photo
            </Button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
          </label>
          <Button variant="outline" className="w-full justify-start gap-2">
            <MapPin className="w-5 h-5" />
            Add Location
          </Button>
        </div>
      </div>
    </div>
  );
};