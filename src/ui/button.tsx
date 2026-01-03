import React from "react";
import { Button } from "@/components/ui/button";

type ButtonFormProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const ButtonForm = ({ label, onClick, type }: ButtonFormProps) => {
  return (
    <Button
      className="bg-amber-500 hover:bg-amber-900"
      onClick={onClick}
      type={type}
    >
      {label}
    </Button>
  );
};

export default ButtonForm;
