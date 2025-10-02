import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.scss';
function UserCard({ user }) {
  return (
    <div className="user-card">
      <p className="user-name">{user.name}</p> {/* User name */}
      <p className="user-email">{user.email}</p> {/* User email */}
      <p className="user-company">{user.company?.name || 'Local User'}</p> {/* Company or fallback */}
      <Link to={`/user/${user.id || user.email}`} className="details-button">
        View Details {/* Link to user details page */}
      </Link>
    </div>
  );
}
export default UserCard;
