"use client";
import React from "react";
import VoteResultItem from "@/components/vote/VoteResult";
import HoveringButton from "@/components/common/HoveringButton";
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
        const response = await fetch("/api/partvote?part=FE");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setVoteResults(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchResults();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold text-[#1E40AF] mb-8">
        파트장 투표결과
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {voteResults.map((result: any) => (
          <div key={result.id} className="flex flex-col space-y-4">
            <VoteResultItem
              number={String(result.id % 10)}
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
