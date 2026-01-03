"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

type InputFormProps = {
  className?: string;
  type?: string;
};

const InputForm = ({ className, type }: InputFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative flex flex-row">
      <Input
        type={isPassword && !showPassword ? "password" : "text"}
        className={`bg-gray-200 border border-gray-300 pr-2 ${className}`}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-gray-500 hover:text-gray-700 pl-2"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
};

export default InputForm;
