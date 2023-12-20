import { TUserInfo } from '@/types';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useSession = () => {
  const [userInfo, setUserInfo] = useState<TUserInfo | null | undefined>(
    undefined
  );
  const pathName = usePathname();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/session');
        if (res.ok) {
          const stored = await res.json();
          setUserInfo(stored);
        } else throw new Error();
      } catch {
        console.log('test');
      }
    })();
  }, [pathName]);

  return userInfo;
};
