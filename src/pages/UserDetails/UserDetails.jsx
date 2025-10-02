import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserDetails.css';

function UserDetails({ users }) {
  const {id} = useParams();
  const user = users.find(u => u.id === parseInt(id) || u.email === id);

  if (!user) return 
  
  <p>User not found</p>;
  
  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Company:</strong> 
          {
          user.company?.name || 'Local User'
          }
      </p>
      <p>
        <strong>Address:</strong> 
          {
          user.address ? `${user.address.street}, ${user.address.city}` : 'N/A'
          }
      </p>
      <p>
        <strong>Phone:</strong> {user.phone || 'N/A'}
      </p>
      <p>
        <strong>Website:</strong> {user.website || 'N/A'}
      </p>
      <Link to="/">Back</Link>
    </div>
  );
}
export default UserDetails;