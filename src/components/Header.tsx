import React from 'react';
import { Bell, Search, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateString = today.toLocaleDateString('en-US', options);

  const displayName = user ? `${user.firstName} ${user.lastName}` : 'Guest User';
  const displayInitials = user ? `${user.firstName[0]}${user.lastName[0]}` : 'GU';

  return (
    <header className="header">
      <div className="header-left">
        <h1>Good afternoon, <span className="user-name">{displayName}</span></h1>
        <p className="subtitle">Here's what's happening today, {dateString}.</p>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search anything..." />
        </div>
        
        <button className="icon-button notification-btn">
          <Bell size={20} />
          <span className="badge">6</span>
        </button>

        <div className="user-profile-group">
          <div className="user-profile">
            <div className="profile-initials">{displayInitials}</div>
          </div>
          <button className="logout-btn" onClick={logout} title="Logout">
            <LogOut size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 40px;
          background: transparent;
          margin-left: 260px;
        }

        .header-left h1 {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 4px;
        }

        .user-name {
          color: var(--primary-color);
        }

        .subtitle {
          color: var(--text-secondary);
          font-size: 15px;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .user-profile-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logout-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .logout-btn:hover {
          background: #ffe5e5;
          color: #ff4757;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          padding: 10px 16px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          width: 280px;
          transition: var(--transition);
        }

        .search-bar:focus-within {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(0, 145, 76, 0.1);
        }

        .search-bar input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 14px;
        }

        .icon-button {
          position: relative;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .icon-button:hover {
          background: #f8f9fa;
          color: var(--primary-color);
        }

        .badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: #ff4757;
          color: white;
          font-size: 10px;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
        }

        .user-profile {
          cursor: pointer;
        }

        .profile-initials {
          width: 42px;
          height: 42px;
          background: var(--primary-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 4px 10px rgba(0, 145, 76, 0.2);
        }
      `}</style>
    </header>
  );
};

export default Header;
