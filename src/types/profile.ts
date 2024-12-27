export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  image: string;
  photos: string[];
  location: string;
  interests: string[];
}

export interface Like {
  userId: string;
  profileId: string;
  timestamp: number;
}

export interface Match {
  id: string;
  user1Id: string;
  user2Id: string;
  timestamp: number;
}