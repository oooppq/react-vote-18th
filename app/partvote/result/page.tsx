import VoteResultItem from '@/components/vote/VoteResult';
import { getSession } from '@/utils/auth';
import HoveringLink from '@/components/common/HoveringLink';

interface Candidate {
  id: number;
  name: string;
  part: string;
  count: number;
}

const getPartLeaderResults = async (part: 'FE' | 'BE') => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/part-leader/results?part=${part}`
  );
  if (res.ok) {
    const results = await res.json();
    return results;
  }
  return null;
};

const page = async () => {
  const userInfo = await getSession();

  const data = await getPartLeaderResults(userInfo?.part!);
  const candidates: Candidate[] = data?.candidateList;

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold text-[#1E40AF] mb-8">
        파트장 투표결과
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {candidates.map((candidate: Candidate) => (
          <div key={candidate.id} className="flex flex-col space-y-4">
            <VoteResultItem
              name={candidate.name}
              teamname={candidate.part}
              votes={candidate.count}
            />
          </div>
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
