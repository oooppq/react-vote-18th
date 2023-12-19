import NavButton from '@/components/common/NavButton';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="flex mx-3 mt-3 md:mx-10 md:mt-10 items-center">
      <button className="flex-auto">
        <Image
          src="/ceos-logo.png"
          fill
          className="!relative !w-[100px] md:!w-[172px]"
          alt="ceos logo"
        />
      </button>
      <NavButton buttonStyle="mr-2.5 border border-ceos-1" title="로그인" />
      <NavButton buttonStyle="mr-2.5 bg-ceos-1 text-white" title="회원가입" />
    </div>
  );
};

export default NavBar;
