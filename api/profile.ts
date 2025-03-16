import { VercelRequest, VercelResponse } from '@vercel/node';

interface UserProfile {
  id: number;
  name: string;
  role: string;
  location: string;
  avatar: string;
  stats: {
    points: number;
    connections: number;
    activities: number;
  };
  connections: Array<{
    id: number;
    name: string;
    role: string;
    avatar: string;
    mutualConnections: number;
  }>;
  activities: Array<{
    id: number;
    title: string;
    date: string;
    location: string;
    participants: number;
    image: string;
  }>;
}

export const mockProfiles: { [key: string]: UserProfile } = {
  'me': {
    id: 0,
    name: "Sarah Parker",
    role: "Environmental Advocate | Community Leader",
    location: "San Francisco, CA",
    avatar: "/profile-image.png",
    stats: {
      points: 7500,
      connections: 128,
      activities: 45,
    },
    connections: [
      {
        id: 1,
        name: "Emma Wilson",
        role: "Environmental Activist",
        avatar: "/avatar-1.png",
        mutualConnections: 12,
      },
      {
        id: 2,
        name: "James Chen",
        role: "Animal Shelter Volunteer",
        avatar: "/avatar-2.png",
        mutualConnections: 8,
      },
      {
        id: 3,
        name: "Sofia Garcia",
        role: "Community Organizer",
        avatar: "/avatar-3.png",
        mutualConnections: 15,
      },
      {
        id: 4,
        name: "Michael Kim",
        role: "Food Bank Coordinator",
        avatar: "/avatar-4.png",
        mutualConnections: 6,
      },
      {
        id: 5,
        name: "Olivia Brown",
        role: "Youth Mentor",
        avatar: "/avatar-5.png",
        mutualConnections: 10,
      },
      {
        id: 6,
        name: "David Lee",
        role: "Disaster Relief Volunteer",
        avatar: "/avatar-6.png",
        mutualConnections: 4,
      }
    ],
    activities: [
      {
        id: 1,
        title: "Beach Cleanup",
        date: "Mar 15, 2025",
        location: "Santa Monica Beach",
        participants: 45,
        image: "/image.png",
      },
      {
        id: 2,
        title: "Animal Shelter Support",
        date: "Mar 10, 2025",
        location: "Happy Paws Shelter",
        participants: 12,
        image: "/image-2.png",
      },
      {
        id: 3,
        title: "Food Bank Distribution",
        date: "Mar 5, 2025",
        location: "Community Center",
        participants: 30,
        image: "/image-3.png",
      }
    ]
  },
  '1': {
    id: 1,
    name: "Emma Wilson",
    role: "Environmental Activist",
    location: "Portland, OR",
    avatar: "/avatar-1.png",
    stats: {
      points: 6200,
      connections: 95,
      activities: 32,
    },
    connections: [
      {
        id: 0,
        name: "Sarah Parker",
        role: "Environmental Advocate",
        avatar: "/profile-image.png",
        mutualConnections: 12,
      }
    ],
    activities: [
      {
        id: 1,
        title: "River Cleanup",
        date: "Mar 12, 2025",
        location: "Willamette River",
        participants: 35,
        image: "/image-4.png",
      }
    ]
  }
};

// This function works for both Vercel serverless and local Express server
export default async function handler(
  request: VercelRequest | any,
  response: VercelResponse | any,
) {
  try {
    const id = request.query?.id || 'me';
    const profile = mockProfiles[id as string];

    if (!profile) {
      return response.status(404).json({ error: 'Profile not found' });
    }

    // Add artificial delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, 500));

    return response.status(200).json(profile);
  } catch (error) {
    console.error('Error in profile handler:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}
