import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import { AuthProvider, useAuth } from './context/AuthContext';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <Dashboard />
        <Footer />
      </div>
      
      <style>{`
        .layout {
          display: flex;
          min-height: 100vh;
        }

        .main-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        @media (max-width: 1024px) {
          .main-wrapper {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
