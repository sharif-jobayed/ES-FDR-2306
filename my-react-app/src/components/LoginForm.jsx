import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    } else if(username == `Sharif` && password == `007`) {
			setError(``);
			alert(`Login successful!`);
		} else {
			setError(`Invalid credentials`);
		}
 
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-9/12 md:w-6/12 lg:w-6/12 xl:w-6/12"> 
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 rounded border border-neutral-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded border border-neutral-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}
 
        <button
          className="bg-primary text-blue-600 px-7 py-3 rounded text-sm font-medium uppercase shadow-md hover:bg-primary-600 focus:bg-primary-600 focus:outline-none active:bg-primary-700"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
