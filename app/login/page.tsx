'use client';

import AuthInput from '@/components/auth/AuthInput';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [loginErrorStatus, setLoginErrorStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      loginId: event.currentTarget.loginId.value,
      password: event.currentTarget.password.value,
    };

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        cache: 'no-cache',
      });
      if (res.ok) {
        location.replace('/');
      } else if (res.status === 404) {
        setLoginErrorStatus('아이디를 확인해주세요.');
      } else if (res.status === 401) {
        setLoginErrorStatus('비밀번호를 확인해주세요.');
      } else {
        setLoginErrorStatus('로그인에 실패했습니다.');
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
        <AuthInput placeHolder="아이디" inputName="loginId" inputStyle="mb-3" />
        <AuthInput placeHolder="비밀번호" inputName="password" isPassword />
        <div className=" h-5 my-2 text-[#ca2d18] text-[14px]">
          {loginErrorStatus}
        </div>
        <button
          type="submit"
          className="bg-ceos-1 rounded-[5px] w-[120px] text-white px-4 py-1 font-bold"
        >
          로그인
        </button>
        <Link
          href="/join"
          className="text-[#707070] mt-2 pb-[1px] border-b border-[#707070]"
        >
          회원가입
        </Link>
      </form>
    </div>
  );
};

export default Login;
