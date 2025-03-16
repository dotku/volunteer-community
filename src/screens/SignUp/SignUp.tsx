import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Status Bar */}
      <div className="w-full h-11">
        <div className="absolute w-[67px] h-[11px] top-[17px] right-4">
          <img className="absolute w-6 h-[11px] top-0 right-0" alt="Battery" src="battery.png" />
          <img className="absolute w-[15px] h-[11px] top-0 right-8" alt="Wifi" src="wifi.svg" />
          <img className="absolute w-[17px] h-[11px] top-0 right-14" alt="Signal" src="mobile-signal.svg" />
        </div>
        <div className="absolute w-[54px] h-[21px] top-3 left-[21px] bg-[url(time.svg)] bg-[100%_100%]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pt-16">
        <h1 className="text-[32px] font-semibold mb-2">Create Account</h1>
        <p className="text-gray-500 mb-8">Sign up to start volunteering</p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
              placeholder="Create a password"
            />
          </div>

          <Button className="w-full py-6 text-lg">Create Account</Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>

      <div className="px-6 py-8">
        <p className="text-xs text-center text-gray-500">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};