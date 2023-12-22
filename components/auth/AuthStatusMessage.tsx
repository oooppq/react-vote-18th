import React from 'react';

interface AuthStatusMessageProps {
  message: string;
  isWrong: Boolean | undefined;
}

const AuthStatusMessage = ({ message, isWrong }: AuthStatusMessageProps) => {
  return (
    <div
      className={`w-full h-[14px] text-xs mt-2 mb-1 ml-10 ${
        isWrong ? 'text-[#ca2d18]' : 'text-[#09aa5c]'
      }`}
    >
      {message}
    </div>
  );
};

export default AuthStatusMessage;
