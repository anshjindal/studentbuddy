import React, { useState } from 'react';
import { createUser } from '../api';
import Header from '../components/header';
import '../styles/RegistrationPage.css';

export function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUser({ name, email, password });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="registration-container">
        <div className="registration-card">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
