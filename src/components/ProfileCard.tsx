import React from 'react';
import { Heart, X, Info } from 'lucide-react';
import { Profile } from '../data/profiles';

interface ProfileCardProps {
  profile: Profile;
  onLike: () => void;
  onPass: () => void;
  onViewProfile: () => void;
}

export function ProfileCard({ profile, onLike, onPass, onViewProfile }: ProfileCardProps) {
  return (
    <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">
      <img 
        src={profile.image} 
        alt={profile.name}
        className="w-full h-[400px] object-cover"
      />
      <button
        onClick={onViewProfile}
        className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
      >
        <Info className="w-6 h-6" />
      </button>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold">
          {profile.name}, {profile.age}
        </h2>
        <p className="text-gray-600 mt-1">{profile.location}</p>
        <p className="mt-3 line-clamp-2">{profile.bio}</p>
        
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={onPass}
            className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-8 h-8 text-gray-600" />
          </button>
          <button
            onClick={onLike}
            className="p-4 rounded-full bg-red-50 hover:bg-red-100 transition-colors"
          >
            <Heart className="w-8 h-8 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}