import React from 'react';

interface AuthInputProps {
  placeHolder: string;
  inputName: string;
  isPassword?: boolean;
}

const AuthInput = ({ placeHolder, inputName, isPassword }: AuthInputProps) => {
  return (
    <input
      type={isPassword ? 'password' : 'text'}
      className="w-full border-b border-[#e3e3e3]px-3 px-5 py-2 text-sm"
      placeholder={placeHolder}
      name={inputName}
    />
  );
};

export default AuthInput;
