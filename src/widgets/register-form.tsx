import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InputForm from "../ui/Input";
("use-client");

const fields = [
  {
    label: "Bedrijasnaam",
  },
  {
    label: "KVK Number",
  },
  {
    label: "Voornam",
  },
  {
    label: "Achternaam",
  },
  {
    label: "Email",
  },
  {
    label: "Telefoonummer",
  },
];

const RegisterForm = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start">
        <Label className="uppercase mb-6 font-semibold">
          Registreren bij RIC Holland
        </Label>
        {fields.map((field) => (
          <div key={field.label}>
            <Label>{field.label}</Label>
            <InputForm className="mb-2" />
          </div>
        ))}
        <Label>Watchwoord</Label>
        <InputForm className="mb-2" type="password" />
      </div>
    </>
  );
};

export default RegisterForm;
