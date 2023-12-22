import React from 'react';

interface AuthInputProps {
  placeHolder: string;
  inputName: string;
  isPassword?: boolean;
  inputStyle?: string;
  handleChangeInput?: any;
}

const AuthInput = ({
  placeHolder,
  inputName,
  isPassword,
  inputStyle,
  handleChangeInput,
}: AuthInputProps) => {
  return (
    <input
      type={isPassword ? 'password' : 'text'}
      className={`${inputStyle} w-full border-b border-[#e3e3e3] px-5 py-2 text-sm`}
      placeholder={placeHolder}
      name={inputName}
      onChange={handleChangeInput}
    />
  );
};

export default AuthInput;
