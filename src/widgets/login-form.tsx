import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputForm from "../ui/Input";

const LoginForm = () => {
  return (
    <>
      <Label className="uppercase mb-5">Welkom terug</Label>
      <Label className="mb-7">
        Log in om de prijzen te zien en een bestelling te plaatsen.
      </Label>
      <div className="flex flex-col justify-start items-start">
        <Label>Login</Label>
        <InputForm className="mb-2" />
      </div>
      <div className="flex flex-col justify-start items-start">
        <Label>Password</Label>
        <InputForm className="mb-2" type="password" />
      </div>
    </>
  );
};

export default LoginForm;
