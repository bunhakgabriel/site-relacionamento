import React, { useState } from 'react';
import { Heart, UserX, Info } from 'lucide-react';
import { profiles } from '../data/profiles';
import { likeStore } from '../store/likeStore';
import { ProfileModal } from '../components/ProfileModal';
import { Profile } from '../types/profile';

export function LikesPage() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const likedProfiles = profiles.filter(profile => 
    likeStore.getLikesByUser().includes(profile.id)
  );

  const likedByProfiles = profiles.filter(profile =>
    likeStore.getLikesForUser().includes(profile.id)
  );

  const handleUnlike = (profileId: string) => {
    likeStore.removeLike(profileId);
  };

  const ProfileList = ({ profiles, type }: { profiles: Profile[], type: 'liked' | 'likedBy' }) => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        {type === 'liked' ? (
          <>Perfis que você curtiu <Heart className="w-5 h-5 text-red-500" /></>
        ) : (
          <>Perfis que curtiram você <Heart className="w-5 h-5 text-red-500" /></>
        )}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map(profile => (
          <div key={profile.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => setSelectedProfile(profile)}
                className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <Info className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{profile.name}, {profile.age}</h3>
              <p className="text-gray-600 text-sm">{profile.location}</p>
              
              {type === 'liked' && (
                <button
                  onClick={() => handleUnlike(profile.id)}
                  className="mt-2 flex items-center gap-2 px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-full"
                >
                  <UserX className="w-4 h-4" />
                  Desfazer curtida
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-8">
      <ProfileList profiles={likedProfiles} type="liked" />
      <ProfileList profiles={likedByProfiles} type="likedBy" />
      
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}