import React from "react";
import RegisterForm from "@/src/widgets/register-form";
import LoginForm from "@/src/widgets/login-form";

const LoginPage = () => {
  return (
    <div className="min-h-screen border border-black flex flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
