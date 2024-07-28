import React, { useState } from 'react';
import CustomTexField from './UI/CustomTexField';

const LoginForm = ({ setIsLogin }: { setIsLogin: (param: boolean) => void }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-white">WELCOME BACK</h2>
      <form onSubmit={handleLogin} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>

            <CustomTexField
              label={"Email or Username"}
              type="email"
              id="email"
              placeholder="Enter your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomTexField
              label={"Password"}
              type="Password"
              id="Password"
              placeholder="Enter your password"

              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>

          </div>
        </div>
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Login now
        </button>
      </form>
      <p className="mt-6 text-center text-gray-400">
        Not registered yet? <span onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline">Register</span>
      </p>
    </div>
  );
};

export default LoginForm;
