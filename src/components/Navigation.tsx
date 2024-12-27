import React, { useState } from 'react';
import { Heart, Users, MessageCircle, SlidersHorizontal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Chat } from './Chat';
import { Filters } from './Filters';

interface NavigationProps {
  currentPage: 'discover' | 'likes' | 'matches';
  onChangePage: (page: 'discover' | 'likes' | 'matches') => void;
}

export function Navigation({ currentPage, onChangePage }: NavigationProps) {
  const [showChat, setShowChat] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 50]);
  const [location, setLocation] = useState('');

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto">
        {/* Main Navigation */}
        <div className="flex justify-between items-center py-3 px-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Encontros</h1>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => onChangePage('discover')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                currentPage === 'discover' 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="hidden sm:inline">Descobrir</span>
            </button>
            
            <button
              onClick={() => onChangePage('likes')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                currentPage === 'likes' 
                  ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Heart className="w-5 h-5" />
              <span className="hidden sm:inline">Curtidas</span>
            </button>
            
            <button
              onClick={() => onChangePage('matches')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                currentPage === 'matches' 
                  ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Matches</span>
            </button>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                showFilters
                  ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline">Filtros</span>
            </button>

            <button
              onClick={() => setShowChat(!showChat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                showChat
                  ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Chat</span>
            </button>

            <ThemeToggle />
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <Filters
              ageRange={ageRange}
              setAgeRange={setAgeRange}
              location={location}
              setLocation={setLocation}
            />
          </div>
        )}

        {/* Chat Panel */}
        {showChat && (
          <div className="fixed bottom-0 right-4 w-96 z-50">
            <Chat />
          </div>
        )}
      </div>
    </nav>
  );
}