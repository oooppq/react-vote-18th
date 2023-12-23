"use client";
import React from "react";

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
        selected ? "bg-blue-200" : "bg-white"
      }  w-[18rem] h-[6rem] border-2 border-[#3B82F6] text-[#1E40AF] p-4 rounded-lg flex flex-col justify-center items-center mx-auto cursor-pointer`}
    >
      <div>{team}</div>
      <div>{name}</div>
    </div>
  );
};

export default VoteItem;
