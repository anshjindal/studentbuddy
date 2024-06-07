import React from 'react';
import {HomePage} from './pages/home';
import {LoginPage} from './pages/login';
import {RegistrationPage} from './pages/registration';
import {UserProfilePage} from './pages/userprofile';
import {AdminPage} from './pages/admin';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/userprofile" element={<UserProfilePage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
