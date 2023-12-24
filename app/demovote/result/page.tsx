import VoteResultItem from '@/components/vote/VoteResult';
import HoveringLink from '@/components/common/HoveringLink';

interface Candidate {
  teamName: string;
  description: string;
  count: number;
}

const getDemoResults = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/demoday/results`,
    { cache: 'no-cache' }
  );

  if (res.ok) {
    const results = await res.json();
    return results;
  }
  return null;
};

const page = async () => {
  const data = await getDemoResults();
  const candidates: Candidate[] = data?.teamList;
  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold text-ceos-2 mb-8">
        데모데이 투표결과
      </h1>
      <div className="">
        {candidates.map((candidate, idx) => (
          <VoteResultItem
            key={`${candidate.teamName}${candidate.description}`}
            number={idx + 1}
            name={candidate.teamName}
            teamname={candidate.description}
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
