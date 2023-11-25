import React from 'react';
import './UserList.css';

const UserList = ({ users, onDelete }) => {
  return (
    <ul className="user-list">
      {users.map((user, index) => (
        <li key={index}>
          {user.username} -- {user.password}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
