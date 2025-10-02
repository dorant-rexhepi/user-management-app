import React, { useState } from 'react';
import UserList from '../../components/UserList/UserList';
import AddUserForm from '../../components/AddUserForm/AddUserForm';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css';

function Home({ users, addUser }) {
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Filter users based on name or email
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>User Management App</h1> {/* Page title */}
      <AddUserForm addUser={addUser}/> {/* Form to add new user */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> {/* Search input */}
      <UserList users={filteredUsers}/> {/* Display filtered users */}
    </div>
  );
}

export default Home;
