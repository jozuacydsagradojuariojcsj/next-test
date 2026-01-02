import React from "react";
import RegisterForm from "../../widgets/register-form";

const RegisterPage = () => {
  return (
    <>
      <div className="min-h-screen border border-black flex flex-col items-center justify-center">
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
