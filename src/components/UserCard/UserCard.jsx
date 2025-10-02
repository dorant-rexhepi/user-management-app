import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.scss';
function UserCard({ user }) 
{
  return (
    <div className="user-card">
      <p className="user-name">
        {user.name}
      </p>
      <p className="user-email">
        {user.email}
      </p>
      <p className="user-company">
        {user.company?.name || 'Local User'}
      </p>
      <Link to={`/user/${user.id || user.email}`} className="details-button">
        View Details
      </Link>
    </div>
  );
}
export default UserCard;
