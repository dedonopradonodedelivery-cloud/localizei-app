import React, { useState } from 'react';
import { Layout } from './Layout';
import { Header } from './Header';
import { HomeFeed } from './HomeFeed';
import { ExploreView } from './ExploreView';
import { CashbackView } from './CashbackView';
import { MenuView } from './MenuView';

type Tab = 'home' | 'explore' | 'cashback' | 'menu';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'explore':
        return <ExploreView />;
      case 'cashback':
        return <CashbackView />;
      case 'menu':
        return <MenuView />;
      case 'home':
      default:
        return <HomeFeed />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <Header />
      {renderContent()}
    </Layout>
  );
};

export default App;
