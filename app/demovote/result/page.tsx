import VoteResultItem from '@/components/vote/VoteResult';
import HoveringButton from '@/components/common/HoveringButton';

interface Candidate {
  teamName: string;
  description: string;
  count: number;
}

const getDemoResults = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/demoday/results`
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
      <h1 className="text-center text-3xl font-bold text-[#1E40AF] mb-8">
        데모데이 투표결과
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {candidates.map((candidate) => (
          <div
            key={`${candidate.teamName}${candidate.description}`}
            className="flex flex-col space-y-4"
          >
            <VoteResultItem
              name={candidate.teamName}
              teamname={candidate.description}
              votes={candidate.count}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <HoveringButton buttonStyle="w-[100px] h-[60px] mt-4 md:w-[200px]">
          돌아가기
        </HoveringButton>
      </div>
    </div>
  );
};

export default page;
