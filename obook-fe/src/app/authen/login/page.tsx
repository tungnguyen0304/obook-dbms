"use client";
import React from "react";
import { FotobookThumb, LoginForm } from "@/components/authen/login/page";

const Login = () => {
  return (
    <div className="text-black w-full bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-1/2 px-10 pb-5">
        <FotobookThumb />
      </div>

      <div className="w-1/3">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
