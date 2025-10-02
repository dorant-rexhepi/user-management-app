import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser } from '../../redux/userSlice';
import UserCard from '../UserCard/UserCard';
import './UserList.scss';

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('none'); // none = no sorting

  // Add user
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Name and Email are required!');
      return;
    }
    const newUser = { id: Date.now(), name, email, company: { name:'Local User' } };
    dispatch(addUser(newUser));
    setName('');
    setEmail('');
  };

  // Update user
  const handleUpdate = (id) => {
    const userToUpdate = users.find(u => u.id === id);
    const newName = prompt('Enter new name:', userToUpdate.name);
    if (newName) {
      dispatch(updateUser({ ...userToUpdate, name: newName }));
    }
  };

  // Delete user
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(id));
    }
  };

  // Filter & sort
  let filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOrder === 'asc') {
    filteredUsers = [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'desc') {
    filteredUsers = [...filteredUsers].sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="user-list">
      <h1>User Management App</h1>

      <form className="add-user-form" onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <div className="search-sort-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="sort-button" onClick={() => setSortOrder(
          sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? 'none' : 'asc'
        )}>
          {sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '↕'}
        </button>
      </div>
      <div className="cards-container">
        {filteredUsers.map(user => (
          <div key={user.id || user.email} className="user-card-wrapper">
            <UserCard user={user} />
            <div className="user-actions">
              <button onClick={() => handleUpdate(user.id)}>Update</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UserList;
