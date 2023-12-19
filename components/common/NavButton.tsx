import React from 'react';

interface NavButtonProps {
  title?: string;
  buttonStyle: string;
  handleClickButton?: () => void;
}

const NavButton = ({
  title,
  buttonStyle,
  handleClickButton,
}: NavButtonProps) => {
  return (
    <button
      className={`${buttonStyle} rounded-[20px] text-xs md:text-xl px-5 py-2.5 box-border justify-center items-center inline-flex`}
      onClick={handleClickButton}
    >
      {title}
    </button>
  );
};

export default NavButton;
