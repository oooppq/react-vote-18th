import Link from 'next/link';
import React from 'react';

interface HoveringLinkProps {
  to: string;
  children: React.ReactNode;
  buttonStyle?: string;
}

const HoveringLink = ({ to, children, buttonStyle }: HoveringLinkProps) => {
  return (
    <Link
      href={to}
      className={`${buttonStyle} font-semibold text-white rounded-[20px] transition ease-in-out delay-100 bg-ceos-1 hover:-translate-y-1 hover:scale-110 hover:bg-ceos-2 duration-300 inline-flex items-center justify-center`}
    >
      {children}
    </Link>
  );
};

export default HoveringLink;
