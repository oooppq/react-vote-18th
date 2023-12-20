import AuthInput from '@/components/auth/AuthInput';
import AuthStatusMessage from '@/components/auth/AuthStatusMessage';

const page = () => {
  return (
    <div className="bg-ceos-3 w-full h-full flex flex-col items-center pt-[10%] md:pt-[77px]">
      <div className="text-white font-bold text-4xl my-6">회원가입</div>
      <form
        action=""
        className="flex flex-col w-[90%] max-w-[790px] items-center px-[10%] pt-12 pb-6 bg-white rounded-[10px]"
      >
        <AuthInput placeHolder="이름" inputName="name" />
        {/* <AuthStatusMessage /> */}
        <AuthInput placeHolder="아이디" inputName="id" />
        {/* <AuthStatusMessage /> */}
        <AuthInput placeHolder="비밀번호" inputName="password" />
        {/* <AuthStatusMessage /> */}
        <AuthInput placeHolder="비밀번호 확인" inputName="passwordCheck" />
        {/* <AuthStatusMessage /> */}
        <AuthInput placeHolder="이메일 주소" inputName="email" />
        {/* <AuthStatusMessage /> */}
        <button
          type="submit"
          className="bg-ceos-1 rounded-[5px] text-white px-4 py-1 mt-8 font-bold"
        >
          가입하기
        </button>
      </form>
    </div>
  );
};

export default page;
