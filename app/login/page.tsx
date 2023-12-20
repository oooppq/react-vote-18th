'use client';

import AuthInput from '@/components/auth/AuthInput';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      id: event.currentTarget.userId.value,
      password: event.currentTarget.password.value,
    };

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        router.push('/');
      }
    } catch {}
  };

  return (
    <div className="bg-ceos-3 w-full h-full flex flex-col items-center pt-[10%] md:pt-[77px]">
      <div className="text-white font-bold text-4xl my-6">로그인</div>
      <form
        className="flex flex-col w-[90%] max-w-[790px] items-center px-[10%] pt-12 pb-6 bg-white rounded-[10px]"
        onSubmit={handleSubmit}
      >
        <AuthInput placeHolder="아이디" inputName="userId" />
        {/* <AuthStatusMessage /> */}
        <AuthInput placeHolder="비밀번호" inputName="password" isPassword />
        {/* <AuthStatusMessage /> */}
        <button
          type="submit"
          className="bg-ceos-1 rounded-[5px] text-white px-4 py-1 mt-8 font-bold"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
