'use client';
import React from 'react';
import VoteResultItem from '@/components/vote/VoteResult';
import HoveringButton from '@/components/common/HoveringButton';

interface Candidate {
  id: number;
  name: string;
  part: string;
  count: number;
}
const page = () => {
  const [voteResults, setVoteResults] = React.useState<Candidate[]>([]);
  React.useEffect(() => {
    async function fetchResults() {
      try {
        const res = await fetch('/api/v1/demoday/votes');
        if (res.ok) {
          const results = await res.json();
          console.log(results);
          setVoteResults(results);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchResults();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold text-[#1E40AF] mb-8">
        데모데이 투표결과
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {voteResults.map((result: any) => (
          <div key={result.id} className="flex flex-col space-y-4">
            <VoteResultItem
              name={result.name}
              teamname={result.part}
              votes={result.count}
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
