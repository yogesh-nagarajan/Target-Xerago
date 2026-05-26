import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('emilys'); // Pre-filled for demo as per user request
  const [password, setPassword] = useState('emilyspass');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="login-page">
      <div className="login-card glass">
        <div className="login-header">
          <div className="login-logo">X</div>
          <h1>Welcome Back</h1>
          <p>Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <div className="input-wrapper">
              <User size={18} className="input-icon" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#forgot" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
            {!isLoading && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#signup">Sign up for free</a></p>
        </div>
      </div>

      <style>{`
        .login-page {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f4f7f6 0%, #e8f5ed 100%);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        .login-card {
          width: 100%;
          max-width: 440px;
          padding: 48px;
          border-radius: 24px;
          background: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-logo {
          width: 48px;
          height: 48px;
          background: var(--primary-color);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-weight: 800;
          font-size: 24px;
          box-shadow: 0 8px 16px rgba(0, 145, 76, 0.2);
        }

        .login-header h1 {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .login-header p {
          color: var(--text-secondary);
          font-size: 15px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .error-message {
          background: #ffe5e5;
          color: #d63031;
          padding: 12px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          text-align: center;
          border: 1px solid #fab1a0;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          color: var(--text-muted);
        }

        .input-wrapper input {
          width: 100%;
          padding: 14px 14px 14px 44px;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          background: #fcfcfc;
          font-size: 15px;
          transition: var(--transition);
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: var(--primary-color);
          background: white;
          box-shadow: 0 0 0 4px rgba(0, 145, 76, 0.05);
        }

        .toggle-password {
          position: absolute;
          right: 14px;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .toggle-password:hover {
          color: var(--text-primary);
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          color: var(--text-secondary);
        }

        .remember-me input {
          accent-color: var(--primary-color);
          width: 16px;
          height: 16px;
        }

        .forgot-link {
          color: var(--primary-color);
          font-weight: 600;
        }

        .login-button {
          background: var(--primary-color);
          color: white;
          padding: 14px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 12px;
          transition: var(--transition);
        }

        .login-button:hover:not(:disabled) {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 145, 76, 0.2);
        }

        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-footer {
          margin-top: 32px;
          text-align: center;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .login-footer a {
          color: var(--primary-color);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default Login;
