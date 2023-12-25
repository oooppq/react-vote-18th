import { useState } from 'react';

export const useJoinHandler = () => {
  const [wrongNameFlag, setWrongNameFlag] = useState<boolean | undefined>(
    undefined
  );
  const [wrongIdFlag, setWrongIdFlag] = useState<boolean | undefined>(
    undefined
  );
  const [duplicateIdFlag, setDuplicateIdFlag] = useState<boolean | undefined>(
    undefined
  );
  const [wrongPwFlag, setWrongPwFlag] = useState<boolean | undefined>(
    undefined
  );
  const [differentPwFlag, setDifferentPwFlag] = useState<boolean | undefined>(
    undefined
  );
  const [wrongEmailFlag, setWrongEmailFlag] = useState<boolean | undefined>(
    undefined
  );
  const [duplicateEmailFlag, setDuplicateEmailFlag] = useState<
    boolean | undefined
  >(undefined);
  const [notSelectedFlag, setNotSelectedFlag] = useState<boolean | undefined>(
    undefined
  );

  const nameWarningMessage =
    wrongNameFlag !== undefined
      ? wrongNameFlag
        ? '이름을 확인해주세요.'
        : '올바른 이름입니다.'
      : '';

  const idWarningMessage = (() => {
    if (wrongIdFlag === undefined && duplicateIdFlag === undefined) return '';

    if (wrongIdFlag === false && duplicateIdFlag === false)
      return '올바른 아이디입니다.';

    if (wrongIdFlag) return '아이디를 확인해주세요.';
    if (duplicateIdFlag) return '이미 가입된 아이디입니다.';
    return '아이디를 확인해주세요.';
  })();

  const passwordWarningMessage =
    wrongPwFlag !== undefined
      ? wrongPwFlag
        ? '비밀번호를 확인해주세요.'
        : '올바른 비밀번호입니다.'
      : '';

  const passwordConfirmWarningMessage =
    differentPwFlag !== undefined
      ? differentPwFlag
        ? '비밀번호가 일치하지 않습니다.'
        : '비밀번호가 일치합니다.'
      : '';

  const emailWarningMessage = (() => {
    if (wrongEmailFlag === undefined && duplicateEmailFlag === undefined)
      return '';

    if (wrongEmailFlag === false && duplicateEmailFlag === false)
      return '올바른 이메일입니다.';

    if (wrongEmailFlag) return '이메일을 확인해주세요.';
    if (duplicateEmailFlag) return '이미 가입된 이메일입니다.';
    return '이메일을 확인해주세요.';
  })();

  const [email, setEmail] = useState<string>('');
  const [loginId, setLoginId] = useState<string>('');
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    if (/^([a-zA-Z0-9가-힣]){1,5}$/.test(str)) {
      setWrongNameFlag(false);
    } else {
      setWrongNameFlag(true);
    }
    setUserName(str);
  };

  const handleChangeId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    if (/[a-z0-9]{6,20}$/g.test(str)) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/loginId`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ loginId: str }),
          cache: 'no-cache',
        }
      );
      if (res.ok) {
        setDuplicateIdFlag(false);
      } else setDuplicateIdFlag(true);

      setWrongIdFlag(false);
    } else {
      setWrongIdFlag(true);
    }
    setLoginId(str);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    if (/^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/.test(str)) {
      setWrongPwFlag(false);
    } else {
      setWrongPwFlag(true);
    }
    setPassword(str);
  };

  const handleChangePasswordConfirm = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const str = e.target.value;
    if (str === password) {
      setDifferentPwFlag(false);
    } else {
      setDifferentPwFlag(true);
    }
    setPasswordConfirm(str);
  };
  const handleChangeEmail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    if (/\S+@\S+\.\S+/.test(str)) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/email`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ email: str }),
          cache: 'no-cache',
        }
      );
      if (res.ok) {
        setDuplicateEmailFlag(false);
      } else setDuplicateEmailFlag(true);

      setWrongEmailFlag(false);
    } else {
      setWrongEmailFlag(true);
    }
    setEmail(str);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.part.value || !event.currentTarget.team.value) {
      setNotSelectedFlag(true);
      return;
    } else setNotSelectedFlag(false);

    if (
      wrongNameFlag === undefined ||
      wrongNameFlag ||
      wrongIdFlag === undefined ||
      wrongIdFlag ||
      duplicateIdFlag === undefined ||
      duplicateIdFlag ||
      wrongPwFlag === undefined ||
      wrongPwFlag ||
      differentPwFlag === undefined ||
      differentPwFlag ||
      wrongEmailFlag === undefined ||
      wrongEmailFlag ||
      duplicateEmailFlag === undefined ||
      duplicateEmailFlag
    )
      return;

    const payload = {
      name: event.currentTarget.username.value,
      loginId: event.currentTarget.loginId.value,
      password: event.currentTarget.password.value,
      email: event.currentTarget.email.value,
      part: event.currentTarget.part.value,
      teamName: event.currentTarget.team.value,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/signup`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(payload),
          cache: 'no-cache',
        }
      );
      if (res.ok) {
        location.replace('/login');
      } else {
      }
    } catch {}
  };

  return {
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
  };
};
