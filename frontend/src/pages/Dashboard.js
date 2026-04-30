import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({ completed: 0, total: 10 });
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const currentUser = data?.session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        fetch(`http://localhost:4000/api/progress/${currentUser.id}`)
          .then(res => res.json())
          .then(data => setProgress(data));
      }
    });
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  if (!user) {
    return (
      <div className="container signed-out">
        <h3>You are signed out</h3>
        <button className="dashboard-btn" onClick={() => navigate('/signin')}>Sign In</button>
      </div>
    );
  }

  const progressPercent = (progress.completed / progress.total) * 100;

  return (
    <div className="container">
      <div>
        <h1>Dashboard</h1>
        <div className="dashboard-card">
          <h3>Welcome back, {user.email}!</h3>
          <h4 className="progress-label">Quiz Progress</h4>
          <div className="progress-row">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <span>{progress.completed}/{progress.total}</span>
          </div>
          <br />
          <button className="dashboard-btn" onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;