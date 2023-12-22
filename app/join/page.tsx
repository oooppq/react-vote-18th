'use client';

import AuthInput from '@/components/auth/AuthInput';
import AuthStatusMessage from '@/components/auth/AuthStatusMessage';
import Dropdown from '@/components/auth/Dropdown';
import { useDebounce } from '@/hooks/useDebounce';
import { useJoinHandler } from '@/hooks/useJoinHandler';

const Join = () => {
  const {
    wrongNameFlag,
    wrongIdFlag,
    duplicateIdFlag,
    wrongPwFlag,
    differentPwFlag,
    wrongEmailFlag,
    duplicateEmailFlag,
    joinDoneFlag,
    handleChangeName,
    handleChangeId,
    handleChangePassword,
    handleChangePasswordConfirm,
    handleChangeEmail,
    handleSubmit,
    nameWarningMessage,
    idWarningMessage,
    passwordWarningMessage,
    passwordConfirmWarningMessage,
    emailWarningMessage,
  } = useJoinHandler();

  return (
    <div className="bg-ceos-3 w-full h-full flex flex-col items-center pt-[10%] md:pt-[77px]">
      <div className="text-white font-bold text-4xl my-6">회원가입</div>
      <form
        action=""
        className="flex flex-col w-[90%] max-w-[790px] items-center px-[10%] pt-12 pb-6 bg-white rounded-[10px]"
        onSubmit={handleSubmit}
      >
        <AuthInput
          placeHolder="이름 [1~5자]"
          inputName="username"
          handleChangeInput={useDebounce(handleChangeName, 500)}
        />
        <AuthStatusMessage
          message={nameWarningMessage}
          isWrong={wrongNameFlag}
        />
        <AuthInput
          placeHolder="아이디 [영문자 또는 숫자 6~20자]"
          inputName="loginId"
          handleChangeInput={useDebounce(handleChangeId, 500)}
        />
        <AuthStatusMessage
          message={idWarningMessage}
          isWrong={wrongIdFlag || duplicateIdFlag}
        />
        <AuthInput
          placeHolder="비밀번호 [영문, 숫자, 특수문자가 최소 1개씩 포함된 8~16자]"
          inputName="password"
          isPassword
          handleChangeInput={useDebounce(handleChangePassword, 500)}
        />
        <AuthStatusMessage
          message={passwordWarningMessage}
          isWrong={wrongPwFlag}
        />
        <AuthInput
          placeHolder="비밀번호 확인"
          inputName="passwordCheck"
          isPassword
          handleChangeInput={useDebounce(handleChangePasswordConfirm, 500)}
        />
        <AuthStatusMessage
          message={passwordConfirmWarningMessage}
          isWrong={differentPwFlag}
        />
        <AuthInput
          placeHolder="이메일 주소"
          inputName="email"
          handleChangeInput={useDebounce(handleChangeEmail, 500)}
        />
        <AuthStatusMessage
          message={emailWarningMessage}
          isWrong={wrongEmailFlag || duplicateEmailFlag}
        />
        <div className="flex justify-between w-[60%]">
          <Dropdown options={['FE', 'BE']} title="파트" />
          <Dropdown
            options={['레디', '셰어마인드', '스니프', '갓챠', '로컬무드']}
            title="팀"
          />
        </div>
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

export default Join;
