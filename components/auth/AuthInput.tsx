import React from 'react';

interface AuthInputProps {
  placeHolder: string;
}

const AuthInput = ({ placeHolder }: AuthInputProps) => {
  return (
    <input
      type="text"
      className="w-full border border-[#e3e3e3] bg-[#f4f4f4] rounded-[5px] px-3 py-2 text-sm focus:outline-1 focus:outline-[#e1e1e1]"
      placeholder={placeHolder}
    />
  );
};

export default AuthInput;
