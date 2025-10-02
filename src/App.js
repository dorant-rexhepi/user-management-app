import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from './redux/userSlice';
import UserList from './components/UserList/UserList';
import UserDetails from './pages/UserDetails/UserDetails';
function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => dispatch(setUsers(data)));
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<UserList users={users} />} />
      <Route path="/user/:id" element={<UserDetails users={users} />} />
    </Routes>
  );
}
export default App;