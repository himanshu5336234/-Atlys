import { useState } from "react";
import CustomButton from "./UI/CustomButton";
import CustomTexField from "./UI/CustomTexField";

const SignUpForm = ({
  setIsLogin,
}: {
  setIsLogin: (param: boolean) => void;
}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Sign Up:", { email, username, password });
  };

  return (
    <div>
      <h2 className=" text-sm text-center text-[#6B6C70]">SIGN UP</h2>
      <h3 className="text-lg mt-2 font-bold text-white text-center">
        Create an account to continue
      </h3>
      <div className="mt-10 flex flex-col gap-5">
        <CustomTexField
          label={"Email"}
          type="Email"
          id="Email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomTexField
          label={"   Username"}
          type="   Username"
          id="   Username"
          placeholder="Choose a preferred username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <CustomTexField
          label={"   Password"}
          type="   Password"
          id="   Password"
          placeholder="Choose a strong password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <CustomButton label="Continue" />

        <p className=" text-sm text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => setIsLogin(true)}
            className="text-button hover:underline"
          >
            Login →
          </span>
        </p>
      </div>
    </div>
  );
};
export default SignUpForm;
