import React, { useState } from 'react';
import { UserX, MessageCircle, Info } from 'lucide-react';
import { profiles } from '../data/profiles';
import { likeStore } from '../store/likeStore';
import { ProfileModal } from '../components/ProfileModal';
import { Profile } from '../types/profile';
import { Chat } from '../components/Chat';

export function MatchesPage() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showChat, setShowChat] = useState(false);
  
  const matches = likeStore.getMatches();
  const matchedProfiles = matches.map(match => {
    const profileId = match.user1Id === authStore.getCurrentUser()?.id 
      ? match.user2Id 
      : match.user1Id;
    return {
      ...profiles.find(p => p.id === profileId)!,
      matchId: match.id
    };
  });

  const handleUnmatch = (matchId: string) => {
    likeStore.removeMatch(matchId);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Seus Matches</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchedProfiles.map(profile => (
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
              <p className="text-gray-600 text-sm mb-3">{profile.location}</p>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleUnmatch(profile.matchId)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <UserX className="w-4 h-4" />
                  Desfazer match
                </button>
                <button
                  onClick={() => setShowChat(true)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Conversar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}

      {showChat && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-2xl">
            <Chat />
            <button
              onClick={() => setShowChat(false)}
              className="mt-4 w-full py-2 bg-white rounded-lg hover:bg-gray-100"
            >
              Fechar chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}