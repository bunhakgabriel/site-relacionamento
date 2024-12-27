import React from 'react';
import { X } from 'lucide-react';
import { Profile } from '../data/profiles';

interface ProfileModalProps {
  profile: Profile;
  onClose: () => void;
}

export function ProfileModal({ profile, onClose }: ProfileModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3">
          {profile.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${profile.name} - Foto ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>

        <div className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Sobre</h3>
            <p>{profile.bio}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Interesses</h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Localização</h3>
            <p className="text-gray-600">{profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}