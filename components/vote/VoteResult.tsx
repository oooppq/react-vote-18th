import React from 'react';

interface VoteResultItemProps {
  number?: string;
  name: string;
  teamname: string;
  votes: string;
}

const VoteResultItem = ({
  number,
  name,
  teamname,
  votes,
}: VoteResultItemProps) => {
  return (
    <div className="bg-white border-2 border-[#3B82F6] text-[#1E40AF] p-4 rounded-lg flex items-center w-3/4 mx-auto gap-4">
      <div className="flex-1 flex items-center">
        {number && <span className="font-bold text-lg mr-4">{number}</span>}
        <span className="font-bold text-lg ml-2 flex-1">{name}</span>
      </div>
      <span className="font-bold text-lg flex-1 text-center">{teamname}</span>
      <span className="font-bold text-lg flex-1 text-right">{votes}</span>
    </div>
  );
};

export default VoteResultItem;
