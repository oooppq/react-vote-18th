'use client';

import NavButton from '@/components/common/NavButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="flex mx-3 mt-3 h-[44px] md:mx-10 md:mt-10 md:h-[73px] items-center">
      <button
        className="flex-auto"
        onClick={() => {
          router.push('/');
        }}
      >
        <Image
          src="/ceos-logo.png"
          fill
          className="!relative !w-[100px] md:!w-[172px]"
          alt="ceos logo"
        />
      </button>
      <NavButton
        buttonStyle="mr-2.5 border border-ceos-1"
        title="로그인"
        handleClickButton={() => {
          router.push('/login');
        }}
      />
      <NavButton
        buttonStyle="mr-2.5 bg-ceos-1 text-white"
        title="회원가입"
        handleClickButton={() => {
          router.push('/join');
        }}
      />
    </div>
  );
};

export default NavBar;
