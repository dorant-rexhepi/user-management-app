import React, { useState } from 'react';
import './AddUserForm.css';
function AddUserForm({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => 
    {
        e.preventDefault();
        if (!name || !email) 
            { 
                alert('Name and Email are required!');
                return;
            }
        const newUser = 
        { 
            id: Date.now(), name, email, company: {name: 'Local User'} 
        };
        addUser(newUser);
        setName('');
        setEmail('');
    };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
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
  );
}
export default AddUserForm;