import React from "react";
import { Input } from "@/components/ui/input";

type InputFormProps = {
  className?: string;
  type?: string;
};

const InputForm = ({ className, type }: InputFormProps) => {
  return (
    <Input
      className={`bg-gray-200 border border-gray-300 ${className}`}
      type={type}
    />
  );
};

export default InputForm;
