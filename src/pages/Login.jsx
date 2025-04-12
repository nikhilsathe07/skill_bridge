import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    if (isLogin) {
      console.log('Logging in with:', formData.email, formData.password);

      try {
        const response = await fetch('https://skill-bridge-v89g.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        console.log('Login request sent');
        const data = await response.json();
        console.log('Response received:', data);

        if (!response.ok) {
          alert(data.message || 'Login failed');
          return;
        }

        alert('Login successful!');
        localStorage.setItem('token', data.token);
        console.log('Token saved to localStorage:', data.token);

        // Redirect or navigate here if needed
        // navigate('/dashboard');

      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      // Mock registration
      console.log('Register (mock):', formData.name, formData.email, formData.password);
      alert('Registration submitted! (Mock)');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required={!isLogin}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
