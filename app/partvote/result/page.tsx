import VoteResultItem from '@/components/vote/VoteResult';
import { getSession } from '@/utils/auth';
import HoveringLink from '@/components/common/HoveringLink';
import Link from 'next/link';

interface Candidate {
  id: number;
  name: string;
  part: string;
  count: number;
}

interface PartvoteResultProps {
  searchParams: { [key: string]: 'FE' | 'BE' | undefined };
}

const getPartLeaderResults = async (part: 'FE' | 'BE') => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/part-leader/results?part=${part}`,
    { cache: 'no-cache' }
  );
  if (res.ok) {
    const results = await res.json();
    return results;
  }
  return null;
};

const page = async ({ searchParams }: PartvoteResultProps) => {
  const userInfo = await getSession();
  const part = searchParams.part || userInfo?.part || 'FE'; // 걍혹시몰라서 default는 FE로..
  const data = await getPartLeaderResults(part);
  const candidates: Candidate[] = data?.candidateList;

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold text-ceos-2">
        파트장 투표결과
      </h1>
      <h3 className="text-center mb-5 text-[#707070]">
        [5위까지만 표시됩니다.]
      </h3>
      <div className="w-full flex justify-center  mb-7">
        <Link
          href="?part=FE"
          className={`${
            part === 'FE' ? 'bg-ceos-1 text-white' : ''
          } px-4 py-1 rounded-l-lg shadow-lg`}
        >
          FE
        </Link>
        <Link
          href="?part=BE"
          className={`${
            part === 'BE' ? 'bg-ceos-1 text-white' : ''
          } px-4 py-1 rounded-r-lg shadow-lg`}
        >
          BE
        </Link>
      </div>
      <div className="">
        {candidates
          .sort()
          .slice(0, 5)
          .map((candidate: Candidate, idx) => (
            <VoteResultItem
              key={candidate.id}
              number={idx + 1}
              name={candidate.name}
              teamname={candidate.part}
              votes={candidate.count}
            />
          ))}
      </div>
      <div className="mt-8 flex justify-center">
        <HoveringLink to="/" buttonStyle="w-[100px] h-[60px] mt-4 md:w-[200px]">
          돌아가기
        </HoveringLink>
      </div>
    </div>
  );
};

export default page;
