import React, { useState, useEffect } from 'react';
import { ChevronLeft, Search, Star, BadgeCheck, TrendingUp } from 'lucide-react';
import { SUBCATEGORIES, STORES } from './constants';
import { Category, Store } from './types';

interface CategoryViewProps {
  category: Category;
  onBack: () => void;
  onStoreClick: (store: Store) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({ category, onBack, onStoreClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentBanner, setCurrentBanner] = useState(0);

  const BANNERS = [
    'https://picsum.photos/800/300?random=101',
    'https://picsum.photos/800/300?random=102',
    'https://picsum.photos/800/300?random=103',
    'https://picsum.photos/800/300?random=104',
    'https://picsum.photos/800/300?random=105',
  ];

  // Troca automático dos banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Normalização para busca
  const normalize = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  // Filtrar por categoria no array STORES
  const filteredStores = STORES.filter(
    (store) =>
      normalize(store.category) === normalize(category.name) &&
      (normalize(store.name).includes(normalize(searchTerm)) ||
        normalize(store.description).includes(normalize(searchTerm)))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-24 animate-in fade-in duration-300">

      {/* Header */}
      <div className="flex items-center gap-4 px-5 py-4 bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-20">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-white" />
        </button>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{category.name}</h2>
      </div>

      {/* Banner rotativo */}
      <div className="w-full h-40 bg-gray-200 dark:bg-gray-800 rounded-b-3xl overflow-hidden shadow">
        <img
          key={currentBanner}
          src={BANNERS[currentBanner]}
          alt="Banner"
          className="w-full h-full object-cover animate-fade"
        />
      </div>

      {/* Campo de busca */}
      <div className="px-5 mt-4">
        <div className="relative group mb-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar nesta categoria..."
            className="block w-full pl-10 pr-10 py-3.5 border-none rounded-2xl leading-5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
          />
        </div>
      </div>

      {/* Lista de lojas */}
      <div className="px-5 mt-6 space-y-4">
        {filteredStores.length === 0 && (
          <p className="text-gray-500 text-sm text-center">
            Nenhuma loja encontrada nessa categoria.
          </p>
        )}

        {filteredStores.map((store) => (
          <div
            key={store.id}
            onClick={() => onStoreClick(store)}
            className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm p-4 flex gap-4 cursor-pointer hover:shadow-md active:scale-95 transition-all"
          >
            <div className="w-24 h-24 rounded-xl overflow-hidden">
              <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <h3 className="font-bold text-gray-800 dark:text-white">{store.name}</h3>

              <div className="flex items-center gap-2 text-[12px] text-gray-500 dark:text-gray-400">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span>{store.rating}</span>
              </div>

              {store.cashback && (
                <span className="text-green-600 dark:text-green-400 font-bold text-xs mt-1">
                  {store.cashback}% de cashback
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
