import React, { useState } from 'react';
import CustomButton from './UI/CustomButton';
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
      <h2 className=" text-sm text-center text-[#6B6C70]">WELCOME BACK</h2>
      <h3 className='text-lg mt-2 font-bold text-white text-center'>Log into your account</h3>
      <form onSubmit={handleLogin} >
        <div className='mt-10 flex flex-col gap-5'>

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
    
        <div className="flex items-center justify-between">
        <p className=" text-sm  text-gray-400">
            Forgot password?
          </p>
        </div>
        <CustomButton label='      Login now' />
        </div>
      </form>
      <p className="mt-3 text-sm  text-gray-400">
        Not registered yet? <span onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline">Register</span>
      </p>
    </div>
  );
};

export default LoginForm;
