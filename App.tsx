import React, { useState } from "react";
import { Category, Store } from "./types";
import { ExploreView } from "./components/ExploreView";
import { CategoryView } from "./components/CategoryView";

type View = "home" | "category" | "store" | "cashback";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  // 👉 Home → Categoria
  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setSelectedStore(null);
    setCurrentView("category");
  };

  // 👉 Clique em loja (tanto da Home quanto da Categoria)
  const handleStoreClick = (store: Store) => {
    setSelectedStore(store);
    setCurrentView("store");
  };

  // 👉 Voltar pra Home
  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedCategory(null);
    setSelectedStore(null);
  };

  // 👉 Voltar da loja para a categoria
  const handleBackToCategory = () => {
    if (selectedCategory) {
      setCurrentView("category");
      setSelectedStore(null);
    } else {
      // fallback: se por algum motivo não tiver categoria, volta pra home
      handleBackToHome();
    }
  };

  // 👉 Abrir visão de Cashback
  const handleOpenCashback = () => {
    setCurrentView("cashback");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {currentView === "home" && (
        <ExploreView
          onSelectCategory={handleSelectCategory}
          onStoreClick={handleStoreClick}
          onOpenCashback={handleOpenCashback}
        />
      )}

      {currentView === "category" && selectedCategory && (
        <CategoryView
          category={selectedCategory}
          onBack={handleBackToHome}
          onStoreClick={handleStoreClick}
        />
      )}

      {currentView === "store" && selectedStore && (
        <div className="max-w-3xl mx-auto p-4">
          <button
            onClick={handleBackToCategory}
            className="mb-4 text-sm font-medium text-blue-600 hover:underline"
          >
            ← Voltar
          </button>

          <div className="bg-white shadow-md rounded-2xl p-4 space-y-2">
            <h1 className="text-xl font-semibold">{selectedStore.name}</h1>
            {selectedStore.description && (
              <p className="text-sm text-slate-600">
                {selectedStore.description}
              </p>
            )}
            {selectedStore.address && (
              <p className="text-sm text-slate-700">
                📍 {selectedStore.address}
              </p>
            )}
            {selectedStore.phone && (
              <p className="text-sm text-slate-700">
                📞 {selectedStore.phone}
              </p>
            )}
          </div>
        </div>
      )}

      {currentView === "cashback" && (
        <div className="max-w-3xl mx-auto p-4">
          <button
            onClick={handleBackToHome}
            className="mb-4 text-sm font-medium text-blue-600 hover:underline"
          >
            ← Voltar
          </button>

          <div className="bg-white shadow-md rounded-2xl p-4 space-y-3">
            <h1 className="text-xl font-semibold">
              Cashback Localizei Freguesia
            </h1>
            <p className="text-sm text-slate-700">
              Aqui vai entrar a tela oficial de Cashback assim que finalizarmos
              a lógica completa no Supabase e no front.
            </p>
            <p className="text-xs text-slate-500">
              Por enquanto, essa tela é só um placeholder para permitir que o
              app build e que você consiga testar o fluxo de navegação.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
