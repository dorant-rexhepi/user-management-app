import React, { useState } from 'react';
import './AddUserForm.css';

function AddUserForm({ addUser }) {
  const [name, setName] = useState('');   // State for name input
  const [email, setEmail] = useState(''); // State for email input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate inputs
    if (!name || !email) {
      alert('Name and Email are required!');
      return;
    }

    // Create new user object
    const newUser = { 
      id: Date.now(), 
      name, 
      email, 
      company: { name: 'Local User' } 
    };

    addUser(newUser);   // Call parent function to add user
    setName('');        // Reset name input
    setEmail('');       // Reset email input
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}                 // Controlled input
        onChange={(e) => setName(e.target.value)} // Update state
      />
      <input
        type="email"
        placeholder="Email"
        value={email}                // Controlled input
        onChange={(e) => setEmail(e.target.value)} // Update state
      />
      <button type="submit">Add User</button> {/* Submit button */}
    </form>
  );
}

export default AddUserForm;