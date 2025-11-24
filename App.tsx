import React, { useState } from "react";
import { Category, Store } from "./types";
import ExploreView from "./ExploreView";
import CategoryView from "./CategoryView";

type View = "home" | "category" | "store" | "cashback";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setSelectedStore(null);
    setCurrentView("category");
  };

  const handleStoreClick = (store: Store) => {
    setSelectedStore(store);
    setCurrentView("store");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedCategory(null);
    setSelectedStore(null);
  };

  const handleBackToCategory = () => {
    if (selectedCategory) {
      setCurrentView("category");
      setSelectedStore(
