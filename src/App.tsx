import React, { useEffect } from 'react';
import { AuthPage } from './pages/AuthPage';
import { Navigation } from './components/Navigation';
import { DiscoverPage } from './pages/DiscoverPage';
import { LikesPage } from './pages/LikesPage';
import { MatchesPage } from './pages/MatchesPage';
import { authStore } from './store/authStore';
import { useThemeStore } from './store/themeStore';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(authStore.isAuthenticated());
  const [currentPage, setCurrentPage] = React.useState<'discover' | 'likes' | 'matches'>('discover');
  const { isDark } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  // if (!isAuthenticated) {
  //   return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Navigation currentPage={currentPage} onChangePage={setCurrentPage} />
      
      <main className="max-w-6xl mx-auto py-6">
        {currentPage === 'discover' && <DiscoverPage />}
        {currentPage === 'likes' && <LikesPage />}
        {currentPage === 'matches' && <MatchesPage />}
      </main>
    </div>
  );
}