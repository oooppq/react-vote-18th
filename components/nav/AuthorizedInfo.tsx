import NavButton from '@/components/nav/NavButton';
import { TUserInfo } from '@/types';
import React from 'react';

interface AuthorizedInfoProps {
  userInfo: TUserInfo;
  handleClickLogoutButton: () => void;
}

const AuthorizedInfo = ({
  userInfo,
  handleClickLogoutButton,
}: AuthorizedInfoProps) => {
  return (
    <>
      <span className="shrink-0 mr-2 bg-ceos-1 text-white rounded-[20px] text-xs md:text-xl px-5 py-2.5 box-border justify-center items-center inline-flex">{`${userInfo.teamName} ${userInfo.part} ${userInfo.name}`}</span>
      <NavButton
        buttonStyle="mr-2.5 border border-ceos-1"
        title="로그아웃"
        handleClickButton={handleClickLogoutButton}
      />
    </>
  );
};

export default AuthorizedInfo;
