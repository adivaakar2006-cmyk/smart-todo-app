import { useAuth } from './hooks/useAuth';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import Auth from './components/Auth';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';

function MainApp() {
  const { currentUser, loading } = useAuth();
  const { theme, toggleTheme } = useTheme();

  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <div className="app-wrapper">
      <button className="theme-toggle-btn glass-panel" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--surface-color)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
          }
        }} 
      />

      {currentUser ? <Dashboard /> : <Auth />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
