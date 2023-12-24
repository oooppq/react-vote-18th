'use client';

import NavButton from '@/components/nav/NavButton';
import { useSession } from '@/hooks/useSession';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { TUserInfo } from '@/types';
import UnauthorizedInfo from '@/components/nav/UnauthorizedInfo';
import AuthorizedInfo from '@/components/nav/AuthorizedInfo';

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const userInfo: TUserInfo | null | undefined = useSession();

  // 일단 누르기만하면 바로 로그아웃되도록 해둠
  const handleClickLogoutButton = async () => {
    if (!userInfo) return;
    const serverReqHeaders = new Headers();
    serverReqHeaders.set('AUTHORIZATION', userInfo!.accessToken);
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
        headers: serverReqHeaders,
        cache: 'no-cache',
      });
      location.reload();
      if (res.ok) {
        // do something
      }
    } catch {
      location.reload();
    }
  };

  if (pathname === '/login' || pathname === '/join') return null;

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
          className="!relative !w-[100px] md:!w-[172px] !shrink-0"
          alt="ceos logo"
        />
      </button>
      {userInfo !== undefined ? (
        userInfo ? (
          <AuthorizedInfo
            userInfo={userInfo}
            handleClickLogoutButton={handleClickLogoutButton}
          />
        ) : (
          <UnauthorizedInfo
            handleClickLoginButton={() => {
              router.push('/login');
            }}
            handleClickJoinButton={() => {
              router.push('/join');
            }}
          />
        )
      ) : null}
    </div>
  );
};

export default NavBar;
