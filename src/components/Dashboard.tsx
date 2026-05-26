import React from 'react';
import { Calendar as CalendarIcon, Mail, Phone, MapPin, User as UserIcon, Cake } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <main className="dashboard-content">
      <div className="dashboard-grid">
        {/* Left Column - Today Section */}
        <section className="dashboard-left">
          <div className="card today-card">
            <div className="card-header">
              <h2>Today</h2>
            </div>
            
            <div className="task-tabs">
              <button className="tab active">TASKS DUE TODAY</button>
              <span className="priority-badge">0 Priority</span>
            </div>

            <div className="empty-state">
              <div className="illustration-container">
                <div className="calendar-circle">
                  <CalendarIcon size={32} className="icon-green" />
                  <div className="check-mark">✓</div>
                </div>
              </div>
              <h3>You're clear for today</h3>
              <p>No tasks are due on {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}.</p>
            </div>

            <div className="card-footer">
              <span className="task-count">0 Tasks</span>
            </div>
          </div>
        </section>

        {/* Right Column - User Information Section */}
        <section className="dashboard-right">
          <div className="card user-info-card">
            <div className="card-header">
              <h2>Personal Profile</h2>
            </div>

            <div className="user-profile-content">
              <div className="user-avatar-section">
                <img src={user.image} alt={user.firstName} className="profile-image" />
                <div className="user-main-info">
                  <h3>{user.firstName} {user.lastName}</h3>
                  <span className="user-username">@{user.username}</span>
                </div>
              </div>

              <div className="info-details-list">
                <div className="info-detail-item">
                  <div className="detail-icon"><UserIcon size={18} /></div>
                  <div className="detail-text">
                    <span className="label">Age & Gender</span>
                    <span className="value">{user.age} years, {user.gender}</span>
                  </div>
                </div>

                <div className="info-detail-item">
                  <div className="detail-icon"><Mail size={18} /></div>
                  <div className="detail-text">
                    <span className="label">Email Address</span>
                    <span className="value">{user.email}</span>
                  </div>
                </div>

                <div className="info-detail-item">
                  <div className="detail-icon"><Phone size={18} /></div>
                  <div className="detail-text">
                    <span className="label">Phone Number</span>
                    <span className="value">{user.phone}</span>
                  </div>
                </div>

                <div className="info-detail-item">
                  <div className="detail-icon"><Cake size={18} /></div>
                  <div className="detail-text">
                    <span className="label">Date of Birth</span>
                    <span className="value">{user.birthDate}</span>
                  </div>
                </div>

                <div className="info-detail-item">
                  <div className="detail-icon"><MapPin size={18} /></div>
                  <div className="detail-text">
                    <span className="label">Address</span>
                    <span className="value">{user.address.address}, {user.address.city}, {user.address.state}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .dashboard-content {
          margin-left: 260px;
          padding: 16px 40px 40px 40px;
          height: calc(100vh - 80px); /* Adjust based on header height */
          overflow-y: auto;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
          align-items: start;
        }

        .card {
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .card-header {
          padding: 24px;
          border-bottom: 1px solid #f8f9fa;
        }

        .card-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .task-tabs {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          margin-top: 16px;
        }

        .tab {
          padding: 8px 0;
          font-weight: 600;
          font-size: 13px;
          color: var(--primary-color);
          border-bottom: 2px solid var(--primary-color);
        }

        .priority-badge {
          background: #e8f5ed;
          color: var(--primary-color);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .empty-state {
          padding: 80px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #fafafa;
          margin: 24px;
          border-radius: var(--radius-md);
          border: 1px dashed var(--border-color);
        }

        .calendar-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: var(--shadow-md);
          margin-bottom: 24px;
        }

        .icon-green {
          color: var(--primary-color);
        }

        .check-mark {
          position: absolute;
          bottom: 18px;
          right: 22px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-footer {
          padding: 16px 24px;
          border-top: 1px solid #f8f9fa;
          display: flex;
          justify-content: flex-end;
        }

        .task-count {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 14px;
        }

        /* User Info Card */
        .user-profile-content {
          padding: 24px;
        }

        .user-avatar-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #f8f9fa;
        }

        .profile-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 3px solid #fff;
          box-shadow: var(--shadow-sm);
          background: #f8f9fa;
          object-fit: cover;
        }

        .user-main-info h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 4px;
        }

        .user-username {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 14px;
        }

        .info-details-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .detail-icon {
          width: 36px;
          height: 36px;
          background: #f0f7f3;
          color: var(--primary-color);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .label {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .value {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          line-height: 1.4;
        }
      `}</style>
    </main>
  );
};

export default Dashboard;
