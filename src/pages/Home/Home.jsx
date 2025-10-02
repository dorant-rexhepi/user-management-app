import React, { useState } from 'react';
import UserList from '../../components/UserList/UserList';
import AddUserForm from '../../components/AddUserForm/AddUserForm';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css';

function Home({ users, addUser }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>
        User Management App
      </h1>
      <AddUserForm addUser={addUser}/>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <UserList users={filteredUsers}/>
    </div>
  );
}
export default Home;
