import React from 'react';
import { CATEGORIES } from './constants';

export const ExploreView: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-2">Explorar</h2>

      <div className="grid grid-cols-4 gap-3">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="text-center text-sm">
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-1" />
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};
