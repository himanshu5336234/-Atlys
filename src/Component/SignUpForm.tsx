import { useState } from "react";

const SignUpForm = ({setIsLogin}:{setIsLogin:(param:boolean)=>void}) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = () => {
      console.log('Sign Up:', { email, username, password });
    };
  
    return (
      <div >
        <h2 className="text-lg font-bold text-white text-center">SIGN UP</h2>
        <h3 className="text-center text-white mb-4">Create an account to continue</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-primary text-white border border-borderColor rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 bg-primary text-white border border-borderColor rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Choose a preferred username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full p-2 bg-primary text-white border border-borderColor rounded focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Choose a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200">
                👁️
              </button>
            </div>
          </div>
          <button
            onClick={handleSignUp}
            className="w-full py-2 mt-2 font-semibold text-white bg-button rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Continue
          </button>
        </div>
        <p className="mt-4 text-center text-gray-400">
          Already have an account? <span onClick={()=>setIsLogin(true)} className="text-button hover:underline">Login →</span>
        </p>
      </div>
    );
  };
  export default  SignUpForm