import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './SignIn.css';

function SignIn() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email: loginUsername,
      password: loginPassword,
    });
    if (error) alert(error.message);
    else navigate('/dashboard');
  }

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({
      email: signupUsername,
      password: signupPassword,
    });
    if (error) alert(error.message);
    else navigate('/dashboard');
  }

  return (
  <div className="container signin-container">
    <div className="auth-panels">


      <div className="auth-box">
        <h3>Log In</h3>
        <h4>Username</h4>
        <input
          type="text"
          className="auth-input"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <h4>Password</h4>
          <input
            type="password"
            className="auth-input"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button className="auth-btn" onClick={handleLogin}>Log In</button>
      </div>
   

      <div className="auth-box">
        <h3>Sign Up</h3>
        <h4>Username</h4>
        <input
          type="text"
          className="auth-input"
          value={signupUsername}
          onChange={(e) => setSignupUsername(e.target.value)}
        />
        <h4>Password</h4>
        <input
          type="password"
          className="auth-input"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
        />
        <button className="auth-btn" onClick={handleSignUp}>Sign Up</button>
      </div> 

    </div>
  </div>

  )
}
export default SignIn
