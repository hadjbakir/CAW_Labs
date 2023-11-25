import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import UserList from './components/UserList';

const Exo3 = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (userData) => {
    const newUsers = [
      ...users,
      { username: userData.username, password: userData.password },
       
          
    ];

    setUsers(newUsers);
  };

  const handleDeleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div className="app-container">
      <h1>EXO 03</h1>
      
      <AuthForm onSubmit={handleFormSubmit} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </div>
  );
};

export default Exo3;
