import { useEffect, useState } from 'react';

export const useSession = () => {
  const [userInfo, setUserInfo] = useState(null);

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
