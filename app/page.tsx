'use client';

import HoveringButton from '@/components/common/HoveringButton';
import VoteBanner from '@/components/home/VoteBanner';
import { useRouter } from 'next/navigation';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-ceos-2 text-2xl font-semibold mt-20 md:text-3xl">
        파트장 / 데모데이 투표
      </div>
      <div className="flex content-center mt-8">
        <div className="mx-2 md:mx-4 flex flex-col items-center">
          <VoteBanner>
            <>
              FRONT-END <br />
              파트장 투표
            </>
          </VoteBanner>
          <HoveringButton buttonStyle="w-[100px] h-[40px] mt-4 md:w-[200px]">
            투표하기
          </HoveringButton>
        </div>
        <div className="mx-2 md:mx-4 flex flex-col items-center">
          <VoteBanner>
            <>
              데모데이
              <br /> 우승팀 투표
            </>
          </VoteBanner>
          <HoveringButton buttonStyle="w-[100px] h-[40px] mt-4 md:w-[200px]">
            투표하기
          </HoveringButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
