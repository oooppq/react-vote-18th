import NavButton from '@/components/common/NavButton';
import { CeosLogo } from '@/public';

const NavBar = () => {
  return (
    <div className="flex mx-10 mt-10 items-center">
      <button className="flex-auto">
        <CeosLogo className="w-[172px] h-[73px]" />
      </button>
      <NavButton buttonStyle="mr-2.5 border border-indigo-900" title="로그인" />
      <NavButton
        buttonStyle="mr-2.5 bg-[#384084] text-white"
        title="회원가입"
      />
    </div>
  );
};

export default NavBar;
