import React from 'react';

interface HoveringButtonProps {
  children: React.ReactNode;
  handleClickButton?: () => void;
  buttonStyle?: string;
}

const HoveringButton = ({
  children,
  handleClickButton,
  buttonStyle,
}: HoveringButtonProps) => {
  return (
    <button
      className={`${buttonStyle} font-semibold text-white rounded-[20px] transition ease-in-out delay-100 bg-ceos-1 hover:-translate-y-1 hover:scale-110 hover:bg-ceos-2 duration-300`}
      onClick={handleClickButton}
    >
      {children}
    </button>
  );
};

export default HoveringButton;
