import HoveringLink from '@/components/common/HoveringLink';
import VoteBanner from '@/components/home/VoteBanner';
import { TUserInfo } from '@/types';
import { getSession } from '@/utils/auth';

const Home = async () => {
  const userInfo: TUserInfo | null = await getSession();
  let part = userInfo?.part === 'FE' ? 'FRONT-END' : 'BACK-END';

  return (
    <div className="flex flex-col items-center">
      <div className="text-ceos-2 text-2xl font-semibold mt-20 md:text-3xl">
        파트장 / 데모데이 투표
      </div>
      <div className="flex content-center mt-8">
        <div className="mx-2 md:mx-4 flex flex-col items-center">
          <VoteBanner>
            <>
              {userInfo ? `${part}` : '각 파트'}
              <br />
              파트장 투표
            </>
          </VoteBanner>
          {!userInfo?.candidateVoted ? (
            <HoveringLink
              to="/partvote"
              buttonStyle="w-[100px] h-[40px] mt-4 md:w-[200px]"
            >
              투표하기
            </HoveringLink>
          ) : null}
          {userInfo ? (
            <HoveringLink
              to="/partvote/result"
              buttonStyle="w-[100px] h-[40px] mt-4 md:w-[200px]"
            >
              결과보기
            </HoveringLink>
          ) : null}
        </div>
        <div className="mx-2 md:mx-4 flex flex-col items-center">
          <VoteBanner>
            <>
              데모데이
              <br /> 우승팀 투표
            </>
          </VoteBanner>
          {!userInfo?.teamVoted ? (
            <HoveringLink
              to={userInfo?.teamVoted ? '/demovote/result' : '/demovote'}
              buttonStyle="w-[100px] h-[40px] mt-4 md:w-[200px]"
            >
              투표하기
            </HoveringLink>
          ) : null}

          {userInfo ? (
            <HoveringLink
              to="/demovote/result"
              buttonStyle="w-[100px] h-[40px] mt-4 md:w-[200px]"
            >
              결과보기
            </HoveringLink>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
