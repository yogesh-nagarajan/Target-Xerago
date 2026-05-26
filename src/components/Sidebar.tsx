import React from 'react';
import { Home, Lightbulb, Briefcase } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo">
          <span className="logo-icon">X</span>
          <div className="logo-text">
            <span className="brand-name">XERAGO</span>
            <span className="brand-tagline">The Science of Digital</span>
          </div>
        </div>
      </div>

      <div className="nav-section">
        <h3 className="section-title">ALL MODULES</h3>
        <nav>
          <ul>
            <li className="nav-item active">
              <button>
                <Home size={20} />
                <span>Dashboard</span>
              </button>
            </li>
            <li className="nav-item">
              <button>
                <Lightbulb size={20} />
                <span>Idea Hub</span>
              </button>
            </li>
            <li className="nav-item">
              <button>
                <Briefcase size={20} />
                <span>Operational Hub</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <style>{`
        .sidebar {
          width: 260px;
          height: 100vh;
          background: var(--sidebar-bg);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 24px 16px;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
        }

        .logo-container {
          margin-bottom: 48px;
          padding: 0 8px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: var(--primary-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-weight: 800;
          font-size: 20px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #1a1a1a;
        }

        .brand-tagline {
          font-size: 10px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .nav-section {
          flex: 1;
        }

        .section-title {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 16px;
          padding: 0 12px;
          letter-spacing: 1px;
        }

        .nav-item {
          margin-bottom: 8px;
        }

        .nav-item button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
          transition: var(--transition);
          text-align: left;
        }

        .nav-item button:hover {
          background: #f0f7f3;
          color: var(--primary-color);
        }

        .nav-item.active button {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 4px 12px rgba(0, 145, 76, 0.2);
        }

        .nav-item span {
          font-size: 15px;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
