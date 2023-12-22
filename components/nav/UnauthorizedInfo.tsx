import NavButton from '@/components/nav/NavButton';
import React from 'react';

interface UnauthorizedInfoProps {
  handleClickLoginButton: () => void;
  handleClickJoinButton: () => void;
}
const UnauthorizedInfo = ({
  handleClickLoginButton,
  handleClickJoinButton,
}: UnauthorizedInfoProps) => {
  return (
    <>
      <NavButton
        buttonStyle="mr-2.5 border border-ceos-1"
        title="로그인"
        handleClickButton={handleClickLoginButton}
      />
      <NavButton
        buttonStyle="mr-2.5 bg-ceos-1 text-white"
        title="회원가입"
        handleClickButton={handleClickJoinButton}
      />
    </>
  );
};

export default UnauthorizedInfo;
