import React from 'react';

interface VoteResultItemProps {
  number: number;
  name: string;
  teamname: string;
  votes: number;
}

const VoteResultItem = ({
  number,
  name,
  teamname,
  votes,
}: VoteResultItemProps) => {
  return (
    <div
      className={`${
        number === 1 ? 'bg-ceos-1 text-white' : 'bg-white  text-black'
      } p-4 rounded-lg flex items-center w-11/12 mx-auto gap-4 mb-3 shadow-lg`}
    >
      <div className="flex-1 flex items-center">
        {number && <span className="font-bold text-lg mr-1">{number}</span>}
        <span className="shrink-0 font-bold text-lg mx-2 ">{name}</span>
        <span className="shrink-0 font-normal text-lg text-center">
          {teamname}
        </span>
      </div>
      <span className="shrink-0 font-bold text-lg">{votes} 표</span>
    </div>
  );
};

export default VoteResultItem;
