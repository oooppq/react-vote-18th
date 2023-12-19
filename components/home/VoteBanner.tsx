import React from 'react';

interface VoteBannerProps {
  children: React.ReactNode;
}

const VoteBanner = ({ children }: VoteBannerProps) => {
  return (
    <button className="text-ceos-2 rounded-[20px] border-2 border-ceos-1 w-[150px] h-[150px] text-xl font-semibold md:w-[250px] md:h-[250px] md:text-3xl">
      {children}
    </button>
  );
};

export default VoteBanner;
