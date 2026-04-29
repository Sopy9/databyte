import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user ?? null);
    });
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  if (!user) {
    return (
      <div className="container">
        <h2>You are signed out</h2>
        <button onClick={() => navigate('/signin')}>Sign In</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div>
        <h1>Dashboard</h1>
        <div>
          <h2>Welcome back, {user.email}!</h2>
          <p>Quiz Progress</p>
          <div>
            <progress value="1" max="10" />
            <span>1/10</span>
          </div>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;