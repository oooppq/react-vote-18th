'use client';
import React from 'react';

interface VoteItemProps {
  team: string;
  name: string;
  selected: boolean;
  onChange: (team: string) => void;
  isPart?: boolean;
}

const VoteItem = ({
  team,
  name,
  selected,
  onChange,
  isPart,
}: VoteItemProps) => {
  const handleClick = () => {
    if (isPart) onChange(name);
    else onChange(team);
  };
  return (
    <div
      onClick={handleClick}
      className={`${
        selected
          ? 'bg-ceos-1 text-white'
          : 'bg-white text-black border-2 border-black'
      }  w-[120px] sm:w-[180px] h-[6rem] p-4 font-bold rounded-lg flex flex-col justify-center items-center mx-auto cursor-pointer transition-colors`}
    >
      <div className="font-normal">{team}</div>
      <div>{name}</div>
    </div>
  );
};

export default VoteItem;
