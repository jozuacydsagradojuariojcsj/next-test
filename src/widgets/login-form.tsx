"use client";
import { Label } from "@/components/ui/label";
import InputForm from "../ui/Input";
import ButtonForm from "../ui/button";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  return (
    <>
      <Label className="uppercase mb-5">Welkom terug</Label>
      <Label className="mb-7">
        Log in om de prijzen te zien en een bestelling te plaatsen.
      </Label>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/dashboard");
        }}
      >
        <div className="flex flex-col justify-start items-start">
          <Label className="pb-2">Login</Label>
          <InputForm className="mb-2" />

          <Label className="pb-2">Password</Label>
          <InputForm className="mb-2" type="password" />
        </div>

        <div className="flex justify-center">
          <ButtonForm label="Login" type="submit" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
