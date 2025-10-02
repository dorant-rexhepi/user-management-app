import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserDetails.css';

function UserDetails({ users }) {
  const { id } = useParams(); // Get user id from URL params
  const user = users.find(u => u.id === parseInt(id) 
  || u.email === id); // Find user by id or email

  // If user not found, show message
  if (!user) return 
  <p>User not found</p>;

  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email} {/* User email */}
        </p>
      <p>
        <strong>Company:</strong> {user.company?.name || 
        'Local User'} {/* Company name or fallback */}
      </p>
      <p>
        <strong>Address:</strong> {user.address ? 
        `${user.address.street}, 
        ${user.address.city}` : 'N/A'} {/* Address */}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone || 'N/A'} {/* Phone */}
      </p> 
      <p>
        <strong>Website:</strong> {user.website || 'N/A'} {/* Website */}
      </p>
      <Link to="/">Back</Link> {/* Link back to user list */}
    </div>
  );
}

export default UserDetails;