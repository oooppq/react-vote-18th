'use client';

import AuthInput from '@/components/auth/AuthInput';
import AuthStatusMessage from '@/components/auth/AuthStatusMessage';
import Option from '@/components/auth/Option';
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
    notSelectedFlag,
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
    <div className="bg-ceos-3 w-full h-full flex flex-col items-center md:pt-[77px]">
      <div className="text-white font-bold text-4xl my-6">회원가입</div>
      <form
        action=""
        className="flex flex-col w-[90%] max-w-[790px] items-center px-[10%] lg:px-[100px] pt-12 pb-6 bg-white rounded-[10px]"
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
        <div className="w-full mt-3 px-5 text-[#707070] text-[14px]">
          <div className="flex">
            <div className="w-[40px] h-[21px] pb-3 border-r border-[#e3e3e3] mr-2">
              파트
            </div>
            <Option options={['FE', 'BE']} title="part" />
          </div>
          <div className="flex">
            <div className="w-[40px] h-[21px]  border-r border-[#e3e3e3]  mr-2">
              팀
            </div>
            <Option
              options={['레디', '셰어마인드', '스니프', '갓챠', '로컬무드']}
              title="team"
            ></Option>
          </div>
        </div>
        <AuthStatusMessage
          message={notSelectedFlag ? '파트 / 팀을 선택해주세요.' : ''}
          isWrong={notSelectedFlag}
        />
        <button
          type="submit"
          className="bg-ceos-1 rounded-[5px] text-white px-4 py-1 mt-5 font-bold"
        >
          가입하기
        </button>
      </form>
    </div>
  );
};

export default Join;
