import AuthInput from '@/components/common/AuthInput';

const page = () => {
  AuthInput;
  return (
    <div className="bg-ceos-3 w-full h-full flex flex-col items-center">
      <div className="text-white font-bold text-4xl my-6">회원가입</div>
      <form
        action=""
        className="flex flex-col w-[90%] max-w-[790px] items-center py-12 bg-white rounded-[10px]"
      >
        <AuthInput placeHolder="이름" />
        <AuthInput placeHolder="아이디" />
        <AuthInput placeHolder="비밀번호" />
        <AuthInput placeHolder="비밀번호 확인" />
        <AuthInput placeHolder="이메일 주소" />
      </form>
    </div>
  );
};

export default page;
