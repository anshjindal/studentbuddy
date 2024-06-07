import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../api';
import Header from '../components/header';
import '../styles/AdminPage.css';


export function AdminPage() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    
    <div>
      <Header />
    <div className="admin-container">
      <div className="admin-card">
        <h2>List of Users</h2>
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
  
}
