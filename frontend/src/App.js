import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Lessons from './pages/Lessons';
import Module from './pages/Module';
import Quizzes from './pages/Quizzes';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/module/:moduleId" element={<Module />} />
        <Route path="/quizzes/:lessonId" element={<Quizzes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;