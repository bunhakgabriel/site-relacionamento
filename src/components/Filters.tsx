import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FiltersProps {
  ageRange: [number, number];
  setAgeRange: (range: [number, number]) => void;
  location: string;
  setLocation: (location: string) => void;
}

export function Filters({ ageRange, setAgeRange, location, setLocation }: FiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        <h2 className="font-semibold text-gray-800 dark:text-white">Filtros</h2>
      </div>
      
      <div>
        <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
          Idade: {ageRange[0]} - {ageRange[1]}
        </label>
        <div className="flex gap-4">
          <input
            type="range"
            min="18"
            max="100"
            value={ageRange[0]}
            onChange={(e) => setAgeRange([parseInt(e.target.value), ageRange[1]])}
            className="w-full"
          />
          <input
            type="range"
            min="18"
            max="100"
            value={ageRange[1]}
            onChange={(e) => setAgeRange([ageRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
          Localização
        </label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="">Todas as cidades</option>
          <option value="São Paulo, SP">São Paulo, SP</option>
          <option value="Rio de Janeiro, RJ">Rio de Janeiro, RJ</option>
          <option value="Curitiba, PR">Curitiba, PR</option>
          <option value="Florianópolis, SC">Florianópolis, SC</option>
        </select>
      </div>
    </div>
  );
}