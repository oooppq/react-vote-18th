import { TUserInfo } from '@/types';
import { useEffect, useState } from 'react';

export const useSession = () => {
  const [userInfo, setUserInfo] = useState<TUserInfo | null | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/session');
        if (res.ok) {
          setUserInfo(await res.json());
        }
      } catch {}
    })();
  }, []);

  return userInfo;
};
