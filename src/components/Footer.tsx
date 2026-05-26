import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 Xerago. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#help">Help Center</a>
        </div>
      </div>
      <style>{`
        .footer {
          margin-left: 260px;
          padding: 32px 40px;
          background: transparent;
          border-top: 1px solid var(--border-color);
          margin-top: auto;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 14px;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--primary-color);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
