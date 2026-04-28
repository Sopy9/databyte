import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
    if (error) alert(error.message);
    else navigate('/dashboard');
  }

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({
      email: username,
      password: password,
    });
    if (error) alert(error.message);
    else navigate('/dashboard');
  }

  return (
  <div>
    <div>
      <h3>Log In</h3>
      <label>Username</label>
      <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>

    <div>
        <h3>Sign Up</h3>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
  </div>
  )
}
export default SignIn
