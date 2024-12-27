import React, { useState } from 'react';
import { ProfileCard } from '../components/ProfileCard';
import { Chat } from '../components/Chat';
import { Filters } from '../components/Filters';
import { ProfileModal } from '../components/ProfileModal';
import { profiles } from '../data/profiles';
import { likeStore } from '../store/likeStore';

export function DiscoverPage() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 50]);
  const [location, setLocation] = useState('');

  const filteredProfiles = React.useMemo(() => {
    return profiles.filter(profile => {
      const ageMatch = profile.age >= ageRange[0] && profile.age <= ageRange[1];
      const locationMatch = !location || profile.location === location;
      const notMatched = !likeStore.hasMatch(profile.id);
      return ageMatch && locationMatch && notMatched;
    });
  }, [ageRange, location]);

  const handleLike = () => {
    const currentProfile = filteredProfiles[currentProfileIndex];
    if (currentProfile) {
      likeStore.addLike(currentProfile.id);
    }
    if (currentProfileIndex < filteredProfiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    }
  };

  const handlePass = () => {
    if (currentProfileIndex < filteredProfiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4">
      <div className="w-full lg:w-64">
        <Filters
          ageRange={ageRange}
          setAgeRange={setAgeRange}
          location={location}
          setLocation={setLocation}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>

      <div className="flex-1 flex justify-center">
        {currentProfileIndex < filteredProfiles.length ? (
          <ProfileCard
            profile={filteredProfiles[currentProfileIndex]}
            onLike={handleLike}
            onPass={handlePass}
            onViewProfile={() => setSelectedProfile(filteredProfiles[currentProfileIndex])}
          />
        ) : (
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Não há mais perfis por enquanto!
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Volte mais tarde para conhecer novas pessoas.
            </p>
          </div>
        )}
      </div>

      <div className="w-full lg:w-96">
        <button
          onClick={() => setShowChat(!showChat)}
          className="w-full mb-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {showChat ? 'Fechar Chat' : 'Abrir Chat'}
        </button>
        {showChat && <Chat />}
      </div>

      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}