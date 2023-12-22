import React from 'react';

interface VoteResultItemProps {
  number: string;
  name: string;
  teamname: string;
  votes: string;
}

const VoteResultItem = ({ number, name, teamname, votes }: VoteResultItemProps) => {
  return (
    <div className="bg-white border-2 border-[#3B82F6] text-[#1E40AF] p-4 rounded-lg flex justify-between items-center w-3/4 mx-auto">
      <div className="font-bold text-lg">
        <span className='mr-4'>{number}</span>
        <span className="ml-2">{name}</span>
      </div>
      <span className="font-bold text-lg ml-4">{teamname}</span>
      <span className="font-bold text-lg">{votes}</span>
    </div>
  );
};

export default VoteResultItem;
